# Planejamento Arquitetural: SaaS de Gestão e Serialização de Kits Cosméticos (100% Google Cloud & Firebase)

## Visão Geral do Projeto
Sistema **SaaS Multi-Tenant 100% em Nuvem Google** para fabricantes, distribuidores e marcas de cosméticos criarem, serializarem e rastrearem caixas e kits de produtos.
Cada caixa recebe um **serial único** com **QR Code dinâmico**, associando os lotes e validades específicos dos produtos inseridos naquela unidade. O sistema integra com impressoras térmicas **Zebra** (geração direta de ZPL/PDF térmico) e entrega uma página pública móvel de alta sofisticação para o consumidor final via **Firebase Hosting & Cloud Firestore**.

---

## 1. Arquitetura da Solução (Google Cloud Platform & Firebase)

```mermaid
graph TD
    subgraph "Google Cloud & Firebase Platform"
        Auth[Firebase Authentication\nCustom Claims: tenant_id, role]
        Firestore[(Cloud Firestore NoSQL\nMulti-Tenant + Realtime)]
        Storage[Cloud Storage for Firebase\nLogos, Fotos de Cosméticos, ANVISA]
        Functions[Cloud Functions for Firebase v2\nAPIs de Suporte, Webhooks, ZPL]
        Hosting[Firebase Hosting / CDN\nSPA Web & Landing Page do Consumidor]
        Analytics[Google Analytics & BigQuery\nTelemetria de Scans do QR Code]
    end

    subgraph "Bancada do Operador (Fábrica / Expedição)"
        OperatorApp[Navegador Web / Tablet / PC]
        Scanner[Leitor de Código de Barras / Câmera]
        Zebra[Impressora Térmica Zebra]
    end

    subgraph "Consumidor Final (Mobile)"
        ClientApp[Smartphone do Cliente\n/k/{serialNumber}]
    end

    OperatorApp -->|Autentica Tenant & Permissões| Auth
    OperatorApp -->|Grava Caixa, Serial e Itens| Firestore
    Scanner -->|Entrada rápida de dados| OperatorApp
    OperatorApp -->|Upload de Imagens / Laudos| Storage
    OperatorApp -->|Gera ZPL / PDF da Etiqueta| Zebra
    ClientApp -->|Consulta Pública por Serial| Firestore
    ClientApp -->|Registra Scan / Telemetria| Functions
    Functions --> Analytics
    Hosting --> OperatorApp
    Hosting --> ClientApp
```

---

## 2. Modelagem no Cloud Firestore (Multi-Tenant)

### Estrutura de Coleções:

1. **`tenants/{tenantId}`** (Dados da Marca / Empresa)
   - `id`, `name`, `slug`, `customDomain`, `logoUrl`, `primaryColor`, `secondaryColor`, `anvisaLicense`, `supportWhatsapp`
   - `printerSettings`: `{ model, labelWidthMm, labelHeightMm, dpi, connectionType }`

2. **`tenants/{tenantId}/products/{productId}`** (Catálogo de Cosméticos)
   - `id`, `sku`, `name`, `description`, `anvisaProcess`, `ean`, `ingredientsInci`, `instructionsUse`, `precautions`, `imageUrl`

3. **`tenants/{tenantId}/lots/{lotId}`** (Lotes de cada Cosmético)
   - `id`, `productId`, `lotCode`, `manufacturingDate`, `expirationDate`, `status` (`active`, `recalled`, `exhausted`)

4. **`tenants/{tenantId}/kitTemplates/{kitTemplateId}`** (Modelos de Kits)
   - `id`, `sku`, `title`, `description`, `heroImageUrl`, `suggestedRoutineSteps` (array com ordem de uso)
   - `items`: `[{ productId, quantity }]`

5. **`boxes/{serialNumber}`** (A Caixa Física Serializada - Coleção Raiz Otimizada para Leitura Rápida)
   - `serialNumber` (ex: `KT-LEC-98214`), `tenantId`, `kitTemplateId`, `assembledAt`, `assembledBy`
   - `status` (`assembled`, `dispatched`, `sold`, `archived`)
   - `items`: `[{ productId, productName, lotCode, expirationDate, anvisa }]`

6. **`boxes/{serialNumber}/scans/{scanId}`** (Telemetria do Consumidor)
   - `scannedAt`, `userAgent`, `ipGeoCity`

---

## 3. Regras de Segurança no Cloud Firestore (Security Rules)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function isTenantUser(tenantId) {
      return request.auth != null && request.auth.token.tenant_id == tenantId;
    }

    // 1. Coleção privada do Tenant
    match /tenants/{tenantId}/{document=**} {
      allow read, write: if isTenantUser(tenantId);
    }

    // 2. Caixas Serializadas
    match /boxes/{serialNumber} {
      // Leitura pública para o consumidor final ao bipar o QR Code
      allow read: if true;

      // Criação/atualização apenas para operadores autenticados do tenant
      allow create, update: if request.auth != null && 
        request.auth.token.tenant_id == request.resource.data.tenantId;

      match /scans/{scanId} {
        allow read: if isTenantUser(resource.data.tenantId);
        allow create: if true; // Consumidor registra leitura
      }
    }
  }
}
```

---

## 4. Integração com a Impressora Zebra (100% Cloud)

1. **ZPL Generator**: Motor client-side ou Cloud Function que renderiza comandos ZPL nativos direto para a impressora.
2. **Web Print Calibrado**: CSS `@media print` no tamanho 100x50mm ou 100x150mm para impressão direta sem intermediários.
3. **Zebra Browser Print / Socket IP**: Suporte opcional a envio direto via TCP/IP na porta 9100.
