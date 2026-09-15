import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  FileCode, 
  Eye, 
  Download, 
  Sparkles,
  QrCode as QrIcon
} from 'lucide-react';
import QRCode from 'qrcode';
import { generateZPL100x50, generateZPL100x150 } from '../utils/zplGenerator';

export default function ThermalLabelModal({
  box,
  kitTemplate,
  tenant,
  products,
  lots,
  onClose,
  onOpenConsumerView
}) {
  const [viewMode, setViewMode] = useState('visual'); // 'visual' | 'zpl'
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copiedZpl, setCopiedZpl] = useState(false);
  const [labelSize, setLabelSize] = useState('100x50'); // '100x50' | '100x150'

  if (!box || !kitTemplate) return null;

  // Monta a URL pública dinâmica que o QR Code aponta
  const publicDomain = tenant.customDomain || `${tenant.slug}.cosmetiqcloud.io`;
  const publicUrl = `https://${publicDomain}/k/${box.serialNumber}`;

  // Mapeia detalhes dos itens da caixa (produto + lote)
  const itemsWithDetails = box.items.map(item => {
    const product = products.find(p => p.id === item.productId);
    const lot = lots.find(l => l.id === item.lotId);
    return { product, lot };
  });

  // Gera ZPL correspondente ao tamanho
  const zplCode = labelSize === '100x50'
    ? generateZPL100x50({
        serialNumber: box.serialNumber,
        kitName: kitTemplate.name,
        kitCode: kitTemplate.code,
        tenantName: tenant.name,
        assembledAt: box.assembledAt,
        operatorName: box.operatorName,
        publicUrl
      })
    : generateZPL100x150({
        serialNumber: box.serialNumber,
        kitName: kitTemplate.name,
        kitCode: kitTemplate.code,
        tenantName: tenant.name,
        assembledAt: box.assembledAt,
        operatorName: box.operatorName,
        itemsWithDetails,
        publicUrl
      });

  // Gera o QR Code real em alta resolução
  useEffect(() => {
    QRCode.toDataURL(publicUrl, {
      width: 260,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      },
      errorCorrectionLevel: 'M'
    })
      .then(url => setQrDataUrl(url))
      .catch(err => console.error("Erro gerando QR Code:", err));
  }, [publicUrl]);

  const handleCopyZpl = () => {
    navigator.clipboard.writeText(zplCode);
    setCopiedZpl(true);
    setTimeout(() => setCopiedZpl(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date(box.assembledAt).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Cabeçalho do Modal */}
        <div className="modal-header">
          <h3>
            <Printer size={22} style={{ color: 'var(--brand-primary)' }} />
            <span>Etiqueta Térmica Zebra (100% Cloud ZPL & PDF)</span>
          </h3>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>

        {/* Corpo do Modal */}
        <div className="modal-body">
          {/* Controles de visualização */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div className="view-mode-toggle">
              <button 
                className={`mode-toggle-btn ${viewMode === 'visual' ? 'active' : ''}`}
                onClick={() => setViewMode('visual')}
              >
                <Eye size={14} style={{ display: 'inline', marginRight: 6 }} />
                Visual da Etiqueta Térmica
              </button>
              <button 
                className={`mode-toggle-btn ${viewMode === 'zpl' ? 'active' : ''}`}
                onClick={() => setViewMode('zpl')}
              >
                <FileCode size={14} style={{ display: 'inline', marginRight: 6 }} />
                Comando ZPL Nativo Zebra
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Dimensão:</span>
              <select 
                value={labelSize} 
                onChange={(e) => setLabelSize(e.target.value)}
                style={{ padding: '4px 8px', fontSize: '0.82rem' }}
              >
                <option value="100x50">100 x 50 mm (Padrão Caixa)</option>
                <option value="100x150">100 x 150 mm (Caixa Grande / Lotes impressos)</option>
              </select>
            </div>
          </div>

          {/* VISUALIZAÇÃO 1: Fiel à Etiqueta Térmica Zebra */}
          {viewMode === 'visual' && (
            <div className="zebra-label-preview-wrapper">
              <div className="zebra-thermal-label thermal-print-target">
                {/* Linha Topo: Marca e Nome do Kit */}
                <div className="label-top-row">
                  <div>
                    <div className="label-tenant-name">{tenant.name}</div>
                    <div className="label-kit-name">{kitTemplate.name}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="label-kit-ref">SKU: {kitTemplate.code}</div>
                    <div style={{ fontSize: '9px', fontWeight: 'bold' }}>COSMÉTICOS ORIGINAL</div>
                  </div>
                </div>

                {/* Meio: Serial único + Código de Barras + QR Code */}
                <div className="label-center-grid">
                  <div className="label-serial-section">
                    <div className="label-serial-label">SERIAL ÚNICO DA CAIXA</div>
                    <div className="label-serial-value">{box.serialNumber}</div>
                    
                    {/* Simulação gráfica do código de barras 128 */}
                    <div className="label-barcode-mock">
                      {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 3, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 1, 2, 3, 2, 1, 4, 3, 1, 2, 1, 3, 2, 4, 1, 2].map((w, i) => (
                        <div key={i} className="barcode-bar" style={{ width: `${w * 1.5}px` }} />
                      ))}
                    </div>

                    <div className="label-meta-list">
                      <div>MONTAGEM: {formattedDate}</div>
                      <div>OPERADOR: {box.operatorName}</div>
                      <div>RASTREAMENTO: NUVEM / RLS CERTIFIED</div>
                    </div>
                  </div>

                  {/* QR Code Dinâmico para o Consumidor */}
                  <div className="label-qr-section">
                    {qrDataUrl ? (
                      <img 
                        src={qrDataUrl} 
                        alt="QR Code da Caixa" 
                        style={{ width: '130px', height: '130px', display: 'block' }} 
                      />
                    ) : (
                      <div style={{ width: '130px', height: '130px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Carregando QR...
                      </div>
                    )}
                    <div className="label-qr-caption">APONTE A CÂMERA DO CELULAR</div>
                  </div>
                </div>

                {/* Se for etiqueta 100x150mm, lista também os itens */}
                {labelSize === '100x150' && (
                  <div style={{ borderTop: '1px solid #000', paddingTop: '8px', marginTop: '6px', fontSize: '10px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px', textTransform: 'uppercase' }}>Conteúdo desta Caixa:</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                      {itemsWithDetails.map((item, idx) => (
                        <div key={idx} style={{ background: '#f4f4f4', padding: '3px 6px', borderRadius: '2px' }}>
                          <b>{idx + 1}. {item.product?.name.substring(0, 24)}</b><br />
                          <span>LOTE: {item.lot?.lotNumber} | VAL: {item.lot?.expDate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rodapé da Etiqueta */}
                <div className="label-bottom-footer">
                  <span>SISTEMA CLOUD SERIALIZER</span>
                  <span>ANVISA: {tenant.anvisaLicense}</span>
                  <span>{publicUrl}</span>
                </div>
              </div>
            </div>
          )}

          {/* VISUALIZAÇÃO 2: Código ZPL Puro para Zebra */}
          {viewMode === 'zpl' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Código ZPL pronto para envio direto via Socket TCP/IP, USB ou Zebra Setup Utilities:
                </span>
                <button className="btn-secondary btn-sm" onClick={handleCopyZpl}>
                  {copiedZpl ? <Check size={14} style={{ color: 'var(--success)' }} /> : <Copy size={14} />}
                  <span>{copiedZpl ? 'Copiado!' : 'Copiar ZPL'}</span>
                </button>
              </div>
              <pre className="zpl-code-box">{zplCode}</pre>
            </div>
          )}

          {/* Dica técnica sobre impressão direta */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '12px 16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Sparkles size={20} style={{ color: 'var(--brand-accent)', flexShrink: 0 }} />
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              <strong>100% em Nuvem:</strong> Esta etiqueta pode ser impressa diretamente pelo botão abaixo (usando a calibração térmica nativa do navegador) ou enviada via script ZPL para a impressora Zebra conectada via USB/Rede.
            </div>
          </div>
        </div>

        {/* Rodapé com Ações */}
        <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-surface-elevated)' }}>
          <button 
            className="btn-secondary" 
            onClick={() => {
              onClose();
              onOpenConsumerView(box.serialNumber);
            }}
          >
            <QrIcon size={16} />
            <span>Testar Leitura do QR Code</span>
          </button>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-secondary" onClick={onClose}>
              Fechar
            </button>
            <button className="btn-primary" onClick={handlePrint}>
              <Printer size={16} />
              <span>Imprimir na Zebra Agora</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
