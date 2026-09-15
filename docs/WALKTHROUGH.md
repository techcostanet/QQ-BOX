# Walkthrough: Projeto Firebase `qq-box-tc` Conectado, 30 Cosméticos Criados e Tema Claro Limpo

O projeto **QQ-BOX (CosmetiqCloud)** foi conectado com sucesso ao seu projeto oficial do Google Firebase (**`qq-box-tc`**), populado com 30 produtos cosméticos altamente realistas e redesign completo para uma estética clara, arejada e minimalista de luxo.

---

## 1. Conexão com o Firebase `qq-box-tc`

- **Web App Registrado:** Criado o Web App oficial `QQ-BOX Web` no projeto `qq-box-tc`.
- **Credenciais Gravadas:**
  - Arquivo [`.env`](file:///c:/Nexa/QQ-BOX/.env) configurado com as chaves reais do projeto:
    - Project ID: `qq-box-tc`
    - App ID: `1:584365568642:web:0e2b95afebdbf27769ba9b`
    - API Key: `AIzaSyBzMCFgQx-CGrowqtRyXgzljEzU5XBH_cE`
- **Regras de Segurança do Cloud Firestore:** Deployed com sucesso no Firestore oficial (`rules_version = '2'`).
- **Deploy no Firebase Hosting:** A aplicação foi compilada e publicada na nuvem:
  - 🌐 **URL de Produção:** **`https://qq-box-tc.web.app`** (ou `https://qq-box-tc.firebaseapp.com`)

---

## 2. 30 Cosméticos de Alta Performance Criados & Semeados no Firestore

Cadastramos 30 produtos cosméticos realistas no banco de dados [Cloud Firestore](https://console.firebase.google.com/project/qq-box-tc/firestore) com dados técnicos verossímeis (processo ANVISA, EAN-13, volume, formulação INCI completa, modo de uso e precauções):

| # | Cosmético | Categoria | Volume | SKU | Lote Exemplo |
| :-: | :--- | :--- | :--- | :--- | :--- |
| 1 | **Mousse de Limpeza Micelar com Camélia Branca** | Limpeza Facial | 150 ml | `LEC-LIMP-01` | `LT-2026-LIMP01` |
| 2 | **Óleo Demaquilante Emulsionável com Esqualano** | Limpeza Facial | 120 ml | `LEC-CLEAN-02` | `LT-2026-CLN01` |
| 3 | **Gel Purificante Suave com Calêndula & Pantenol** | Limpeza Facial | 200 ml | `LEC-GEL-03` | `LT-2026-GEL01` |
| 4 | **Tônico Equilibrante com Água Floral de Rosas Damascena** | Tonificação | 150 ml | `LEC-TON-04` | `LT-2026-TON01` |
| 5 | **Essência Facial Revitalizante com Fermento de Chá Preto** | Pré-Tratamento | 100 ml | `LEC-ESS-05` | `LT-2026-ESS01` |
| 6 | **Sérum Radiance Vitamina C 15% + Ácido Ferúlico** | Antioxidante | 30 ml | `LEC-SER-06` | `LT-2026-VITC01` |
| 7 | **Sérum Preenchedor Ácido Hialurônico 5D Multi-Peso** | Hidratação Profunda | 30 ml | `LEC-HA-07` | `LT-2026-HA01` |
| 8 | **Sérum Renovador Noturno Retinol 0.3% em Esqualano** | Renovação Celular | 30 ml | `LEC-RET-08` | `LT-2026-RET01` |
| 9 | **Sérum Uniformizador Niacinamida 10% + Zinco PCA** | Poros & Textura | 30 ml | `LEC-NIA-09` | `LT-2026-NIA01` |
| 10 | **Sérum Reparador Peptídeos de Cobre & Centella** | Firmeza & Regeneração | 30 ml | `LEC-COP-10` | `LT-2026-COP01` |
| 11 | **Sérum Antioxidante Resveratrol Puro 3% + Ferúlico** | Defesa Noturna | 30 ml | `LEC-RES-11` | `LT-2026-RES01` |
| 12 | **Sérum Esfoliante Noturno Ácido Glicólico 8% + Aloe** | Peeling Suave | 30 ml | `LEC-GLY-12` | `LT-2026-GLY01` |
| 13 | **Fluido Clareador Intensivo Ácido Tranexâmico 3%** | Clareamento | 30 ml | `LEC-TRX-13` | `LT-2026-TRX01` |
| 14 | **Creme Barreira Cera-Repair com 3 Ceramidas** | Nutrição & Barreira | 50 g | `LEC-CER-14` | `LT-2026-CER01` |
| 15 | **Gel-Creme Hidratante Hydra-Infusion Toque Acetinado** | Hidratação Diária | 50 ml | `LEC-HYD-15` | `LT-2026-HYD01` |
| 16 | **Bálsamo Noturno Regenerador Bakuchiol & Peptídeos** | Anti-Idade Noturno | 50 g | `LEC-BAK-16` | `LT-2026-BAK01` |
| 17 | **Emulsão Facial Calmante com Aveia Coloidal** | Peles Sensíveis | 60 ml | `LEC-AVE-17` | `LT-2026-AVE01` |
| 18 | **Sérum Revitalizante Olhos com Cafeína 5%** | Olheiras & Bolsas | 15 ml | `LEC-EYE-18` | `LT-2026-EYE01` |
| 19 | **Creme Reparador Olhos Tri-Peptídico** | Linhas de Expressão | 15 g | `LEC-PEPE-19` | `LT-2026-PEPE01` |
| 20 | **Lip Oil Nutritivo Karité & Esqualano** | Cuidado Labial | 10 ml | `LEC-LIP-20` | `LT-2026-LIP01` |
| 21 | **Fluido Mineral Invisível FPS 60 Óxido de Zinco** | Fotoproteção | 50 ml | `LEC-SOL-21` | `LT-2026-SOL21A` |
| 22 | **Protetor Solar Gel Aquoso Toque Seco FPS 50** | Fotoproteção | 50 ml | `LEC-SOL-22` | `LT-2026-SOL22` |
| 23 | **Stick Solar Facial em Bastão FPS 70** | Fotoproteção | 20 g | `LEC-STK-23` | `LT-2026-STK23` |
| 24 | **Peeling Enzimático Iluminador Romã** | Esfoliação Enzimática | 60 g | `LEC-PEL-24` | `LT-2026-PEL24` |
| 25 | **Máscara Purificante de Argila Branca Amazônica** | Máscara Facial | 75 g | `LEC-ARG-25` | `LT-2026-ARG25` |
| 26 | **Sleeping Mask Noturna Hidro-Nutritiva** | Máscara Facial | 70 g | `LEC-SLP-26` | `LT-2026-SLP26` |
| 27 | **Bruma Facial Antioxidante com Chá Branco** | Bruma Hidratante | 100 ml | `LEC-BRU-27` | `LT-2026-BRU27` |
| 28 | **Óleo Facial Puro 100% Esqualano Vegetal** | Óleo Nobre | 30 ml | `LEC-OLE-28` | `LT-2026-OLE28` |
| 29 | **Elixir Noturno de Óleos & Rosa Mosqueta** | Óleo Nobre | 30 ml | `LEC-ELX-29` | `LT-2026-ELX29` |
| 30 | **Esfoliante Facial Micro-Cristais de Bambu** | Esfoliação Física | 60 g | `LEC-ESF-30` | `LT-2026-ESF30` |

Também foram semeados:
- **35 Lotes** com validades entre 2027 e 2029.
- **8 Modelos de Kits Comerciais** com passos de aplicação da rotina recomendada.
- **Caixas Físicas Serializadas** com telemetria ativa.

---

## 3. Redesign em Tons Claros & Design Limpo

- **Paleta Arejada e Iluminada:** Fundo em tom porcelana suave (`#f8fafc`), cartões brancos puros (`#ffffff`) com sombras sutis e bordas delicadas (`#e2e8f0`).
- **Acentos Dourado Champagne & Verde Botânico:** Acentos refinados e legíveis inspirados na alta perfumaria e cosmética francesa.
- **Experiência Mobile:** Moldura de smartphone com acabamento limpo e elegante simulando o unboxing do kit para o consumidor final.
- **Tipografia:** Contraste nítido em cinza ardósia profundo (`#0f172a` e `#334155`), com zero poluição visual.

---

## 4. Como Acessar

1. **Online (Hospedado no Firebase):**
   - **`https://qq-box-tc.web.app`**
2. **Localmente:**
   - No terminal: `npm.cmd run dev`
   - Acesse: `http://localhost:5173/`
