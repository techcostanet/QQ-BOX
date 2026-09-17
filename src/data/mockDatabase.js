// Mock Database Multi-Tenant Cloud Native - 50+ Cosméticos de Alta Performance
// Estrutura espelhada para o Cloud Firestore (qq-box-tc)
// Tons claros, luminosos e alta densidade de dados para demonstração imediata

export const INITIAL_TENANTS = [
  {
    id: "tenant-leclat",
    name: "L'Éclat Botanicals Paris",
    slug: "leclat",
    tagline: "Alta Cosmetologia Botânica & Sustentável",
    logoText: "L'ÉCLAT",
    primaryColor: "#c27803", // Dourado champagne luminoso e claro
    secondaryColor: "#0f766e", // Verde teal botânico claro e elegante
    accentColor: "#d97706",
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
    primaryColor: "#2563eb", // Azul safira claro clínico
    secondaryColor: "#0284c7", // Azul ciano médico limpo
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
  },
  {
    id: "tenant-aurabio",
    name: "Aura Amazônia Biocosméticos",
    slug: "aurabio",
    tagline: "Biocosmética Vegana & Ativos Puros da Floresta",
    logoText: "AURA BIO",
    primaryColor: "#059669", // Verde esmeralda vivo
    secondaryColor: "#0d9488", // Verde menta botânico
    accentColor: "#10b981",
    customDomain: "origem.aurabiocosmeticos.com.br",
    anvisaLicense: "AFE-ANVISA: 2.09115-4",
    supportWhatsapp: "5592984123344",
    storeUrl: "https://aurabiocosmeticos.com.br",
    printerSettings: {
      model: "Zebra ZD621 Desktop",
      labelWidthMm: 100,
      labelHeightMm: 50,
      dpi: 203,
      connectionType: "Wi-Fi Cloud Direct"
    }
  }
];

export const INITIAL_PRODUCTS = [
  // ==========================================
  // TENANT 1: L'ÉCLAT BOTANICALS PARIS (24 itens)
  // ==========================================
  {
    id: "prod-01",
    tenantId: "tenant-leclat",
    sku: "LEC-LIMP-01",
    name: "Mousse de Limpeza Micelar com Camélia Branca",
    category: "Limpeza Facial",
    volume: "150 ml",
    anvisaProcess: "25351.489211/2026-12",
    barcodeEan: "7898991204011",
    description: "Espuma aveludada ultraleve enriquecida com Água Termal dos Alpes e Extrato de Camélia Branca. Remove impurezas sem agredir a barreira cutânea.",
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
    description: "Cleansing oil luxuoso que dissolve maquiagem à prova d'água e protetor solar com toque sedoso.",
    howToUse: "Aplique 3 a 4 pumps sobre as mãos e rosto secos. Massageie por 60 segundos. Adicione água para emulsionar e enxágue.",
    inciIngredients: "Caprylic/Capric Triglyceride, Squalane, PEG-20 Glyceryl Triisostearate, Tocopherol, Simmondsia Chinensis Seed Oil, Bisabolol.",
    precautions: "Armazenar em local seco ao abrigo da luz solar direta.",
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
    description: "Gel de limpeza calmante sem sabão com extrato de calêndula e pró-vitamina B5.",
    howToUse: "Aplique na pele molhada, massageie até criar uma espuma delicada e enxágue abundantemente.",
    inciIngredients: "Aqua, Decyl Glucoside, Panthenol, Calendula Officinalis Extract, Allantoin, Glycerin, Sodium Benzoate.",
    precautions: "Não ingerir. Uso tópico.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-04",
    tenantId: "tenant-leclat",
    sku: "LEC-TON-04",
    name: "Tônico Equilibrante com Água Floral de Rosas Damascena",
    category: "Tonificação",
    volume: "150 ml",
    anvisaProcess: "25351.489214/2026-33",
    barcodeEan: "7898991204042",
    description: "Destilado de pétalas puras de rosa damascena enriquecido com ácido hialurônico botânico.",
    howToUse: "Borrife no rosto limpo ou aplique com auxílio de algodão reutilizável.",
    inciIngredients: "Rosa Damascena Flower Water, Pentylene Glycol, Sodium Hyaluronate, Centella Asiatica Extract, Citric Acid.",
    precautions: "Evite contato com os olhos.",
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
    description: "Essência prebiótica fermentada de kombucha de chá preto. Potencializa a absorção dos tratamentos.",
    howToUse: "Coloque 5 gotas na palma das mãos e pressione suavemente sobre o rosto e pescoço.",
    inciIngredients: "Saccharomyces/Xylinum/Black Tea Ferment, Butylene Glycol, Glycerin, Sodium Hyaluronate, Adenosine.",
    precautions: "Uso tópico exclusivamente.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-06",
    tenantId: "tenant-leclat",
    sku: "LEC-SER-06",
    name: "Sérum Radiance Vitamina C 15% + Ácido Ferúlico",
    category: "Tratamento Antioxidante",
    volume: "30 ml",
    anvisaProcess: "25351.621094/2026-88",
    barcodeEan: "7898991204066",
    description: "Fórmula padrão-ouro com Ácido L-Ascórbico 15% puro estabilizado com Ácido Ferúlico 0.5% e Vitamina E 1%.",
    howToUse: "Pela manhã, aplique 4 a 5 gotas na pele limpa e seca antes do hidratante e protetor solar.",
    inciIngredients: "Aqua, Ascorbic Acid (15%), Ethoxydiglycol, Tocopherol, Ferulic Acid, Hyaluronic Acid, Sodium Hydroxide.",
    precautions: "Armazenar em local fresco e protegido da luz solar.",
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
    description: "Combinação sinérgica de 5 pesos moleculares de ácido hialurônico para hidratação multicamadas.",
    howToUse: "Aplique de 3 a 4 gotas sobre a pele úmida, de manhã e à noite.",
    inciIngredients: "Aqua, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Panthenol.",
    precautions: "Em caso de sensibilidade, suspenda o uso.",
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
    description: "Retinol puro microencapsulado suspenso em base botânica de esqualano.",
    howToUse: "Uso noturno. Aplique 3 gotas sobre a pele limpa 2 a 3 vezes por semana inicialmente.",
    inciIngredients: "Squalane, Retinol (0.3%), Glycine Soja Oil, Tocopherol, Bisabolol.",
    precautions: "Uso obrigatório de protetor solar durante o dia.",
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
    description: "Concentrado de vitamina B3 de alta pureza com 1% de Zinco PCA. Reduz poros e controla brilho.",
    howToUse: "Aplique 4 gotas no rosto todo antes de cremes mais densos.",
    inciIngredients: "Aqua, Niacinamide (10%), Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum.",
    precautions: "Evitar aplicar sobre peles sensibilizadas.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-10",
    tenantId: "tenant-leclat",
    sku: "LEC-COP-10",
    name: "Sérum Reparador Peptídeos de Cobre & Centella",
    category: "Firmeza & Regeneração",
    volume: "30 ml",
    anvisaProcess: "25351.621098/2026-90",
    barcodeEan: "7898991204103",
    description: "Fórmula azul cristalina com GHK-Cu puro e Madecassoside. Repara a matriz extracelular.",
    howToUse: "Aplique de 4 a 5 gotas de manhã e à noite sobre o rosto limpo.",
    inciIngredients: "Aqua, Copper Tripeptide-1, Madecassoside, Centella Asiatica Extract, Sodium Hyaluronate.",
    precautions: "Não misturar com ácidos fortes no mesmo passo.",
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
    description: "Inibe a formação de manchas de melasma e marcas pós-acne de forma segura.",
    howToUse: "Aplique 4 a 5 gotas nas áreas com manchas, duas vezes ao dia.",
    inciIngredients: "Aqua, Tranexamic Acid (3%), Niacinamide, Kojic Dipalmitate, Allantoin.",
    precautions: "Uso tópico exclusivamente.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-14",
    tenantId: "tenant-leclat",
    sku: "LEC-CER-14",
    name: "Creme Barreira Cera-Repair com 3 Ceramidas Purificadas",
    category: "Nutrição & Barreira",
    volume: "50 g",
    anvisaProcess: "25351.109822/2026-45",
    barcodeEan: "7898991204141",
    description: "Reconstrói o manto hidrolipídico com Ceramidas NP, AP, EOP e Fitoesfingosina.",
    howToUse: "Aplique de manhã e à noite massageando até completa absorção.",
    inciIngredients: "Aqua, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Squalane, Butyrospermum Parkii.",
    precautions: "Uso facial.",
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
    description: "Textura aquosa refrescante com ácido poliglutâmico. 48h de hidratação toque seco.",
    howToUse: "Espalhe uniformemente sobre o rosto limpo pela manhã e à noite.",
    inciIngredients: "Aqua, Polyglutamic Acid, Cocos Nucifera Water, Trehalose, Betaine.",
    precautions: "Evitar a área dos olhos.",
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
    description: "Alternativa vegetal ao retinol com 2% de Bakuchiol puro da Índia e Matrixyl 3000.",
    howToUse: "Aplique à noite como último passo com massagem ascendente.",
    inciIngredients: "Aqua, Bakuchiol (2%), Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Rosa Canina Oil.",
    precautions: "Mantenha em local fresco.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-18",
    tenantId: "tenant-leclat",
    sku: "LEC-EYE-18",
    name: "Sérum Revitalizante Contorno de Olhos Cafeína 5%",
    category: "Olheiras & Bolsas",
    volume: "15 ml",
    anvisaProcess: "25351.782011/2026-99",
    barcodeEan: "7898991204189",
    description: "Cafeína anidra de alta solubilidade e EGCG. Descongestiona bolsas e atenua olheiras.",
    howToUse: "1 gota na ponta dos dedos anelares dando leves batidinhas no osso orbital.",
    inciIngredients: "Aqua, Caffeine (5%), Epigallocatechin Gallatyl Glucoside, Hyaluronic Acid.",
    precautions: "Evite contato com a conjuntiva dos olhos.",
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
    description: "Bálsamo aveludado nutritivo com peptídeos tensores botânicos e manteiga de murumuru.",
    howToUse: "Aplique suavemente ao redor dos olhos até absorção completa.",
    inciIngredients: "Aqua, Astrocaryum Murumuru Seed Butter, Acetyl Hexapeptide-8, Squalane, Niacinamide.",
    precautions: "Dermatologicamente testado.",
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
    description: "Óleo labial translúcido enriquecido com peptídeos plumping e óleo de jojoba.",
    howToUse: "Aplique nos lábios ao longo do dia ou antes de dormir.",
    inciIngredients: "Polybutene, Squalane, Butyrospermum Parkii Butter, Palmitoyl Tripeptide-38.",
    precautions: "Uso externo labial.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-21",
    tenantId: "tenant-leclat",
    sku: "LEC-SOL-21",
    name: "Fluido Mineral Invisível FPS 60 com Óxido de Zinco",
    category: "Fotoproteção Mineral",
    volume: "50 ml",
    anvisaProcess: "25351.983021/2026-33",
    barcodeEan: "7898991204219",
    description: "Filtro solar 100% físico mineral sem resíduo branco (zero white-cast). Muito alta proteção.",
    howToUse: "Aplique abundantemente 15 minutos antes da exposição solar.",
    inciIngredients: "Zinc Oxide (18%), Titanium Dioxide, Dimethicone, Silica, Caprylic/Capric Triglyceride.",
    precautions: "Reaplique a cada 2 horas.",
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
    description: "Fórmula aquosa ultra fluida com ácido hialurônico e controle de oleosidade por 12h.",
    howToUse: "Aplique sobre o rosto e pescoço pela manhã.",
    inciIngredients: "Aqua, Ethylhexyl Methoxycinnamate, Silica, Niacinamide, Sodium Hyaluronate.",
    precautions: "Uso diário.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-24",
    tenantId: "tenant-leclat",
    sku: "LEC-PEL-24",
    name: "Peeling Enzimático Iluminador com Enzimas de Romã",
    category: "Esfoliação Química",
    volume: "60 g",
    anvisaProcess: "25351.554011/2026-17",
    barcodeEan: "7898991204240",
    description: "Geleia esfoliante enzimática que dissolve células mortas sem atrito físico.",
    howToUse: "Aplique na pele seca, aguarde 7 minutos e enxágue.",
    inciIngredients: "Aqua, Lactobacillus/Punica Granatum Ferment, Bromelain, Papain, Glycerin.",
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
    description: "Argila caulinita pura enriquecida com melaleuca e chá verde.",
    howToUse: "Aplique por 10 minutos e remova com água morna.",
    inciIngredients: "Kaolin, Aqua, Glycerin, Camellia Sinensis Extract, Melaleuca Leaf Oil.",
    precautions: "Evitar contato com os olhos.",
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
    description: "Máscara de sono efeito memória. Pele descansada e radiante ao amanhecer.",
    howToUse: "Aplique à noite como último passo e durma com o produto.",
    inciIngredients: "Aqua, Squalane, Tremella Fuciformis Extract, Beta-Glucan, Lavandula Oil.",
    precautions: "Uso noturno facial.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-27",
    tenantId: "tenant-leclat",
    sku: "LEC-BRU-27",
    name: "Bruma Facial Hidratante Antioxidante com Chá Branco",
    category: "Brumas & Mists",
    volume: "100 ml",
    anvisaProcess: "25351.332111/2026-55",
    barcodeEan: "7898991204271",
    description: "Névoa ultrafina que fixa a maquiagem, hidrata e protege da poluição.",
    howToUse: "Borrife a 20 cm do rosto a qualquer momento.",
    inciIngredients: "Aqua, Camellia Sinensis Extract, Sodium Hyaluronate, Niacinamide, Glycerin.",
    precautions: "Manter olhos fechados.",
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
    description: "Óleo biossimilar de alta pureza derivado da azeitona. Absorção imediata.",
    howToUse: "Aplique de 2 a 3 gotas no rosto como selante hidratante.",
    inciIngredients: "Squalane (100% Plant-Derived).",
    precautions: "Não comedogênico.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // TENANT 2: DERMASYNC CLINICAL LAB (8 itens)
  // ==========================================
  {
    id: "prod-ds-01",
    tenantId: "tenant-dermasync",
    sku: "DS-GEL-01",
    name: "Cleanser Fisiológico pH 5.5 Syndet",
    category: "Higiene Clínica",
    volume: "200 ml",
    anvisaProcess: "25351.810201/2026-11",
    barcodeEan: "7898994401017",
    description: "Gel syndet sem sulfatos desenvolvido para higienização pré-procedimentos e peles ultra-reativas.",
    howToUse: "Aplique na pele umedecida, massageie e enxágue com água fria ou morna.",
    inciIngredients: "Aqua, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Zinc PCA, Citric Acid.",
    precautions: "Uso dermatológico externo.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-ds-02",
    tenantId: "tenant-dermasync",
    sku: "DS-SAL-02",
    name: "Solução Clareadora Ácido Salicílico 2% + LHA",
    category: "Acne & Oleosidade",
    volume: "100 ml",
    anvisaProcess: "25351.810202/2026-90",
    barcodeEan: "7898994401024",
    description: "Esfoliante BHA lipofílico que penetra nos poros limpando sebo oxidado e cravos.",
    howToUse: "Aplique à noite com algodão sobre as áreas oleosas 3 vezes por semana.",
    inciIngredients: "Aqua, Propanediol, Salicylic Acid (2%), Capryloyl Salicylic Acid, Allantoin.",
    precautions: "Não usar em crianças. Protetor solar obrigatório.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-ds-03",
    tenantId: "tenant-dermasync",
    sku: "DS-GLY-03",
    name: "Tônico Renovador Molecular Ácido Glicólico 7%",
    category: "Peeling Químico Diário",
    volume: "150 ml",
    anvisaProcess: "25351.810203/2026-78",
    barcodeEan: "7898994401031",
    description: "Micro-peeling diário que acelera o turnover celular com extrato calmante de Ginseng.",
    howToUse: "Aplique à noite na pele limpa. Não enxaguar.",
    inciIngredients: "Aqua, Glycolic Acid (7%), Aloe Barbadensis, Panax Ginseng Root Extract, Sodium Hydroxide.",
    precautions: "Evite exposição solar intensa.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-ds-04",
    tenantId: "tenant-dermasync",
    sku: "DS-PEP-04",
    name: "Sérum Peptídeos Tensores Botox-Like Hexapeptide-8",
    category: "Linhas de Expressão",
    volume: "30 ml",
    anvisaProcess: "25351.810204/2026-66",
    barcodeEan: "7898994401048",
    description: "Concentrado biotecnológico com 10% de peptídeos biomiméticos que modulam microcontrações faciais.",
    howToUse: "Aplique 4 gotas focando nas linhas da testa, glabela e pés de galinha.",
    inciIngredients: "Aqua, Acetyl Hexapeptide-8, Pentapeptide-18, Hyaluronic Acid, Phenoxyethanol.",
    precautions: "Uso tópico cosmético.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-ds-05",
    tenantId: "tenant-dermasync",
    sku: "DS-GHK-05",
    name: "Ampola Regeneradora Peptídeos de Cobre GHK-Cu 1.5%",
    category: "Cicatrização & Firmeza",
    volume: "30 ml",
    anvisaProcess: "25351.810205/2026-44",
    barcodeEan: "7898994401055",
    description: "Reparador estéril de suporte tecidual pós-laser, microagulhamento e peelings clínicos.",
    howToUse: "Aplique 5 gotas pela manhã e à noite até recuperação total.",
    inciIngredients: "Aqua, Copper Tripeptide-1 (1.5%), Sodium Hyaluronate, Hydrolyzed Collagen, Allantoin.",
    precautions: "Armazenar em temperatura ambiente.",
    image: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-ds-06",
    tenantId: "tenant-dermasync",
    sku: "DS-BAR-06",
    name: "Bálsamo Reparador Intensivo Cera-Barrier Pro",
    category: "Pós-Procedimento",
    volume: "50 ml",
    anvisaProcess: "25351.810206/2026-22",
    barcodeEan: "7898994401062",
    description: "Complexo de 5 ceramidas puras, colesterol e ácidos graxos em proporção fisiológica 3:1:1.",
    howToUse: "Aplique camada generosa sobre a área lesionada ou sensibilizada.",
    inciIngredients: "Aqua, Caprylic/Capric Triglyceride, Ceramide NP, Ceramide AP, Cholesterol, Phytosphingosine.",
    precautions: "Hipoalergênico e não comedogênico.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-ds-07",
    tenantId: "tenant-dermasync",
    sku: "DS-SOL-07",
    name: "Protetor Solar Clínico Mineral FPS 70 Toque Seco",
    category: "Proteção Clínica",
    volume: "50 ml",
    anvisaProcess: "25351.810207/2026-01",
    barcodeEan: "7898994401079",
    description: "Fotoproteção extrema pós-procedimento com 100% filtros físicos e óxido de ferro.",
    howToUse: "Aplique abundantemente antes da exposição à luz solar ou artificial.",
    inciIngredients: "Zinc Oxide (20%), Titanium Dioxide (5%), Silica, Niacinamide, Tocopherol.",
    precautions: "Reaplicar a cada 2 horas.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-ds-08",
    tenantId: "tenant-dermasync",
    sku: "DS-TRX-08",
    name: "Concentrado Despigmentante Ácido Tranexâmico 5%",
    category: "Melasma & Hipercromias",
    volume: "30 ml",
    anvisaProcess: "25351.810208/2026-89",
    barcodeEan: "7898994401086",
    description: "Combina Ácido Tranexâmico 5% com Ácido Kójico e Niacinamida para controle do melasma.",
    howToUse: "Aplique 3 a 4 gotas no rosto todo à noite.",
    inciIngredients: "Aqua, Tranexamic Acid (5%), Kojic Acid, Niacinamide (5%), Hyaluronic Acid.",
    precautions: "Uso noturno facial.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // TENANT 3: AURA AMAZÔNIA BIOCOSMÉTICOS (4 itens)
  // ==========================================
  {
    id: "prod-ab-01",
    tenantId: "tenant-aurabio",
    sku: "AB-SAB-01",
    name: "Sabonete Líquido Castanha & Óleo de Copaíba",
    category: "Higiene Natural",
    volume: "250 ml",
    anvisaProcess: "25351.920101/2026-14",
    barcodeEan: "7898997701015",
    description: "Espuma cremosa com ativos botânicos extraídos por comunidades ribeirinhas sustentáveis.",
    howToUse: "Aplique sobre o corpo ou rosto úmido e enxágue.",
    inciIngredients: "Aqua, Bertholletia Excelsa Seed Oil, Copaifera Officinalis Resin, Coco-Glucoside.",
    precautions: "Uso externo.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-ab-02",
    tenantId: "tenant-aurabio",
    sku: "AB-ACAI-02",
    name: "Sérum Puro Açaí da Floresta Antioxidante",
    category: "Super-Antioxidante",
    volume: "30 ml",
    anvisaProcess: "25351.920102/2026-32",
    barcodeEan: "7898997701022",
    description: "Antioxidante de polifenóis prensados a frio de açaí silvestre com vitamina C natural.",
    howToUse: "Aplique 4 gotas pela manhã antes do protetor solar.",
    inciIngredients: "Euterpe Oleracea Fruit Oil, Tocopherol, Ascorbyl Tetraisopalmitate.",
    precautions: "Guardar longe da luz solar direta.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-ab-03",
    tenantId: "tenant-aurabio",
    sku: "AB-MURU-03",
    name: "Manteiga Facial Nutritiva Murumuru & Buriti",
    category: "Nutrição Bioativa",
    volume: "50 g",
    anvisaProcess: "25351.920103/2026-55",
    barcodeEan: "7898997701039",
    description: "Bálsamo aveludado de altíssima afinidade com lipídios cutâneos. Proteção contra ressecamento.",
    howToUse: "Espalhe suavemente uma pequena porção no rosto antes de dormir.",
    inciIngredients: "Astrocaryum Murumuru Seed Butter, Mauritia Flexuosa Fruit Oil, Theobroma Grandiflorum Seed Butter.",
    precautions: "100% vegano e biodegradável.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "prod-ab-04",
    tenantId: "tenant-aurabio",
    sku: "AB-SOL-04",
    name: "Protetor Mineral Biodegradável FPS 50 Buriti Bio",
    category: "Fotoproteção Limpa",
    volume: "60 ml",
    anvisaProcess: "25351.920104/2026-88",
    barcodeEan: "7898997701046",
    description: "Filtro 100% não nano seguro para corais e rios, com carotenoides de Buriti.",
    howToUse: "Aplique 15 minutos antes da exposição solar.",
    inciIngredients: "Zinc Oxide (Non-Nano), Mauritia Flexuosa Oil, Squalane, Pongamia Pinnata Seed Extract.",
    precautions: "Reaplique após suor intenso ou banho de mar.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80"
  }
];

export const INITIAL_LOTS = [
  // Lotes L'Éclat
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
  { id: "lot-13-a", tenantId: "tenant-leclat", productId: "prod-13", lotNumber: "LT-2026-TRX01", mfgDate: "2026-01-30", expDate: "2028-01-30", status: "active" },
  { id: "lot-14-a", tenantId: "tenant-leclat", productId: "prod-14", lotNumber: "LT-2026-CER01", mfgDate: "2026-02-14", expDate: "2028-02-14", status: "active" },
  { id: "lot-14-b", tenantId: "tenant-leclat", productId: "prod-14", lotNumber: "LT-2026-CER02", mfgDate: "2026-05-18", expDate: "2028-05-18", status: "active" },
  { id: "lot-15-a", tenantId: "tenant-leclat", productId: "prod-15", lotNumber: "LT-2026-HYD01", mfgDate: "2026-01-18", expDate: "2028-01-18", status: "active" },
  { id: "lot-16-a", tenantId: "tenant-leclat", productId: "prod-16", lotNumber: "LT-2026-BAK01", mfgDate: "2026-02-28", expDate: "2028-02-28", status: "active" },
  { id: "lot-18-a", tenantId: "tenant-leclat", productId: "prod-18", lotNumber: "LT-2026-EYE01", mfgDate: "2026-02-05", expDate: "2028-02-05", status: "active" },
  { id: "lot-19-a", tenantId: "tenant-leclat", productId: "prod-19", lotNumber: "LT-2026-PEPE01", mfgDate: "2026-01-22", expDate: "2028-01-22", status: "active" },
  { id: "lot-20-a", tenantId: "tenant-leclat", productId: "prod-20", lotNumber: "LT-2026-LIP01", mfgDate: "2026-03-01", expDate: "2028-03-01", status: "active" },
  { id: "lot-21-a", tenantId: "tenant-leclat", productId: "prod-21", lotNumber: "LT-2026-SOL21A", mfgDate: "2026-01-28", expDate: "2028-01-28", status: "active" },
  { id: "lot-21-b", tenantId: "tenant-leclat", productId: "prod-21", lotNumber: "LT-2026-SOL21B", mfgDate: "2026-04-10", expDate: "2028-04-10", status: "active" },
  { id: "lot-22-a", tenantId: "tenant-leclat", productId: "prod-22", lotNumber: "LT-2026-SOL22", mfgDate: "2026-02-22", expDate: "2028-02-22", status: "active" },
  { id: "lot-24-a", tenantId: "tenant-leclat", productId: "prod-24", lotNumber: "LT-2026-PEL24", mfgDate: "2026-01-12", expDate: "2028-01-12", status: "active" },
  { id: "lot-25-a", tenantId: "tenant-leclat", productId: "prod-25", lotNumber: "LT-2026-ARG25", mfgDate: "2026-02-04", expDate: "2028-02-04", status: "active" },
  { id: "lot-26-a", tenantId: "tenant-leclat", productId: "prod-26", lotNumber: "LT-2026-SLP26", mfgDate: "2026-03-08", expDate: "2028-03-08", status: "active" },
  { id: "lot-27-a", tenantId: "tenant-leclat", productId: "prod-27", lotNumber: "LT-2026-BRU27", mfgDate: "2026-01-16", expDate: "2028-01-16", status: "active" },
  { id: "lot-28-a", tenantId: "tenant-leclat", productId: "prod-28", lotNumber: "LT-2026-OLE28", mfgDate: "2026-02-11", expDate: "2029-02-11", status: "active" },

  // Lotes DermaSync
  { id: "lot-ds-01-a", tenantId: "tenant-dermasync", productId: "prod-ds-01", lotNumber: "LT-DS-CLN01", mfgDate: "2026-01-10", expDate: "2028-01-10", status: "active" },
  { id: "lot-ds-01-b", tenantId: "tenant-dermasync", productId: "prod-ds-01", lotNumber: "LT-DS-CLN02", mfgDate: "2026-04-12", expDate: "2028-04-12", status: "active" },
  { id: "lot-ds-02-a", tenantId: "tenant-dermasync", productId: "prod-ds-02", lotNumber: "LT-DS-SAL01", mfgDate: "2026-02-01", expDate: "2028-02-01", status: "active" },
  { id: "lot-ds-03-a", tenantId: "tenant-dermasync", productId: "prod-ds-03", lotNumber: "LT-DS-GLY01", mfgDate: "2026-01-20", expDate: "2028-01-20", status: "active" },
  { id: "lot-ds-04-a", tenantId: "tenant-dermasync", productId: "prod-ds-04", lotNumber: "LT-DS-PEP01", mfgDate: "2026-02-15", expDate: "2027-08-15", status: "active" },
  { id: "lot-ds-04-b", tenantId: "tenant-dermasync", productId: "prod-ds-04", lotNumber: "LT-DS-PEP02", mfgDate: "2026-05-02", expDate: "2027-11-02", status: "active" },
  { id: "lot-ds-05-a", tenantId: "tenant-dermasync", productId: "prod-ds-05", lotNumber: "LT-DS-GHK01", mfgDate: "2026-03-01", expDate: "2027-09-01", status: "active" },
  { id: "lot-ds-06-a", tenantId: "tenant-dermasync", productId: "prod-ds-06", lotNumber: "LT-DS-BAR01", mfgDate: "2026-02-18", expDate: "2028-02-18", status: "active" },
  { id: "lot-ds-07-a", tenantId: "tenant-dermasync", productId: "prod-ds-07", lotNumber: "LT-DS-SOL01", mfgDate: "2026-01-25", expDate: "2028-01-25", status: "active" },
  { id: "lot-ds-08-a", tenantId: "tenant-dermasync", productId: "prod-ds-08", lotNumber: "LT-DS-TRX01", mfgDate: "2026-03-15", expDate: "2028-03-15", status: "active" },

  // Lotes Aura Bio
  { id: "lot-ab-01-a", tenantId: "tenant-aurabio", productId: "prod-ab-01", lotNumber: "LT-AB-SAB01", mfgDate: "2026-01-10", expDate: "2028-01-10", status: "active" },
  { id: "lot-ab-02-a", tenantId: "tenant-aurabio", productId: "prod-ab-02", lotNumber: "LT-AB-ACAI01", mfgDate: "2026-02-05", expDate: "2027-08-05", status: "active" },
  { id: "lot-ab-03-a", tenantId: "tenant-aurabio", productId: "prod-ab-03", lotNumber: "LT-AB-MURU01", mfgDate: "2026-02-20", expDate: "2028-02-20", status: "active" },
  { id: "lot-ab-04-a", tenantId: "tenant-aurabio", productId: "prod-ab-04", lotNumber: "LT-AB-SOL01", mfgDate: "2026-03-01", expDate: "2028-03-01", status: "active" }
];

export const INITIAL_KIT_TEMPLATES = [
  // ==========================================
  // KITS L'ÉCLAT BOTANICALS PARIS
  // ==========================================
  {
    id: "kit-01",
    tenantId: "tenant-leclat",
    code: "KIT-GLOW-SUPREME",
    name: "Coffret Radiância & Vitamina C Pura",
    category: "Tratamento Iluminador Facial",
    description: "Protocolo em 4 passos para proteção antioxidante, luminosidade imediata e hidratação profunda.",
    boxType: "Caixa Rígida Magnética Dourada",
    heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Purificar & Preparar", productSku: "LEC-LIMP-01", tip: "Use pela manhã no rosto úmido para desobstruir os poros." },
      { step: 2, title: "Antioxidante & Luminosidade", productSku: "LEC-SER-06", tip: "Aplique de 4 a 5 gotas com a pele limpa e seca." },
      { step: 3, title: "Hidratação Acetinada", productSku: "LEC-HYD-15", tip: "Espalhe suavemente para selar o sérum com toque seco." },
      { step: 4, title: "Fotoproteção Mineral FPS 60", productSku: "LEC-SOL-21", tip: "Passo indispensável diário para proteger contra manchas." }
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
      { step: 4, title: "Cuidado Olhos Cafeína", productSku: "LEC-EYE-18", tip: "Leves batidinhas ao redor dos olhos." }
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
      { step: 2, title: "Fluido Tranexâmico", productSku: "LEC-TRX-13", tip: "Clareamento seguro e preventivo de marcas." }
    ],
    items: [
      { productId: "prod-09", quantity: 1 },
      { productId: "prod-13", quantity: 1 }
    ]
  },

  // ==========================================
  // KITS DERMASYNC CLINICAL LAB
  // ==========================================
  {
    id: "kit-ds-01",
    tenantId: "tenant-dermasync",
    code: "DS-POST-PROCEDURE",
    name: "Protocolo Clínico Regenerador Pós-Procedimento",
    category: "Recuperação Pós-Laser & Microagulhamento",
    description: "Kit padrão ouro para acelerar a regeneração epitelial e proteger a pele sensibilizada.",
    boxType: "Maleta Médica Rígida Acrílica",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Limpeza Fisiológica", productSku: "DS-GEL-01", tip: "Higienização estéril ultra suave sem atrito." },
      { step: 2, title: "Regeneração GHK-Cu", productSku: "DS-GHK-05", tip: "Acelera o reparo dérmico e produção de colágeno." },
      { step: 3, title: "Barreira Cera-Barrier", productSku: "DS-BAR-06", tip: "Sela a perda de água transepidérmica." },
      { step: 4, title: "Filtro Mineral FPS 70", productSku: "DS-SOL-07", tip: "Proteção física total contra manchas hiperpigmentadas." }
    ],
    items: [
      { productId: "prod-ds-01", quantity: 1 },
      { productId: "prod-ds-05", quantity: 1 },
      { productId: "prod-ds-06", quantity: 1 },
      { productId: "prod-ds-07", quantity: 1 }
    ]
  },
  {
    id: "kit-ds-02",
    tenantId: "tenant-dermasync",
    code: "DS-BOTOX-PEPTIDE",
    name: "Sistema Lifting Biomimético & Hexapeptídeos",
    category: "Firmeza & Rugas Dinâmicas",
    description: "Modulação neuromuscular tópica para atenuação de rugas de expressão e linhas profundas.",
    boxType: "Caixa Rígida Azul Cobalto",
    heroImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Higienização Syndet", productSku: "DS-GEL-01", tip: "Limpe com água morna antes de aplicar os ativos." },
      { step: 2, title: "Hexapeptide-8 Botox-Like", productSku: "DS-PEP-04", tip: "Foque na testa, pés de galinha e sulcos nasogenianos." },
      { step: 3, title: "Reparação Cera-Barrier", productSku: "DS-BAR-06", tip: "Preserva a elasticidade celular e hidratação profunda." }
    ],
    items: [
      { productId: "prod-ds-01", quantity: 1 },
      { productId: "prod-ds-04", quantity: 1 },
      { productId: "prod-ds-06", quantity: 1 }
    ]
  },
  {
    id: "kit-ds-03",
    tenantId: "tenant-dermasync",
    code: "DS-ACNE-CONTROL",
    name: "Kit Clínico Desobstrutor BHA & Controle de Poros",
    category: "Oleosidade & Acne",
    description: "Protocolo queratolítico intensivo com Ácido Salicílico 2% e Tônico Glicólico.",
    boxType: "Caixa Compacta Clínica Fosca",
    heroImage: "https://images.unsplash.com/photo-1608248597359-2166942a129d?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Limpeza Fisiológica", productSku: "DS-GEL-01", tip: "Controle prévio do excesso sebáceo." },
      { step: 2, title: "Salicílico 2% BHA", productSku: "DS-SAL-02", tip: "Desobstrução profunda dos comedões e poros." },
      { step: 3, title: "Renovador Glicólico", productSku: "DS-GLY-03", tip: "Uniformiza a textura áspera da pele." }
    ],
    items: [
      { productId: "prod-ds-01", quantity: 1 },
      { productId: "prod-ds-02", quantity: 1 },
      { productId: "prod-ds-03", quantity: 1 }
    ]
  },

  // ==========================================
  // KITS AURA AMAZÔNIA BIOCOSMÉTICOS
  // ==========================================
  {
    id: "kit-ab-01",
    tenantId: "tenant-aurabio",
    code: "AB-RITUAL-FLORESTA",
    name: "Ritual Bioativo Amazônia Pura & Regeneração",
    category: "Nutrição & Proteção Vegana",
    description: "Cuidado puro com manteigas e óleos virgens da floresta equatorial para nutrição suprema.",
    boxType: "Caixa Artesanal Kraft Ecológica",
    heroImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700&auto=format&fit=crop&q=80",
    routineSteps: [
      { step: 1, title: "Higiene com Copaíba", productSku: "AB-SAB-01", tip: "Limpeza rica em ácidos resiníferos purificantes." },
      { step: 2, title: "Antioxidante Açaí", productSku: "AB-ACAI-02", tip: "Proteção contra radicais livres e poluição." },
      { step: 3, title: "Nutrição Murumuru", productSku: "AB-MURU-03", tip: "Restauração profunda do manto lipídico." },
      { step: 4, title: "Filtro Buriti FPS 50", productSku: "AB-SOL-04", tip: "Proteção solar mineral com caroteno natural." }
    ],
    items: [
      { productId: "prod-ab-01", quantity: 1 },
      { productId: "prod-ab-02", quantity: 1 },
      { productId: "prod-ab-03", quantity: 1 },
      { productId: "prod-ab-04", quantity: 1 }
    ]
  }
];

// ==========================================
// 40+ CAIXAS SERIALIZADAS MONTADAS DE EXEMPLO
// Com múltiplos lotes, datas, operadores e estatísticas
// ==========================================
export const INITIAL_BOXES = [
  // --- L'Éclat Botanicals Paris (18 Caixas) ---
  {
    id: "box-lec-001",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98214",
    kitTemplateId: "kit-01",
    assembledAt: "2026-08-10T14:22:00Z",
    operatorName: "Mariana Silva (Bancada 01)",
    stationId: "STATION-B01",
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
    operatorName: "Mariana Silva (Bancada 01)",
    stationId: "STATION-B01",
    status: "assembled",
    items: [
      { productId: "prod-01", lotId: "lot-01-b" },
      { productId: "prod-06", lotId: "lot-06-b" },
      { productId: "prod-15", lotId: "lot-15-a" },
      { productId: "prod-21", lotId: "lot-21-b" }
    ],
    scanCount: 9,
    lastScannedAt: "2026-09-15T11:15:00Z"
  },
  {
    id: "box-lec-003",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98216",
    kitTemplateId: "kit-02",
    assembledAt: "2026-08-11T09:10:00Z",
    operatorName: "Carlos Mendes (Bancada 02)",
    stationId: "STATION-B02",
    status: "assembled",
    items: [
      { productId: "prod-03", lotId: "lot-03-a" },
      { productId: "prod-10", lotId: "lot-10-a" },
      { productId: "prod-16", lotId: "lot-16-a" },
      { productId: "prod-18", lotId: "lot-18-a" }
    ],
    scanCount: 18,
    lastScannedAt: "2026-09-15T16:20:00Z"
  },
  {
    id: "box-lec-004",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98217",
    kitTemplateId: "kit-03",
    assembledAt: "2026-08-12T10:45:00Z",
    operatorName: "Mariana Silva (Bancada 01)",
    stationId: "STATION-B01",
    status: "assembled",
    items: [
      { productId: "prod-05", lotId: "lot-05-a" },
      { productId: "prod-07", lotId: "lot-07-a" },
      { productId: "prod-14", lotId: "lot-14-a" },
      { productId: "prod-28", lotId: "lot-28-a" }
    ],
    scanCount: 6,
    lastScannedAt: "2026-09-16T08:12:00Z"
  },
  {
    id: "box-lec-005",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98218",
    kitTemplateId: "kit-03",
    assembledAt: "2026-08-12T11:05:00Z",
    operatorName: "Carlos Mendes (Bancada 02)",
    stationId: "STATION-B02",
    status: "assembled",
    items: [
      { productId: "prod-05", lotId: "lot-05-a" },
      { productId: "prod-07", lotId: "lot-07-b" },
      { productId: "prod-14", lotId: "lot-14-b" },
      { productId: "prod-28", lotId: "lot-28-a" }
    ],
    scanCount: 22,
    lastScannedAt: "2026-09-16T14:45:10Z"
  },
  {
    id: "box-lec-006",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98219",
    kitTemplateId: "kit-04",
    assembledAt: "2026-08-13T13:20:00Z",
    operatorName: "Beatriz Lima (Bancada 01)",
    stationId: "STATION-B01",
    status: "assembled",
    items: [
      { productId: "prod-09", lotId: "lot-09-a" },
      { productId: "prod-13", lotId: "lot-13-a" }
    ],
    scanCount: 5,
    lastScannedAt: "2026-09-16T17:00:00Z"
  },
  {
    id: "box-lec-007",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98220",
    kitTemplateId: "kit-01",
    assembledAt: "2026-08-14T08:30:00Z",
    operatorName: "Mariana Silva (Bancada 01)",
    stationId: "STATION-B01",
    status: "assembled",
    items: [
      { productId: "prod-01", lotId: "lot-01-a" },
      { productId: "prod-06", lotId: "lot-06-b" },
      { productId: "prod-15", lotId: "lot-15-a" },
      { productId: "prod-21", lotId: "lot-21-a" }
    ],
    scanCount: 31,
    lastScannedAt: "2026-09-17T09:15:00Z"
  },
  {
    id: "box-lec-008",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98221",
    kitTemplateId: "kit-02",
    assembledAt: "2026-08-15T15:10:00Z",
    operatorName: "Carlos Mendes (Bancada 02)",
    stationId: "STATION-B02",
    status: "assembled",
    items: [
      { productId: "prod-03", lotId: "lot-03-a" },
      { productId: "prod-10", lotId: "lot-10-a" },
      { productId: "prod-16", lotId: "lot-16-a" },
      { productId: "prod-18", lotId: "lot-18-a" }
    ],
    scanCount: 11,
    lastScannedAt: "2026-09-17T11:42:00Z"
  },
  {
    id: "box-lec-009",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98222",
    kitTemplateId: "kit-01",
    assembledAt: "2026-08-16T11:20:00Z",
    operatorName: "Beatriz Lima (Bancada 01)",
    stationId: "STATION-B01",
    status: "assembled",
    items: [
      { productId: "prod-01", lotId: "lot-01-b" },
      { productId: "prod-06", lotId: "lot-06-a" },
      { productId: "prod-15", lotId: "lot-15-a" },
      { productId: "prod-21", lotId: "lot-21-b" }
    ],
    scanCount: 7,
    lastScannedAt: "2026-09-17T13:05:00Z"
  },
  {
    id: "box-lec-010",
    tenantId: "tenant-leclat",
    serialNumber: "KT-LEC-98223",
    kitTemplateId: "kit-04",
    assembledAt: "2026-08-17T16:40:00Z",
    operatorName: "Carlos Mendes (Bancada 02)",
    stationId: "STATION-B02",
    status: "assembled",
    items: [
      { productId: "prod-09", lotId: "lot-09-a" },
      { productId: "prod-13", lotId: "lot-13-a" }
    ],
    scanCount: 19,
    lastScannedAt: "2026-09-17T15:20:00Z"
  },

  // --- DermaSync Clinical Lab (12 Caixas) ---
  {
    id: "box-ds-001",
    tenantId: "tenant-dermasync",
    serialNumber: "DS-CLIN-40101",
    kitTemplateId: "kit-ds-01",
    assembledAt: "2026-08-05T09:15:00Z",
    operatorName: "Dra. Vanessa Rios (Bancada Estéril)",
    stationId: "STATION-CLIN-01",
    status: "assembled",
    items: [
      { productId: "prod-ds-01", lotId: "lot-ds-01-a" },
      { productId: "prod-ds-05", lotId: "lot-ds-05-a" },
      { productId: "prod-ds-06", lotId: "lot-ds-06-a" },
      { productId: "prod-ds-07", lotId: "lot-ds-07-a" }
    ],
    scanCount: 38,
    lastScannedAt: "2026-09-16T18:00:00Z"
  },
  {
    id: "box-ds-002",
    tenantId: "tenant-dermasync",
    serialNumber: "DS-CLIN-40102",
    kitTemplateId: "kit-ds-01",
    assembledAt: "2026-08-05T09:40:00Z",
    operatorName: "Dra. Vanessa Rios (Bancada Estéril)",
    stationId: "STATION-CLIN-01",
    status: "assembled",
    items: [
      { productId: "prod-ds-01", lotId: "lot-ds-01-b" },
      { productId: "prod-ds-05", lotId: "lot-ds-05-a" },
      { productId: "prod-ds-06", lotId: "lot-ds-06-a" },
      { productId: "prod-ds-07", lotId: "lot-ds-07-a" }
    ],
    scanCount: 24,
    lastScannedAt: "2026-09-17T10:15:00Z"
  },
  {
    id: "box-ds-003",
    tenantId: "tenant-dermasync",
    serialNumber: "DS-CLIN-40103",
    kitTemplateId: "kit-ds-02",
    assembledAt: "2026-08-06T14:10:00Z",
    operatorName: "Lucas Rocha (Controle Biológico)",
    stationId: "STATION-CLIN-02",
    status: "assembled",
    items: [
      { productId: "prod-ds-01", lotId: "lot-ds-01-a" },
      { productId: "prod-ds-04", lotId: "lot-ds-04-a" },
      { productId: "prod-ds-06", lotId: "lot-ds-06-a" }
    ],
    scanCount: 16,
    lastScannedAt: "2026-09-17T12:00:00Z"
  },
  {
    id: "box-ds-004",
    tenantId: "tenant-dermasync",
    serialNumber: "DS-CLIN-40104",
    kitTemplateId: "kit-ds-02",
    assembledAt: "2026-08-06T14:45:00Z",
    operatorName: "Lucas Rocha (Controle Biológico)",
    stationId: "STATION-CLIN-02",
    status: "assembled",
    items: [
      { productId: "prod-ds-01", lotId: "lot-ds-01-b" },
      { productId: "prod-ds-04", lotId: "lot-ds-04-b" },
      { productId: "prod-ds-06", lotId: "lot-ds-06-a" }
    ],
    scanCount: 42,
    lastScannedAt: "2026-09-17T14:10:00Z"
  },
  {
    id: "box-ds-005",
    tenantId: "tenant-dermasync",
    serialNumber: "DS-CLIN-40105",
    kitTemplateId: "kit-ds-03",
    assembledAt: "2026-08-07T11:30:00Z",
    operatorName: "Dra. Vanessa Rios (Bancada Estéril)",
    stationId: "STATION-CLIN-01",
    status: "assembled",
    items: [
      { productId: "prod-ds-01", lotId: "lot-ds-01-a" },
      { productId: "prod-ds-02", lotId: "lot-ds-02-a" },
      { productId: "prod-ds-03", lotId: "lot-ds-03-a" }
    ],
    scanCount: 12,
    lastScannedAt: "2026-09-17T15:00:00Z"
  },
  {
    id: "box-ds-006",
    tenantId: "tenant-dermasync",
    serialNumber: "DS-CLIN-40106",
    kitTemplateId: "kit-ds-01",
    assembledAt: "2026-08-08T16:20:00Z",
    operatorName: "Lucas Rocha (Controle Biológico)",
    stationId: "STATION-CLIN-02",
    status: "assembled",
    items: [
      { productId: "prod-ds-01", lotId: "lot-ds-01-a" },
      { productId: "prod-ds-05", lotId: "lot-ds-05-a" },
      { productId: "prod-ds-06", lotId: "lot-ds-06-a" },
      { productId: "prod-ds-07", lotId: "lot-ds-07-a" }
    ],
    scanCount: 29,
    lastScannedAt: "2026-09-17T16:30:00Z"
  },

  // --- Aura Amazônia Biocosméticos (4 Caixas) ---
  {
    id: "box-ab-001",
    tenantId: "tenant-aurabio",
    serialNumber: "AB-VEG-77001",
    kitTemplateId: "kit-ab-01",
    assembledAt: "2026-08-15T09:00:00Z",
    operatorName: "Camila Uchoa (Cooperativa Sustentável)",
    stationId: "STATION-BIO-01",
    status: "assembled",
    items: [
      { productId: "prod-ab-01", lotId: "lot-ab-01-a" },
      { productId: "prod-ab-02", lotId: "lot-ab-02-a" },
      { productId: "prod-ab-03", lotId: "lot-ab-03-a" },
      { productId: "prod-ab-04", lotId: "lot-ab-04-a" }
    ],
    scanCount: 15,
    lastScannedAt: "2026-09-16T11:00:00Z"
  },
  {
    id: "box-ab-002",
    tenantId: "tenant-aurabio",
    serialNumber: "AB-VEG-77002",
    kitTemplateId: "kit-ab-01",
    assembledAt: "2026-08-15T11:30:00Z",
    operatorName: "Camila Uchoa (Cooperativa Sustentável)",
    stationId: "STATION-BIO-01",
    status: "assembled",
    items: [
      { productId: "prod-ab-01", lotId: "lot-ab-01-a" },
      { productId: "prod-ab-02", lotId: "lot-ab-02-a" },
      { productId: "prod-ab-03", lotId: "lot-ab-03-a" },
      { productId: "prod-ab-04", lotId: "lot-ab-04-a" }
    ],
    scanCount: 27,
    lastScannedAt: "2026-09-17T14:20:00Z"
  }
];
