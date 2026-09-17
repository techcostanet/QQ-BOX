import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  Sparkles, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  ShoppingBag, 
  Info, 
  Clock,
  Smartphone,
  ExternalLink
} from 'lucide-react';

export default function ConsumerMobileView({
  boxes,
  activeBoxSerial,
  kitTemplates,
  products,
  lots,
  tenants,
  onSelectBoxSerial
}) {
  const [expandedInci, setExpandedInci] = useState({});
  const [fullscreenMode, setFullscreenMode] = useState(false);

  // Encontra a caixa selecionada ou pega a primeira
  const selectedBox = boxes.find(b => b.serialNumber === activeBoxSerial) || boxes[0];
  
  if (!selectedBox) {
    return (
      <div className="glass-card" style={{ textAlign: 'center', padding: '50px' }}>
        <h3>Nenhuma caixa montada ainda.</h3>
        <p style={{ color: 'var(--text-muted)' }}>Vá até a Bancada de Montagem para criar a primeira caixa e gerar o QR Code.</p>
      </div>
    );
  }

  const tenant = tenants.find(t => t.id === selectedBox.tenantId) || tenants[0];
  const kitTemplate = kitTemplates.find(k => k.id === selectedBox.kitTemplateId);

  // Detalhes completos dos itens desta caixa
  const boxItems = selectedBox.items.map(item => {
    const product = products.find(p => p.id === item.productId);
    const lot = lots.find(l => l.id === item.lotId);
    return { ...item, product, lot };
  });

  const toggleInci = (productId) => {
    setExpandedInci(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  const formattedAssemblyDate = new Date(selectedBox.assembledAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="consumer-preview-wrapper">
      {/* Barra de controle e seletor da caixa para teste */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '860px', flexWrap: 'wrap', gap: '8px' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '2px' }}>Experiência do Consumidor (Mobile Scan)</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Esta é a tela mobile responsiva que abre no smartphone do cliente ao escanear a etiqueta Zebra.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Caixa:</span>
          <select 
            value={selectedBox.serialNumber} 
            onChange={(e) => onSelectBoxSerial(e.target.value)}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
          >
            {boxes.map(b => (
              <option key={b.id} value={b.serialNumber}>
                {b.serialNumber} ({b.items.length} itens • {b.scanCount || 0} scans)
              </option>
            ))}
          </select>

          <button 
            className="btn-secondary btn-sm"
            onClick={() => setFullscreenMode(!fullscreenMode)}
          >
            <Smartphone size={13} />
            <span>{fullscreenMode ? 'Ver Celular' : 'Expandir'}</span>
          </button>
        </div>
      </div>

      {/* Frame do Smartphone ou Visualização Expandida */}
      <div className={fullscreenMode ? 'consumer-fullscreen-card' : 'phone-mockup-frame'}>
        {!fullscreenMode && (
          <div className="phone-speaker-notch">
            <div className="notch-camera-dot"></div>
          </div>
        )}

        <div className="phone-screen-scroll">
          {/* Header da Marca do Tenant */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '1px', color: tenant.primaryColor }}>
                {tenant.logoText}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                {tenant.tagline}
              </div>
            </div>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              100% AUTÊNTICO
            </span>
          </div>

          {/* Cartão de Autenticidade e Verificação da Caixa */}
          <div className="consumer-hero-card">
            <div className="consumer-verified-badge">
              <ShieldCheck size={14} />
              <span>Caixa Original Verificada</span>
            </div>

            <h2 style={{ fontSize: '1.25rem', marginBottom: '2px', lineHeight: '1.2' }}>
              {kitTemplate?.name}
            </h2>

            <div className="consumer-box-serial-pill">
              SERIAL: {selectedBox.serialNumber}
            </div>

            {kitTemplate?.heroImage && (
              <img 
                src={kitTemplate.heroImage} 
                alt={kitTemplate.name} 
                className="consumer-kit-photo" 
              />
            )}

            <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
              <div>
                <Calendar size={12} style={{ display: 'inline', marginRight: 4 }} />
                <span>Montado: {formattedAssemblyDate}</span>
              </div>
              <div>
                <Clock size={12} style={{ display: 'inline', marginRight: 4 }} />
                <span>Total de Itens: {boxItems.length}</span>
              </div>
            </div>
          </div>

          {/* Lista de Cosméticos e Seus Lotes Nesta Caixa */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-primary)', marginBottom: '10px' }}>
              Produtos Desta Unidade:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {boxItems.map(({ product, lot }, idx) => (
                <div key={idx} className="consumer-product-card">
                  <div className="consumer-prod-top">
                    <img src={product?.image} alt={product?.name} className="consumer-prod-thumb" />
                    <div>
                      <h4 style={{ fontSize: '0.88rem', lineHeight: '1.25', color: 'var(--text-primary)' }}>{product?.name}</h4>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {product?.category} &bull; {product?.volume}
                      </div>
                    </div>
                  </div>

                  {/* Lote e Validade ESPECÍFICOS desta caixa */}
                  <div className="consumer-prod-lot-box">
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem', display: 'block' }}>LOTE FRASCO:</span>
                      <strong>{lot?.lotNumber || 'NÃO ATRIBUÍDO'}</strong>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem', display: 'block' }}>VALIDADE:</span>
                      <strong style={{ color: 'var(--brand-primary)' }}>{lot?.expDate || 'N/A'}</strong>
                    </div>
                  </div>

                  {/* Como Usar */}
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.35' }}>
                    <strong>Como usar:</strong> {product?.howToUse}
                  </div>

                  {/* Registro ANVISA */}
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    <span>ANVISA: {product?.anvisaProcess}</span>
                  </div>

                  {/* Acordeon de Composição INCI */}
                  <button 
                    onClick={() => toggleInci(product?.id)}
                    style={{ background: 'transparent', color: 'var(--brand-primary)', fontSize: '0.72rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0', borderTop: '1px solid var(--border-subtle)', fontWeight: 600 }}
                  >
                    <span>Ver Composição Completa (INCI / Ingredientes)</span>
                    {expandedInci[product?.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {expandedInci[product?.id] && (
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', background: '#f8fafc', border: '1px solid var(--border-subtle)', padding: '8px 10px', borderRadius: '4px', lineHeight: '1.35' }}>
                      {product?.inciIngredients}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Passo-a-Passo da Rotina (Guia de Skincare / Haircare) */}
          {kitTemplate?.routineSteps && (
            <div className="consumer-routine-box">
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-primary)', marginBottom: '10px' }}>
                Ordem Recomendada de Aplicação:
              </div>

              {kitTemplate.routineSteps.map((step) => (
                <div key={step.step} className="routine-step-item">
                  <div className="step-num-bubble">{step.step}</div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>{step.title}</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>{step.tip}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Botões de Ação do Consumidor */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
            <a 
              href={`https://wa.me/${tenant.supportWhatsapp}?text=Ol%C3%A1,%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20meu%20kit%20serial%20${selectedBox.serialNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: 'none', background: '#25D366', color: '#000', fontSize: '0.85rem', padding: '10px' }}
            >
              <MessageCircle size={16} />
              <span>Dúvidas? Falar com Especialista (SAC)</span>
            </a>

            <a 
              href={tenant.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ textDecoration: 'none', justifyContent: 'center', fontSize: '0.85rem', padding: '10px' }}
            >
              <ShoppingBag size={16} />
              <span>Conhecer Loja Oficial & Recompra</span>
            </a>
          </div>

          {/* Rodapé Regulatório */}
          <div style={{ textAlign: 'center', fontSize: '0.65rem', color: 'var(--text-muted)', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
            <div>{tenant.anvisaLicense} &bull; Rastreabilidade Digital RDC ANVISA</div>
            <div>CosmetiqCloud Serializer &bull; Todos os direitos reservados.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
