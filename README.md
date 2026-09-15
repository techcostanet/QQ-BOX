# QQ-BOX: CosmetiqCloud - SaaS de Serialização & Gestão de Kits Cosméticos (100% Google Cloud & Firebase)

Sistema **SaaS Multi-Tenant 100% em Nuvem Google** para indústrias, distribuidores e marcas de cosméticos criarem, serializarem e rastrearem caixas e kits de produtos. Cada caixa recebe um **serial único** com **QR Code dinâmico**, associando os lotes e validades específicos dos produtos inseridos naquela unidade. Integração com impressoras térmicas **Zebra** (geração direta de ZPL/PDF térmico) e página pública móvel de alta sofisticação para o consumidor final via **Firebase Hosting** e **Cloud Firestore**.

---

## ☁️ Arquitetura Google Cloud & Firebase

- **Banco de Dados em Tempo Real:** **Cloud Firestore** com subcoleções isoladas por Tenant e coleção pública otimizada para consulta de caixas por serial.
- **Segurança & Permissões:** **Firestore Security Rules** garantindo isolamento lógico de cada marca e leitura aberta para o QR Code do consumidor final sem login.
- **Autenticação:** **Firebase Authentication** com Custom Claims para operadores e administradores de fábrica.
- **Hospedagem & CDN:** **Firebase Hosting** com cache global e rewrites SPA.
- **Armazenamento:** **Cloud Storage for Firebase** para fotos de cosméticos, logos e laudos ANVISA.
- **Deploy com 1 Comando:** `firebase deploy`.

---

## 🚀 Principais Recursos

1. **Bancada de Montagem & Serialização Ágil:**
   - Montagem de kits com seleção/leitura de lotes individuais por item.
   - Geração instantânea de identificador serial único (ex: `KT-LEC-98214`).
   - Disparo automático de etiqueta térmica.

2. **Etiquetas Térmicas Zebra (100% Cloud):**
   - Suporte a comandos **ZPL nativos** (`^XA...^XZ`) prontos para envio direto via rede/USB.
   - Pré-visualização gráfica e impressão direta no navegador via CSS `@media print` calibrado (100x50 mm / 100x150 mm).

3. **Experiência Mobile do Consumidor (Leitura do QR Code):**
   - Página móvel com selo de verificação de autenticidade da caixa.
   - Lista dos cosméticos contidos com lotes e validades individuais daquela unidade física.
   - Composição INCI de ingredientes, alérgenos e rotina de beleza passo a passo.
   - Canal direto de SAC via WhatsApp e link da loja oficial.

4. **Rastreabilidade Reversa & Recall Sanitário:**
   - Busca imediata por lote de frasco/bisnaga (ex: `LT-2026-ESP02`).
   - Localização de todas as caixas serializadas que receberam aquele lote.
   - Telemetria de leituras do QR Code gravada no Firestore.

5. **Multi-Tenant & White-Label:**
   - Isolamento de dados por marca/empresa no Firestore.
   - Personalização de cores, logomarca, domínio customizado e licenças ANVISA.
   - Configurações da impressora Zebra (DPI, tamanho de etiqueta e conexão).

---

## 🛠️ Como Executar e Conectar ao Firebase

### 1. Pré-requisitos
- Node.js instalado (v18+)

### 2. Iniciar em Modo Demonstração (Sem credenciais)
O sistema possui fallback automático caso o Firebase não esteja configurado ainda:
```bash
npm.cmd install
npm.cmd run dev
```
Abra no navegador: **`http://localhost:5173/`**

### 3. Conectar ao seu Firebase Console
1. Acesse o [Firebase Console](https://console.firebase.google.com/) e crie um projeto (ou use um existente).
2. Ative o **Cloud Firestore** em modo de produção ou teste.
3. Copie as credenciais da Web App no arquivo `.env`:
```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto
VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```
4. Reinicie o servidor (`npm.cmd run dev`).
5. Na aba **White-Label & Zebra**, clique no botão **"Povoar Firestore com Dados Iniciais (Seed)"** para popular seu Firestore com cosméticos, marcas e kits de exemplo!

### 4. Deploy no Firebase Hosting & Firestore
```bash
npm.cmd run build
firebase deploy
```

---

## 📂 Estrutura de Arquivos

- `src/services/`:
  - `firebase.js`: Inicialização modular do Firebase SDK v12.
  - `firestoreService.js`: Operações de leitura em tempo real (`onSnapshot`), persistência de caixas, lotes e telemetria de scans.
- `src/components/`:
  - `Navbar.jsx`: Indicador de status do Firestore, seletor de tenant e abas.
  - `AssemblyStation.jsx`: Bancada de montagem com persistência no Firestore.
  - `ThermalLabelModal.jsx`: Visualizador de etiqueta térmica e gerador ZPL Zebra.
  - `ConsumerMobileView.jsx`: Simulador da experiência pública mobile do QR Code.
  - `TraceabilityRecall.jsx`: Rastreabilidade reversa por lote.
  - `CatalogManager.jsx`: Catálogo e criação de novos lotes.
  - `TenantSettings.jsx`: Configurações de marca e gerenciamento do Firestore.
- `firestore.rules`: Regras de segurança multi-tenant prontas para deploy.
- `storage.rules`: Regras de segurança do Cloud Storage.
- `firebase.json`: Configuração de deploy do Firebase Hosting e Firestore.
- `docs/`:
  - `docs/PLANEJAMENTO_ARQUITETURAL.md`: Especificação técnica detalhada 100% Google Cloud.
  - `docs/WALKTHROUGH.md`: Guia de validação passo a passo.


