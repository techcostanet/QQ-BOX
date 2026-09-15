// Mock Database Multi-Tenant Cloud Native - 30 Cosméticos de Alta Performance
// Estrutura espelhada para o Cloud Firestore (qq-box-tc)

export const INITIAL_TENANTS = [
  {
    id: "tenant-leclat",
    name: "L'Éclat Botanicals Paris",
    slug: "leclat",
    tagline: "Alta Cosmetologia Botânica & Sustentável",
    logoText: "L'ÉCLAT",
    primaryColor: "#9b782b", // Dourado champagne sofisticado
    secondaryColor: "#1e3a2f", // Verde botânico clássico
    accentColor: "#c49d3f",
    customDomain: "qr.leclatcosmetiques.com",
    anvisaLicense: "AFE-ANVISA: 2.08942-1",
    supportWhatsapp: "5511999887766",
    storeUrl: "https://leclatbotanicals.com.br",
    printerSettings: {
      model: "Zebra ZD220 / ZD420",
      labelWidthMm: 100,
      labelHeightMm: 50,
      dpi: 203,
      connectionType: "USB / WebPrint"
    }
  },
  {
    id: "tenant-dermasync",
    name: "DermaSync Clinical Lab",
    slug: "dermasync",
    tagline: "Dermocosméticos de Precisão Molecular",
    logoText: "DERMASYNC",
    primaryColor: "#2563eb",
    secondaryColor: "#0f172a",
    accentColor: "#38bdf8",
    customDomain: "rastreio.dermasync.med.br",
    anvisaLicense: "AFE-ANVISA: 2.04512-8",
    supportWhatsapp: "5511988776655",
    storeUrl: "https://dermasync.com.br",
    printerSettings: {
      model: "Zebra ZT411 Industrial",
      labelWidthMm: 100,
      labelHeightMm: 60,
      dpi: 300,
      connectionType: "Ethernet TCP/IP"
    }
  }
];

export const INITIAL_PRODUCTS = [
  // 1. Limpeza Facial
  {
    id: "prod-01",
    tenantId: "tenant-leclat",
    sku: "LEC-LIMP-01",
    name: "Mousse de Limpeza Micelar com Camélia Branca",
    category: "Limpeza Facial",
    volume: "150 ml",
    anvisaProcess: "25351.489211/2026-12",
    barcodeEan: "7898991204011",
    description: "Espuma aveludada ultraleve enriquecida com Água Termal dos Alpes e Extrato de Camélia Branca. Remove impurezas e poluição sem agredir a barreira cutânea.",
    howToUse: "Aplique duas doses sobre o rosto úmido com movimentos circulares suaves. Enxágue com água morna pela manhã e à noite.",
    inciIngredients: "Aqua, Camellia Sinensis Leaf Extract, Sodium Cocoyl Glycinate, Niacinamide, Glycerin, Phenoxyethanol, Parfum, Citric Acid.",
    precautions: "Uso externo. Evite contato direto com os olhos. Suspenda o uso em caso de irritação.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-02",
    tenantId: "tenant-leclat",
    sku: "LEC-CLEAN-02",
    name: "Óleo Demaquilante Emulsionável com Esqualano",
    category: "Limpeza Facial",
    volume: "120 ml",
    anvisaProcess: "25351.489212/2026-15",
    barcodeEan: "7898991204028",
    description: "Cleansing oil luxuoso que dissolve maquiagem à prova d'água e protetor solar com toque sedoso. Emulsiona instantaneamente ao contato com a água.",
    howToUse: "Aplique 3 a 4 pumps sobre as mãos e rosto secos. Massageie suavemente por 60 segundos. Adicione água morna para emulsionar e enxágue.",
    inciIngredients: "Caprylic/Capric Triglyceride, Squalane, PEG-20 Glyceryl Triisostearate, Tocopherol, Simmondsia Chinensis Seed Oil, Bisabolol.",
    precautions: "Armazenar em local seco e ao abrigo de luz solar direta. Manter fora do alcance de crianças.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-03",
    tenantId: "tenant-leclat",
    sku: "LEC-GEL-03",
    name: "Gel Purificante Suave com Calêndula & Pantenol",
    category: "Limpeza Facial",
    volume: "200 ml",
    anvisaProcess: "25351.489213/2026-88",
    barcodeEan: "7898991204035",
    description: "Gel de limpeza calmante sem sabão com extrato orgânico de calêndula e pró-vitamina B5. Deixa a pele fresca, calma e equilibrada.",
    howToUse: "Aplique na pele molhada, massageie até criar uma espuma delicada e enxágue abundantemente.",
    inciIngredients: "Aqua, Decyl Glucoside, Panthenol, Calendula Officinalis Extract, Allantoin, Glycerin, Sodium Chloride, Sodium Benzoate.",
    precautions: "Não ingerir. Uso tópico.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80"
  },

  // 2. Tonificação & Essências
  {
    id: "prod-04",
    tenantId: "tenant-leclat",
    sku: "LEC-TON-04",
    name: "Tônico Equilibrante com Água Floral de Rosas Damascena",
    category: "Tonificação",
    volume: "150 ml",
    anvisaProcess: "25351.489214/2026-33",
    barcodeEan: "7898991204042",
    description: "Destilado de pétalas puras de rosa damascena enriquecido com ácido hialurônico botânico. Restaura o pH fisiológico e revitaliza o viço natural.",
    howToUse: "Borrife diretamente no rosto limpo ou aplique com auxílio de um pad de algodão reutilizável.",
    inciIngredients: "Rosa Damascena Flower Water, Pentylene Glycol, Sodium Hyaluronate, Centella Asiatica Extract, Citric Acid, Potassium Sorbate.",
    precautions: "Evite contato direto com a conjuntiva ocular.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-05",
    tenantId: "tenant-leclat",
    sku: "LEC-ESS-05",
    name: "Essência Facial Revitalizante com Fermento de Chá Preto",
    category: "Pré-Tratamento",
    volume: "100 ml",
    anvisaProcess: "25351.489215/2026-21",
    barcodeEan: "7898991204059",
    description: "Essência prebiótica fermentada de kombucha de chá preto. Aumenta a luminosidade, suaviza linhas finas e potencializa a absorção dos séruns seguintes.",
    howToUse: "Coloque 5 gotas na palma das mãos e pressione suavemente sobre o rosto, pescoço e colo limpos.",
    inciIngredients: "Saccharomyces/Xylinum/Black Tea Ferment, Butylene Glycol, Glycerin, Sodium Hyaluronate, Adenosine, Ethylhexylglycerin.",
    precautions: "Uso tópico exclusivamente.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },

  // 3. Séruns de Alta Performance
  {
    id: "prod-06",
    tenantId: "tenant-leclat",
    sku: "LEC-SER-06",
    name: "Sérum Radiance Vitamina C 15% + Ácido Ferúlico",
    category: "Tratamento Antioxidante",
    volume: "30 ml",
    anvisaProcess: "25351.621094/2026-88",
    barcodeEan: "7898991204066",
    description: "Fórmula padrão-ouro com Ácido L-Ascórbico 15% puro estabilizado com Ácido Ferúlico 0.5% e Vitamina E 1%. Neutraliza radicais livres e clareia manchas.",
    howToUse: "Pela manhã, aplique 4 a 5 gotas na pele limpa e seca antes do hidratante e protetor solar.",
    inciIngredients: "Aqua, Ascorbic Acid (15%), Ethoxydiglycol, Tocopherol, Ferulic Acid, Hyaluronic Acid, Sodium Hydroxide.",
    precautions: "Armazenar em local fresco e protegido da luz solar para preservar a atividade da vitamina C.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-07",
    tenantId: "tenant-leclat",
    sku: "LEC-HA-07",
    name: "Sérum Preenchedor Ácido Hialurônico 5D Multi-Peso",
    category: "Hidratação Profunda",
    volume: "30 ml",
    anvisaProcess: "25351.621095/2026-44",
    barcodeEan: "7898991204073",
    description: "Combinação sinérgica de 5 pesos moleculares de ácido hialurônico para hidratação em todas as camadas da derme, com efeito plumping instantâneo.",
    howToUse: "Aplique de 3 a 4 gotas sobre a pele ligeiramente umedecida, de manhã e à noite.",
    inciIngredients: "Aqua, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Panthenol, Pentylene Glycol.",
    precautions: "Uso externo. Em caso de sensibilidade, suspenda o uso.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-08",
    tenantId: "tenant-leclat",
    sku: "LEC-RET-08",
    name: "Sérum Renovador Noturno Retinol 0.3% em Esqualano",
    category: "Renovação Celular",
    volume: "30 ml",
    anvisaProcess: "25351.621096/2026-77",
    barcodeEan: "7898991204080",
    description: "Retinol puro microencapsulado suspenso em base botânica de esqualano. Estimula a síntese de colágeno e renova a textura da pele sem ressecar.",
    howToUse: "Uso noturno. Aplique 3 gotas sobre a pele limpa 2 a 3 vezes por semana inicialmente, aumentando a frequência gradualmente.",
    inciIngredients: "Squalane, Retinol (0.3%), Glycine Soja Oil, Tocopherol, Bisabolol, Caprylic/Capric Triglyceride.",
    precautions: "Obrigatório o uso de protetor solar de amplo espectro durante o dia. Não recomendado durante a gravidez.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-09",
    tenantId: "tenant-leclat",
    sku: "LEC-NIA-09",
    name: "Sérum Uniformizador Niacinamida 10% + Zinco PCA",
    category: "Poros & Textura",
    volume: "30 ml",
    anvisaProcess: "25351.621097/2026-19",
    barcodeEan: "7898991204097",
    description: "Concentrado de vitamina B3 de alta pureza com 1% de Zinco PCA. Reduz a aparência de poros dilatados, controla o brilho excessivo e acalma a vermelhidão.",
    howToUse: "Aplique de 4 gotas no rosto todo antes de cremes mais densos, pela manhã e/ou à noite.",
    inciIngredients: "Aqua, Niacinamide (10%), Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Phenoxyethanol.",
    precautions: "Uso externo. Evitar aplicar sobre peles sensibilizadas ou lesionadas.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-10",
    tenantId: "tenant-leclat",
    sku: "LEC-COP-10",
    name: "Sérum Reparador Peptídeos de Cobre & Centella Asiática",
    category: "Firmeza & Regeneração",
    volume: "30 ml",
    anvisaProcess: "25351.621098/2026-90",
    barcodeEan: "7898991204103",
    description: "Fórmula azul cristalina com GHK-Cu puro e extrato biotecnológico de Madecassoside. Repara a matriz extracelular e restaura a firmeza cutânea.",
    howToUse: "Aplique de 4 a 5 gotas de manhã e à noite sobre o rosto e pescoço higienizados.",
    inciIngredients: "Aqua, Copper Tripeptide-1, Madecassoside, Centella Asiatica Extract, Sodium Hyaluronate, Propanediol.",
    precautions: "Não misturar no mesmo passo com Vitamina C ácida ou Retinol direto.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-11",
    tenantId: "tenant-leclat",
    sku: "LEC-RES-11",
    name: "Sérum Antioxidante Resveratrol Puro 3% + Ácido Ferúlico",
    category: "Defesa Noturna",
    volume: "30 ml",
    anvisaProcess: "25351.621099/2026-65",
    barcodeEan: "7898991204110",
    description: "Poderoso elixir noturno antioxidante extraído de videiras francesas. Estimula as defesas endógenas da pele durante o ciclo de sono profundo.",
    howToUse: "Aplique 3 a 4 gotas à noite antes do creme regenerador.",
    inciIngredients: "Propanediol, Resveratrol (3%), Ferulic Acid (3%), Tocopherol.",
    precautions: "Uso cosmético facial.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-12",
    tenantId: "tenant-leclat",
    sku: "LEC-GLY-12",
    name: "Sérum Esfoliante Noturno Ácido Glicólico 8% + Aloe",
    category: "Peeling Químico Suave",
    volume: "30 ml",
    anvisaProcess: "25351.621100/2026-52",
    barcodeEan: "7898991204127",
    description: "Solução peeling AHA de liberação progressiva com pH 3.8 tamponado. Uniformiza a textura, renova o brilho e clareia marcas superficiais.",
    howToUse: "Aplique à noite sobre a pele limpa e seca 2 vezes por semana. Não enxaguar.",
    inciIngredients: "Aqua, Glycolic Acid (8%), Aloe Barbadensis Leaf Juice, Glycerin, Sodium Hydroxide, Potassium Sorbate.",
    precautions: "Não utilizar na pele irritada. Usar protetor solar diariamente.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-13",
    tenantId: "tenant-leclat",
    sku: "LEC-TRX-13",
    name: "Fluido Clareador Intensivo Ácido Tranexâmico 3%",
    category: "Clareamento Seguro",
    volume: "30 ml",
    anvisaProcess: "25351.621101/2026-38",
    barcodeEan: "7898991204134",
    description: "Fluido formulado para inibir o estímulo melanocítico induzido pela radiação UV e luz azul. Ideal para melasmas e manchas pós-inflamatórias.",
    howToUse: "Aplique de 4 a 5 gotas nas áreas com manchas ou em todo o rosto, duas vezes ao dia.",
    inciIngredients: "Aqua, Tranexamic Acid (3%), Niacinamide, Kojic Dipalmitate, Allantoin, Butylene Glycol.",
    precautions: "Suspenda o uso se surgirem sinais de hipersensibilidade.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },

  // 4. Hidratação, Barreira & Regeneração
  {
    id: "prod-14",
    tenantId: "tenant-leclat",
    sku: "LEC-CER-14",
    name: "Creme Barreira Cera-Repair com 3 Ceramidas Purificadas",
    category: "Nutrição & Barreira",
    volume: "50 g",
    anvisaProcess: "25351.109822/2026-45",
    barcodeEan: "7898991204141",
    description: "Tratamento reconstrutor da barreira lipídica com Ceramidas NP, AP, EOP e Fitoesfingosina. Acaba com o repuxamento e descamação.",
    howToUse: "Aplique uma pequena quantidade de manhã e à noite sobre o rosto e pescoço, massageando até completa absorção.",
    inciIngredients: "Aqua, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Squalane, Butyrospermum Parkii Butter, Carbomer.",
    precautions: "Uso tópico exclusivamente.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-15",
    tenantId: "tenant-leclat",
    sku: "LEC-HYD-15",
    name: "Gel-Creme Hidratante Hydra-Infusion Toque Acetinado",
    category: "Hidratação Diária",
    volume: "50 ml",
    anvisaProcess: "25351.109823/2026-29",
    barcodeEan: "7898991204158",
    description: "Textura aquosa refrescante com ácido poliglutâmico e água de coco liofilizada. Hidrata intensamente por 48 horas com toque seco acetinado.",
    howToUse: "Espalhe uniformemente sobre o rosto limpo pela manhã e à tarde.",
    inciIngredients: "Aqua, Polyglutamic Acid, Cocos Nucifera Water, Trehalose, Betaine, Dimethicone/Vinyl Dimethicone Crosspolymer.",
    precautions: "Não ingerir. Evitar a área dos olhos.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-16",
    tenantId: "tenant-leclat",
    sku: "LEC-BAK-16",
    name: "Bálsamo Noturno Regenerador Bakuchiol & Peptídeos",
    category: "Anti-Idade Noturno",
    volume: "50 g",
    anvisaProcess: "25351.109824/2026-11",
    barcodeEan: "7898991204165",
    description: "Alternativa vegetal ao retinol com 2% de Bakuchiol puro da Índia e Matrixyl 3000. Regenera a elasticidade cutânea durante o repouso noturno.",
    howToUse: "Aplique à noite como último passo da sua rotina facial com massagem suave ascendente.",
    inciIngredients: "Aqua, Bakuchiol (2%), Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Rosa Canina Fruit Oil, Cetearyl Olivate.",
    precautions: "Mantenha em local fresco e arejado.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-17",
    tenantId: "tenant-leclat",
    sku: "LEC-AVE-17",
    name: "Emulsão Facial Calmante com Aveia Coloidal Purificada",
    category: "Peles Sensíveis",
    volume: "60 ml",
    anvisaProcess: "25351.109825/2026-05",
    barcodeEan: "7898991204172",
    description: "Emulsão fluida calmante indicada para peles sensibilizadas por procedimentos, ácidos ou rosácea. Alívio imediato do desconforto térmico.",
    howToUse: "Aplique suavemente sobre as áreas reativas sempre que necessário.",
    inciIngredients: "Aqua, Colloidal Oatmeal (3%), Bisabolol, Allantoin, Glycerin, Caprylic/Capric Triglyceride, Phenoxyethanol.",
    precautions: "Hipoalergênico e sem fragrâncias sintéticas.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },

  // 5. Olhos & Lábios
  {
    id: "prod-18",
    tenantId: "tenant-leclat",
    sku: "LEC-EYE-18",
    name: "Sérum Revitalizante Contorno de Olhos Cafeína 5%",
    category: "Olheiras & Bolsas",
    volume: "15 ml",
    anvisaProcess: "25351.782011/2026-99",
    barcodeEan: "7898991204189",
    description: "Gel de rápida drenagem com cafeína anidra de alta solubilidade e EGCG de chá verde. Descongestiona bolsas e atenua olheiras vasculares.",
    howToUse: "Pressione 1 gota na ponta dos dedos anelares e dê leves batidinhas no osso orbital de manhã e à noite.",
    inciIngredients: "Aqua, Caffeine (5%), Epigallocatechin Gallatyl Glucoside, Hyaluronic Acid, Propanediol, Phenoxyethanol.",
    precautions: "Evite contato direto com a conjuntiva dos olhos.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-19",
    tenantId: "tenant-leclat",
    sku: "LEC-PEPE-19",
    name: "Creme Reparador Olhos com Complexo Tri-Peptídico",
    category: "Linhas de Expressão",
    volume: "15 g",
    anvisaProcess: "25351.782012/2026-76",
    barcodeEan: "7898991204196",
    description: "Bálsamo aveludado nutritivo com peptídeos tensores botânicos e manteiga de murumuru. Preenche linhas finas e pés de galinha.",
    howToUse: "Aplique suavemente ao redor dos olhos até absorção completa.",
    inciIngredients: "Aqua, Astrocaryum Murumuru Seed Butter, Acetyl Hexapeptide-8, Squalane, Niacinamide, Tocopherol.",
    precautions: "Dermatologicamente e oftalmologicamente testado.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-20",
    tenantId: "tenant-leclat",
    sku: "LEC-LIP-20",
    name: "Lip Oil Nutritivo com Manteiga de Karité & Esqualano",
    category: "Cuidado Labial",
    volume: "10 ml",
    anvisaProcess: "25351.782013/2026-43",
    barcodeEan: "7898991204202",
    description: "Óleo labial translúcido enriquecido com peptídeos plumping e óleo de jojoba. Nutre intensamente sem ficar pegajoso.",
    howToUse: "Aplique diretamente nos lábios ao longo do dia ou antes de dormir.",
    inciIngredients: "Polybutene, Diisostearyl Malate, Squalane, Butyrospermum Parkii Butter, Palmitoyl Tripeptide-38, Vanilla Planifolia Oil.",
    precautions: "Uso externo labial.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80"
  },

  // 6. Fotoproteção & Filtros Solares
  {
    id: "prod-21",
    tenantId: "tenant-leclat",
    sku: "LEC-SOL-21",
    name: "Fluido Mineral Invisível FPS 60 com Óxido de Zinco",
    category: "Fotoproteção Mineral",
    volume: "50 ml",
    anvisaProcess: "25351.983021/2026-33",
    barcodeEan: "7898991204219",
    description: "Filtro solar 100% físico mineral sem resíduo branco (zero white-cast). Proteção muito alta contra raios UVA, UVB e luz visível.",
    howToUse: "Aplique abundantemente 15 minutos antes da exposição solar. Reaplique a cada 2 horas.",
    inciIngredients: "Zinc Oxide (18%), Titanium Dioxide, Dimethicone, Silica, Caprylic/Capric Triglyceride, Iron Oxides.",
    precautions: "Ajuda a prevenir queimaduras solares. Evite contato com roupas antes de secar.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-22",
    tenantId: "tenant-leclat",
    sku: "LEC-SOL-22",
    name: "Protetor Solar Gel Aquoso Toque Seco FPS 50",
    category: "Fotoproteção Diária",
    volume: "50 ml",
    anvisaProcess: "25351.983022/2026-81",
    barcodeEan: "7898991204226",
    description: "Fórmula aquosa ultra fluida com ácido hialurônico e controle de oleosidade por 12 horas. Resistente à água e ao suor.",
    howToUse: "Aplique sobre o rosto e pescoço 15 minutos antes da exposição solar.",
    inciIngredients: "Aqua, Ethylhexyl Methoxycinnamate, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Silica, Niacinamide, Sodium Hyaluronate.",
    precautions: "Não protege contra insolação se usado em quantidade insuficiente.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-23",
    tenantId: "tenant-leclat",
    sku: "LEC-STK-23",
    name: "Stick Solar Facial Multifuncional em Bastão FPS 70",
    category: "Fotoproteção On-The-Go",
    volume: "20 g",
    anvisaProcess: "25351.983023/2026-64",
    barcodeEan: "7898991204233",
    description: "Protetor solar em bastão prático para reaplicação sobre a maquiagem sem borrar. Acabamento invisível aveludado.",
    howToUse: "Deslize o bastão diretamente sobre o rosto e áreas expostas.",
    inciIngredients: "Octyldodecanol, Polyethylene, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Tocopheryl Acetate, Centella Asiatica.",
    precautions: "Mantenha a embalagem bem fechada e longe de calor excessivo.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80"
  },

  // 7. Esfoliantes & Máscaras
  {
    id: "prod-24",
    tenantId: "tenant-leclat",
    sku: "LEC-PEL-24",
    name: "Peeling Enzimático Iluminador com Enzimas de Romã",
    category: "Esfoliação Química",
    volume: "60 g",
    anvisaProcess: "25351.554011/2026-17",
    barcodeEan: "7898991204240",
    description: "Geleia esfoliante enzimática que dissolve células mortas sem atrito físico. Revela uma pele incrivelmente macia e luminosa.",
    howToUse: "Aplique uma camada uniforme na pele seca e limpa, deixe agir por 7 minutos e enxágue com água morna.",
    inciIngredients: "Aqua, Lactobacillus/Punica Granatum Fruit Ferment Extract, Bromelain, Papain, Glycerin, Hydroxyethylcellulose.",
    precautions: "Uso 1 a 2 vezes por semana.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-25",
    tenantId: "tenant-leclat",
    sku: "LEC-ARG-25",
    name: "Máscara Purificante de Argila Branca da Amazônia",
    category: "Máscaras de Tratamento",
    volume: "75 g",
    anvisaProcess: "25351.554012/2026-92",
    barcodeEan: "7898991204257",
    description: "Argila caulinita pura enriquecida com óleo essencial de melaleuca e extrato de chá verde. Desintoxica os poros sem ressecar a derme.",
    howToUse: "Aplique no rosto evitando olhos e lábios. Deixe secar por 10 minutos e remova com água morna.",
    inciIngredients: "Kaolin, Aqua, Glycerin, Camellia Sinensis Leaf Extract, Melaleuca Alternifolia Leaf Oil, Phenoxyethanol.",
    precautions: "Não deixar secar a ponto de craquelar excessivamente.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-26",
    tenantId: "tenant-leclat",
    sku: "LEC-SLP-26",
    name: "Sleeping Mask Noturna Hidro-Nutritiva com Esqualano",
    category: "Máscaras de Tratamento",
    volume: "70 g",
    anvisaProcess: "25351.554013/2026-70",
    barcodeEan: "7898991204264",
    description: "Máscara de sono efeito memória que cria um filme protetor permeável. A pele acorda descansada, radiante e profundamente nutrida.",
    howToUse: "Aplique à noite como último passo e durma com o produto. Lave o rosto pela manhã.",
    inciIngredients: "Aqua, Squalane, Tremella Fuciformis Sporocarp Extract, Beta-Glucan, Polyacrylamide, Lavandula Angustifolia Oil.",
    precautions: "Uso noturno externo.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },

  // 8. Brumas, Óleos & Cuidados Nobres
  {
    id: "prod-27",
    tenantId: "tenant-leclat",
    sku: "LEC-BRU-27",
    name: "Bruma Facial Hidratante Antioxidante com Chá Branco",
    category: "Brumas & Mists",
    volume: "100 ml",
    anvisaProcess: "25351.332111/2026-55",
    barcodeEan: "7898991204271",
    description: "Névoa ultrafina que fixa a maquiagem, hidrata e protege contra o estresse oxidativo da poluição urbana.",
    howToUse: "Borrife a 20 cm do rosto a qualquer hora do dia para revitalizar o viço.",
    inciIngredients: "Aqua, Camellia Sinensis (White Tea) Extract, Sodium Hyaluronate, Niacinamide, Glycerin, Disodium EDTA.",
    precautions: "Mantenha os olhos fechados durante a aplicação.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-28",
    tenantId: "tenant-leclat",
    sku: "LEC-OLE-28",
    name: "Óleo Facial Puro 100% Esqualano Vegetal de Oliva",
    category: "Óleos Nobres",
    volume: "30 ml",
    anvisaProcess: "25351.332112/2026-34",
    barcodeEan: "7898991204288",
    description: "Óleo biossimilar de alta pureza derivado da azeitona. Absorção imediata, toque aveludado e compatibilidade com todos os tipos de pele.",
    howToUse: "Aplique de 2 a 3 gotas no rosto, cabelos ou corpo como selante hidratante.",
    inciIngredients: "Squalane (100% Plant-Derived).",
    precautions: "Produto 100% puro e não comedogênico.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-29",
    tenantId: "tenant-leclat",
    sku: "LEC-ELX-29",
    name: "Elixir Noturno de Óleos Preciosos & Rosa Mosqueta",
    category: "Óleos Nobres",
    volume: "30 ml",
    anvisaProcess: "25351.332113/2026-12",
    barcodeEan: "7898991204295",
    description: "Blend nobre de Rosa Mosqueta orgânica prensada a frio, Jojoba e Óleo de Maracujá com Vitamina E pura.",
    howToUse: "Pressione 3 gotas na pele aquecida à noite antes de dormir.",
    inciIngredients: "Rosa Canina Fruit Oil, Passiflora Edulis Seed Oil, Simmondsia Chinensis Seed Oil, Tocopherol.",
    precautions: "Uso noturno facial.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-30",
    tenantId: "tenant-leclat",
    sku: "LEC-ESF-30",
    name: "Esfoliante Facial com Micro-Cristais de Bambu",
    category: "Esfoliação Física",
    volume: "60 g",
    anvisaProcess: "25351.332114/2026-88",
    barcodeEan: "7898991204301",
    description: "Creme esfoliante suave com pó micronizado de caule de bambu e óleo de amêndoas doces. Remove asperezas instantaneamente.",
    howToUse: "Aplique na pele úmida com movimentos circulares muito suaves e enxágue bem.",
    inciIngredients: "Aqua, Bambusa Arundinacea Stem Extract, Prunus Amygdalus Dulcis Oil, Cetearyl Alcohol, Glycerin.",
    precautions: "Não esfregar com força. Usar no máximo 1 vez por semana.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  }
];

// Lotes realistas associados a cada um dos 30 itens
export const INITIAL_LOTS = [
  { id: "lot-01-a", tenantId: "tenant-leclat", productId: "prod-01", lotNumber: "LT-2026-LIMP01", mfgDate: "2026-01-15", expDate: "2028-01-15", status: "active" },
  { id: "lot-01-b", tenantId: "tenant-leclat", productId: "prod-01", lotNumber: "LT-2026-LIMP02", mfgDate: "2026-03-01", expDate: "2028-03-01", status: "active" },

  { id: "lot-02-a", tenantId: "tenant-leclat", productId: "prod-02", lotNumber: "LT-2026-CLN01", mfgDate: "2026-02-10", expDate: "2028-02-10", status: "active" },
  { id: "lot-03-a", tenantId: "tenant-leclat", productId: "prod-03", lotNumber: "LT-2026-GEL01", mfgDate: "2026-01-20", expDate: "2028-01-20", status: "active" },
  { id: "lot-04-a", tenantId: "tenant-leclat", productId: "prod-04", lotNumber: "LT-2026-TON01", mfgDate: "2026-02-15", expDate: "2028-02-15", status: "active" },
  { id: "lot-05-a", tenantId: "tenant-leclat", productId: "prod-05", lotNumber: "LT-2026-ESS01", mfgDate: "2026-03-10", expDate: "2028-03-10", status: "active" },

  { id: "lot-06-a", tenantId: "tenant-leclat", productId: "prod-06", lotNumber: "LT-2026-VITC01", mfgDate: "2026-02-20", expDate: "2027-08-20", status: "active" },
  { id: "lot-06-b", tenantId: "tenant-leclat", productId: "prod-06", lotNumber: "LT-2026-VITC02", mfgDate: "2026-05-12", expDate: "2027-11-12", status: "active" },

  { id: "lot-07-a", tenantId: "tenant-leclat", productId: "prod-07", lotNumber: "LT-2026-HA01", mfgDate: "2026-01-10", expDate: "2028-01-10", status: "active" },
  { id: "lot-07-b", tenantId: "tenant-leclat", productId: "prod-07", lotNumber: "LT-2026-HA02", mfgDate: "2026-04-05", expDate: "2028-04-05", status: "active" },

  { id: "lot-08-a", tenantId: "tenant-leclat", productId: "prod-08", lotNumber: "LT-2026-RET01", mfgDate: "2026-02-18", expDate: "2027-08-18", status: "active" },
  { id: "lot-09-a", tenantId: "tenant-leclat", productId: "prod-09", lotNumber: "LT-2026-NIA01", mfgDate: "2026-03-05", expDate: "2028-03-05", status: "active" },
  { id: "lot-10-a", tenantId: "tenant-leclat", productId: "prod-10", lotNumber: "LT-2026-COP01", mfgDate: "2026-01-25", expDate: "2027-07-25", status: "active" },
  { id: "lot-11-a", tenantId: "tenant-leclat", productId: "prod-11", lotNumber: "LT-2026-RES01", mfgDate: "2026-02-08", expDate: "2027-08-08", status: "active" },
  { id: "lot-12-a", tenantId: "tenant-leclat", productId: "prod-12", lotNumber: "LT-2026-GLY01", mfgDate: "2026-03-22", expDate: "2028-03-22", status: "active" },
  { id: "lot-13-a", tenantId: "tenant-leclat", productId: "prod-13", lotNumber: "LT-2026-TRX01", mfgDate: "2026-01-30", expDate: "2028-01-30", status: "active" },

  { id: "lot-14-a", tenantId: "tenant-leclat", productId: "prod-14", lotNumber: "LT-2026-CER01", mfgDate: "2026-02-14", expDate: "2028-02-14", status: "active" },
  { id: "lot-14-b", tenantId: "tenant-leclat", productId: "prod-14", lotNumber: "LT-2026-CER02", mfgDate: "2026-05-18", expDate: "2028-05-18", status: "active" },

  { id: "lot-15-a", tenantId: "tenant-leclat", productId: "prod-15", lotNumber: "LT-2026-HYD01", mfgDate: "2026-01-18", expDate: "2028-01-18", status: "active" },
  { id: "lot-16-a", tenantId: "tenant-leclat", productId: "prod-16", lotNumber: "LT-2026-BAK01", mfgDate: "2026-02-28", expDate: "2028-02-28", status: "active" },
  { id: "lot-17-a", tenantId: "tenant-leclat", productId: "prod-17", lotNumber: "LT-2026-AVE01", mfgDate: "2026-03-12", expDate: "2028-03-12", status: "active" },

  { id: "lot-18-a", tenantId: "tenant-leclat", productId: "prod-18", lotNumber: "LT-2026-EYE01", mfgDate: "2026-02-05", expDate: "2028-02-05", status: "active" },
  { id: "lot-19-a", tenantId: "tenant-leclat", productId: "prod-19", lotNumber: "LT-2026-PEPE01", mfgDate: "2026-01-22", expDate: "2028-01-22", status: "active" },
  { id: "lot-20-a", tenantId: "tenant-leclat", productId: "prod-20", lotNumber: "LT-2026-LIP01", mfgDate: "2026-03-01", expDate: "2028-03-01", status: "active" },

  { id: "lot-21-a", tenantId: "tenant-leclat", productId: "prod-21", lotNumber: "LT-2026-SOL21A", mfgDate: "2026-01-28", expDate: "2028-01-28", status: "active" },
  { id: "lot-21-b", tenantId: "tenant-leclat", productId: "prod-21", lotNumber: "LT-2026-SOL21B", mfgDate: "2026-04-10", expDate: "2028-04-10", status: "active" },

  { id: "lot-22-a", tenantId: "tenant-leclat", productId: "prod-22", lotNumber: "LT-2026-SOL22", mfgDate: "2026-02-22", expDate: "2028-02-22", status: "active" },
  { id: "lot-23-a", tenantId: "tenant-leclat", productId: "prod-23", lotNumber: "LT-2026-STK23", mfgDate: "2026-03-15", expDate: "2028-03-15", status: "active" },

  { id: "lot-24-a", tenantId: "tenant-leclat", productId: "prod-24", lotNumber: "LT-2026-PEL24", mfgDate: "2026-01-12", expDate: "2028-01-12", status: "active" },
  { id: "lot-25-a", tenantId: "tenant-leclat", productId: "prod-25", lotNumber: "LT-2026-ARG25", mfgDate: "2026-02-04", expDate: "2028-02-04", status: "active" },
  { id: "lot-26-a", tenantId: "tenant-leclat", productId: "prod-26", lotNumber: "LT-2026-SLP26", mfgDate: "2026-03-08", expDate: "2028-03-08", status: "active" },

  { id: "lot-27-a", tenantId: "tenant-leclat", productId: "prod-27", lotNumber: "LT-2026-BRU27", mfgDate: "2026-01-16", expDate: "2028-01-16", status: "active" },
  { id: "lot-28-a", tenantId: "tenant-leclat", productId: "prod-28", lotNumber: "LT-2026-OLE28", mfgDate: "2026-02-11", expDate: "2029-02-11", status: "active" },
  { id: "lot-29-a", tenantId: "tenant-leclat", productId: "prod-29", lotNumber: "LT-2026-ELX29", mfgDate: "2026-03-04", expDate: "2028-03-04", status: "active" },
  { id: "lot-30-a", tenantId: "tenant-leclat", productId: "prod-30", lotNumber: "LT-2026-ESF30", mfgDate: "2026-01-29", expDate: "2028-01-29", status: "active" }
];

// 8 Modelos de Kits Realistas formados a partir dos 30 itens
export const INITIAL_KIT_TEMPLATES = [
  {
    id: "kit-01",
    tenantId: "tenant-leclat",
    code: "KIT-GLOW-SUPREME",
    name: "Coffret Radiância & Vitamina C Pura",
    category: "Tratamento Iluminador Facial",
    description: "Protocolo completo em 4 passos para proteção antioxidante, luminosidade imediata e hidratação profunda.",
    boxType: "Caixa Rígida Magnética Dourada",
    heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Purificar & Preparar", productSku: "LEC-LIMP-01", tip: "Use pela manhã no rosto úmido para desobstruir os poros." },
      { step: 2, title: "Antioxidante & Luminosidade", productSku: "LEC-SER-06", tip: "Aplique de 4 a 5 gotas com a pele limpa e seca." },
      { step: 3, title: "Hidratação Acetinada", productSku: "LEC-HYD-15", tip: "Espalhe suavemente para selar o sérum com toque seco." },
      { step: 4, title: "Fotoproteção Mineral FPS 60", productSku: "LEC-SOL-21", tip: "Passo indispensável diário para proteger contra manchas solares." }
    ],
    items: [
      { productId: "prod-01", quantity: 1 },
      { productId: "prod-06", quantity: 1 },
      { productId: "prod-15", quantity: 1 },
      { productId: "prod-21", quantity: 1 }
    ]
  },
  {
    id: "kit-02",
    tenantId: "tenant-leclat",
    code: "KIT-ANTIAGE-PEPTIDE",
    name: "Ritual Anti-Aging Supreme & Peptídeos",
    category: "Reconstrução & Firmeza",
    description: "Edição de prestígio para estímulo intensivo de colágeno, redução de rugas e regeneração celular.",
    boxType: "Caixa Cartonada Luxo Soft-Touch",
    heroImage: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Limpeza Calmante", productSku: "LEC-GEL-03", tip: "Higienize com suavidade sem retirar a umidade natural." },
      { step: 2, title: "Peptídeos de Cobre", productSku: "LEC-COP-10", tip: "Aplique 4 gotas no rosto e pescoço." },
      { step: 3, title: "Bálsamo Noturno Bakuchiol", productSku: "LEC-BAK-16", tip: "Massagem ascendente antes de dormir." },
      { step: 4, title: "Cuidado com Olhos Cafeína", productSku: "LEC-EYE-18", tip: "Leves batidinhas ao redor dos olhos." }
    ],
    items: [
      { productId: "prod-03", quantity: 1 },
      { productId: "prod-10", quantity: 1 },
      { productId: "prod-16", quantity: 1 },
      { productId: "prod-18", quantity: 1 }
    ]
  },
  {
    id: "kit-03",
    tenantId: "tenant-leclat",
    code: "KIT-BARRIER-72H",
    name: "Sistema Barreira Lipídica & Hidratação 72h",
    category: "Recuperação & Peles Secas",
    description: "Terapia intensiva com ceramidas purificadas e ácido hialurônico 5D para restaurar o manto hidrolipídico.",
    boxType: "Estojo Branco Perolado com Tampa Acrílica",
    heroImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Infusão Fermentada", productSku: "LEC-ESS-05", tip: "Pressione a essência na pele para preparar a absorção." },
      { step: 2, title: "Ácido Hialurônico 5D", productSku: "LEC-HA-07", tip: "Aplique com a pele úmida." },
      { step: 3, title: "Creme Cera-Repair", productSku: "LEC-CER-14", tip: "Nutre e sela a barreira por 72 horas." },
      { step: 4, title: "Óleo 100% Esqualano", productSku: "LEC-OLE-28", tip: "2 gotas para selamento nutritivo final." }
    ],
    items: [
      { productId: "prod-05", quantity: 1 },
      { productId: "prod-07", quantity: 1 },
      { productId: "prod-14", quantity: 1 },
      { productId: "prod-28", quantity: 1 }
    ]
  },
  {
    id: "kit-04",
    tenantId: "tenant-leclat",
    code: "KIT-CLARIFY-TONE",
    name: "Duo Clareador Uniformizador & Antimanchas",
    category: "Tratamento Tonalizante",
    description: "Combinação sinérgica de Ácido Tranexâmico 3% e Niacinamida 10% para uniformização do tom.",
    boxType: "Caixa Berço Acetinada",
    heroImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Uniformizador Niacinamida", productSku: "LEC-NIA-09", tip: "Regula a produção sebácea e acalma a vermelhidão." },
      { step: 2, title: "Fluido Ácido Tranexâmico", productSku: "LEC-TRX-13", tip: "Clareamento seguro e preventivo de marcas." }
    ],
    items: [
      { productId: "prod-09", quantity: 1 },
      { productId: "prod-13", quantity: 1 }
    ]
  },
  {
    id: "kit-05",
    tenantId: "tenant-leclat",
    code: "KIT-NIGHT-RENEW",
    name: "Ritual Renovação Noturna Retinol & Spa",
    category: "Tratamento Noturno Intensivo",
    description: "Combinação de Retinol puro 0.3% e Sleeping Mask com Lip Oil nutritivo para acordar com pele renovada.",
    boxType: "Caixa Cartonada Preta com Fita Dourada",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Demaquilante Esqualano", productSku: "LEC-CLEAN-02", tip: "Dissolve todas as impurezas do dia." },
      { step: 2, title: "Retinol Puro 0.3%", productSku: "LEC-RET-08", tip: "Uso noturno para renovação celular." },
      { step: 3, title: "Sleeping Mask Hidro-Nutritiva", productSku: "LEC-SLP-26", tip: "Durma com a máscara para selar a hidratação." },
      { step: 4, title: "Lip Oil Karité", productSku: "LEC-LIP-20", tip: "Nutrição e maciez labial durante a noite." }
    ],
    items: [
      { productId: "prod-02", quantity: 1 },
      { productId: "prod-08", quantity: 1 },
      { productId: "prod-26", quantity: 1 },
      { productId: "prod-20", quantity: 1 }
    ]
  },
  {
    id: "kit-06",
    tenantId: "tenant-leclat",
    code: "KIT-MINIMAL-DAILY",
    name: "Kit Skincare Minimalista Essencial",
    category: "Uso Diário",
    description: "Os 3 passos essenciais dermatológicos: Limpar, Hidratar e Proteger. Simples, prático e altamente eficaz.",
    boxType: "Caixa Eco Kraft Sustentável",
    heroImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Mousse Limpeza", productSku: "LEC-LIMP-01", tip: "Lave o rosto pela manhã e à noite." },
      { step: 2, title: "Gel-Creme Hydra", productSku: "LEC-HYD-15", tip: "Hidratação leve sem oleosidade." },
      { step: 3, title: "Protetor Aquoso FPS 50", productSku: "LEC-SOL-22", tip: "Proteção solar invisível toque seco." }
    ],
    items: [
      { productId: "prod-01", quantity: 1 },
      { productId: "prod-15", quantity: 1 },
      { productId: "prod-22", quantity: 1 }
    ]
  },
  {
    id: "kit-07",
    tenantId: "tenant-leclat",
    code: "KIT-DETOX-PURIFY",
    name: "Protocolo SPA Facial Detox & Renovação",
    category: "Detox & Poros",
    description: "Peeling enzimático de romã associado à argila branca amazônica e bruma antioxidante.",
    boxType: "Caixa Rígida Texturizada",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Peeling Enzimático Romã", productSku: "LEC-PEL-24", tip: "7 minutos para renovar a textura." },
      { step: 2, title: "Máscara Argila Branca", productSku: "LEC-ARG-25", tip: "10 minutos para absorver toxinas." },
      { step: 3, title: "Bruma Chá Branco", productSku: "LEC-BRU-27", tip: "Borrife generosamente para reequilibrar." }
    ],
    items: [
      { productId: "prod-24", quantity: 1 },
      { productId: "prod-25", quantity: 1 },
      { productId: "prod-27", quantity: 1 }
    ]
  },
  {
    id: "kit-08",
    tenantId: "tenant-leclat",
    code: "KIT-EYE-LIP-DUO",
    name: "Duo Especialista Olhar & Lábios",
    category: "Áreas Delicadas",
    description: "Cuidado de precisão para contorno dos olhos com cafeína pura e nutrição labial com lip oil esqualano.",
    boxType: "Estojo Slim Luxo",
    heroImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Sérum Olhos Cafeína 5%", productSku: "LEC-EYE-18", tip: "Reduz bolsas e olheiras." },
      { step: 2, title: "Creme Tri-Peptídico Olhos", productSku: "LEC-PEPE-19", tip: "Preenche linhas de expressão." },
      { step: 3, title: "Lip Oil Karité", productSku: "LEC-LIP-20", tip: "Nutrição e brilho espelhado." }
    ],
    items: [
      { productId: "prod-18", quantity: 1 },
      { productId: "prod-19", quantity: 1 },
      { productId: "prod-20", quantity: 1 }
    ]
  }
];

// Caixas montadas de exemplo com rastreabilidade real
export const INITIAL_BOXES = [
  {
    id: "box-lec-001",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98214",
    kitTemplateId: "kit-01",
    assembledAt: "2026-08-10T14:22:00Z",
    operatorName: "Mariana Silva (Bancada 02)",
    stationId: "STATION-B02",
    status: "assembled",
    items: [
      { productId: "prod-01", lotId: "lot-01-a" },
      { productId: "prod-06", lotId: "lot-06-a" },
      { productId: "prod-15", lotId: "lot-15-a" },
      { productId: "prod-21", lotId: "lot-21-a" }
    ],
    scanCount: 14,
    lastScannedAt: "2026-09-14T19:40:12Z"
  },
  {
    id: "box-lec-002",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98215",
    kitTemplateId: "kit-01",
    assembledAt: "2026-08-10T14:35:00Z",
    operatorName: "Mariana Silva (Bancada 02)",
    stationId: "STATION-B02",
    status: "assembled",
    items: [
      { productId: "prod-01", lotId: "lot-01-b" }, // Nota: Lote LIMP02 (diferente da caixa anterior!)
      { productId: "prod-06", lotId: "lot-06-b" }, // Nota: Lote VITC02 (diferente da caixa anterior!)
      { productId: "prod-15", lotId: "lot-15-a" },
      { productId: "prod-21", lotId: "lot-21-b" }  // Nota: Lote SOL21B
    ],
    scanCount: 3,
    lastScannedAt: "2026-09-15T11:15:00Z"
  },
  {
    id: "box-lec-003",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98216",
    kitTemplateId: "kit-02",
    assembledAt: "2026-08-11T09:10:00Z",
    operatorName: "Carlos Eduardo (Bancada 01)",
    stationId: "STATION-B01",
    status: "assembled",
    items: [
      { productId: "prod-03", lotId: "lot-03-a" },
      { productId: "prod-10", lotId: "lot-10-a" },
      { productId: "prod-16", lotId: "lot-16-a" },
      { productId: "prod-18", lotId: "lot-18-a" }
    ],
    scanCount: 8,
    lastScannedAt: "2026-09-15T16:20:00Z"
  }
];
