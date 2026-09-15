// Utilitário de Geração de Comandos Nativos ZPL (Zebra Programming Language)
// Produz comandos vetoriais puros para impressoras térmicas Zebra (ZD220, ZD420, ZT411, etc.)
// 100% gerado na nuvem, sem intermediários.

/**
 * Gera ZPL para etiqueta padrão de 100mm x 50mm (203 DPI = 800 x 400 dots)
 */
export function generateZPL100x50({
  serialNumber,
  kitName,
  kitCode,
  tenantName,
  assembledAt,
  operatorName,
  publicUrl
}) {
  const formattedDate = new Date(assembledAt).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Limpeza de caracteres especiais para ZPL
  const cleanKitName = kitName.substring(0, 32).toUpperCase();
  const cleanTenant = tenantName.substring(0, 24).toUpperCase();
  const cleanOp = (operatorName || "SISTEMA").substring(0, 20);

  return `^XA
^PW800
^LL400
^LH0,0

~SD24
^PR4,4

; --- CABECALHO MARCA & MODELO ---
^FO40,30^A0N,22,22^FD${cleanTenant}^FS
^FO40,60^A0N,32,32^FD${cleanKitName}^FS
^FO40,98^A0N,18,18^FDKIT REF: ${kitCode || 'N/A'}^FS

; --- LINHA DIVISORIA ---
^FO40,122^GB720,2,2^FS

; --- SERIAL E METADADOS DA CAIXA ---
^FO40,140^A0N,20,20^FDSERIAL UNICO DA CAIXA:^FS
^FO40,165^A0N,44,40^FD${serialNumber}^FS

^FO40,225^A0N,18,18^FDMONTAGEM: ${formattedDate}^FS
^FO40,250^A0N,18,18^FDOPERADOR: ${cleanOp}^FS
^FO40,275^A0N,16,16^FDSTATUS: CAIXA SELADA E RASTREADA^FS

; --- CODIGO DE BARRAS CODE128 DO SERIAL ---
^FO40,305^BY2,2,45^BCN,45,N,N,N^FD${serialNumber}^FS

; --- QUADRO E QR CODE DINAMICO (LADO DIREITO) ---
^FO510,135^GB250,240,2^FS
^FO525,145^A0N,15,15^FDESCANEAR P/ DETALHES^FS

; QR Code Zebra nativo (^BQN, modelo 2, fator de escala 5)
^FO540,170^BQN,2,5,M,7^FDMA,${publicUrl}^FS

^XZ`;
}

/**
 * Gera ZPL para etiqueta expandida de 100mm x 150mm (203 DPI = 800 x 1200 dots)
 * Inclui os lotes de cada produto na própria etiqueta física
 */
export function generateZPL100x150({
  serialNumber,
  kitName,
  kitCode,
  tenantName,
  assembledAt,
  operatorName,
  itemsWithDetails = [],
  publicUrl
}) {
  const formattedDate = new Date(assembledAt).toLocaleString('pt-BR');
  const cleanKitName = kitName.substring(0, 36).toUpperCase();
  const cleanTenant = tenantName.substring(0, 28).toUpperCase();

  let itemsZpl = "";
  let yPos = 360;
  itemsWithDetails.slice(0, 6).forEach((item, index) => {
    const pName = (item.product?.name || "Produto").substring(0, 28);
    const lNum = item.lot?.lotNumber || "N/A";
    const exp = item.lot?.expDate || "N/A";
    itemsZpl += `^FO40,${yPos}^A0N,20,20^FD${index + 1}. ${pName}^FS\n`;
    itemsZpl += `^FO40,${yPos + 22}^A0N,18,18^FDLOTE: ${lNum} | VAL: ${exp}^FS\n`;
    yPos += 55;
  });

  return `^XA
^PW800
^LL1200
^LH0,0

~SD26
^PR4,4

; --- CABECALHO ---
^FO40,40^A0N,28,28^FD${cleanTenant}^FS
^FO40,75^A0N,38,38^FD${cleanKitName}^FS
^FO40,120^A0N,20,20^FDKIT SKU: ${kitCode || 'N/A'}^FS
^FO40,150^GB720,3,3^FS

; --- SERIAL E QR CODE ---
^FO40,175^A0N,22,22^FDIDENTIFICACAO SERIAL DA CAIXA:^FS
^FO40,205^A0N,50,45^FD${serialNumber}^FS
^FO40,270^BY3,2,60^BCN,60,Y,N,N^FD${serialNumber}^FS

^FO500,165^BQN,2,7,M,7^FDMA,${publicUrl}^FS
^FO510,335^A0N,16,16^FDLEIA O QR CODE^FS

^FO40,345^GB720,2,2^FS

; --- ITENS E LOTES DESTA CAIXA ---
^FO40,360^A0N,22,22^FDCONTEUDO SERIALIZADO DA UNIDADE:^FS
${itemsZpl}

^FO40,820^GB720,2,2^FS
^FO40,840^A0N,20,20^FDDATA MONTAGEM: ${formattedDate}^FS
^FO40,870^A0N,20,20^FDOPERADOR: ${operatorName || 'Expedicao'}^FS
^FO40,900^A0N,18,18^FDRASTREABILIDADE DIGITAL 100% EM NUVEM^FS

^XZ`;
}
