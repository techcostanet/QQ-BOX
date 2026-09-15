import React, { useState } from 'react';
import { 
  Package, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  Layers, 
  Sparkles, 
  Barcode, 
  ScanLine,
  Calendar,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AssemblyStation({
  tenant,
  kitTemplates,
  products,
  lots,
  onBoxAssembled
}) {
  const tenantKits = kitTemplates.filter(k => k.tenantId === tenant.id);
  const [selectedKitId, setSelectedKitId] = useState(tenantKits[0]?.id || '');
  
  // Estado das seleções de lotes para os itens da caixa atual
  // Ex: { 'prod-lec-01': 'lot-lec-esp-01', 'prod-lec-02': 'lot-lec-ser-02' }
  const [selectedLots, setSelectedLots] = useState({});
  const [operatorName, setOperatorName] = useState('Mariana Silva (Bancada 01)');

  const currentKit = tenantKits.find(k => k.id === selectedKitId) || tenantKits[0];

  // Identifica os produtos do kit atual
  const kitProducts = (currentKit?.items || []).map(item => {
    const product = products.find(p => p.id === item.productId);
    const productLots = lots.filter(l => l.productId === item.productId && l.status === 'active');
    return {
      ...item,
      product,
      availableLots: productLots
    };
  });

  // Atualiza a seleção de lote para um produto
  const handleLotChange = (productId, lotId) => {
    setSelectedLots(prev => ({
      ...prev,
      [productId]: lotId
    }));
  };

  // Preenchimento automático com o primeiro lote ativo (atalho do operador)
  const handleAutoFillFirstActiveLots = () => {
    const auto = {};
    kitProducts.forEach(kp => {
      if (kp.availableLots.length > 0) {
        auto[kp.productId] = kp.availableLots[0].id;
      }
    });
    setSelectedLots(auto);
  };

  // Alterna para o segundo lote disponível (demonstração de lotes diferentes por caixa!)
  const handleAlternativeLots = () => {
    const alt = {};
    kitProducts.forEach(kp => {
      if (kp.availableLots.length > 1) {
        alt[kp.productId] = kp.availableLots[1].id;
      } else if (kp.availableLots.length > 0) {
        alt[kp.productId] = kp.availableLots[0].id;
      }
    });
    setSelectedLots(alt);
  };

  // Verifica se todos os itens têm lotes selecionados
  const isReadyToAssemble = kitProducts.every(kp => !!selectedLots[kp.productId]);

  // Ação de finalizar a caixa
  const handleFinishAndPrint = () => {
    if (!isReadyToAssemble || !currentKit) return;

    // Gera o número serial único (ex: KT-LEC-58192)
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    const tenantPrefix = tenant.slug.substring(0, 3).toUpperCase();
    const serialNumber = `KT-${tenantPrefix}-${randomCode}`;

    const newBox = {
      id: `box-${Date.now()}`,
      tenantId: tenant.id,
      serialNumber,
      kitTemplateId: currentKit.id,
      assembledAt: new Date().toISOString(),
      operatorName: operatorName,
      stationId: "STATION-01",
      status: "assembled",
      items: kitProducts.map(kp => ({
        productId: kp.productId,
        lotId: selectedLots[kp.productId]
      })),
      scanCount: 0,
      lastScannedAt: null
    };

    // Efeito visual de celebração na bancada
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: [tenant.primaryColor, tenant.accentColor, '#ffffff']
    });

    onBoxAssembled(newBox, currentKit);
  };

  return (
    <div>
      {/* Cabeçalho da Seção */}
      <div className="section-header">
        <div className="section-header-left">
          <h1>Bancada de Montagem & Serialização</h1>
          <p>Selecione o modelo do kit, vincule os lotes dos cosméticos desta caixa e gere o QR Code Zebra.</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Operador:</span>
          <input 
            type="text" 
            value={operatorName} 
            onChange={(e) => setOperatorName(e.target.value)}
            style={{ width: '220px', padding: '6px 12px', fontSize: '0.85rem' }}
          />
        </div>
      </div>

      {/* Grid Principal: Seletor de Kits à esquerda, Bancada de montagem à direita */}
      <div className="assembly-grid">
        {/* Painel Esquerdo: Seleção do Modelo de Kit */}
        <div className="kit-selector-sidebar">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              1. Selecionar Kit:
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--brand-accent)' }}>
              {tenantKits.length} kits disponíveis
            </span>
          </div>

          {tenantKits.map(kit => (
            <div 
              key={kit.id}
              className={`kit-card-option ${kit.id === currentKit?.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedKitId(kit.id);
                setSelectedLots({}); // reseta seleções para o novo kit
              }}
            >
              <img src={kit.heroImage} alt={kit.name} className="kit-card-thumb" />
              <div className="kit-card-info">
                <h4>{kit.name}</h4>
                <span>{kit.category} &bull; {kit.items.length} itens</span>
              </div>
            </div>
          ))}

          {/* Dica sobre lotes diferentes */}
          <div style={{ background: '#ffffff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '14px', marginTop: '10px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px', color: 'var(--brand-primary)', fontSize: '0.85rem', fontWeight: 600 }}>
              <Sparkles size={16} />
              <span>Lotes Dinâmicos por Caixa</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
              Cada caixa fechada pode ter uma combinação única de lotes. Ao finalizar, o sistema cria o serial exclusivo e a etiqueta Zebra.
            </p>
          </div>
        </div>

        {/* Painel Direito: Slots de Produtos da Caixa */}
        <div className="bench-panel">
          <div className="glass-card">
            {/* Topo do Kit Selecionado */}
            <div className="kit-active-header">
              <div className="kit-active-title">
                <span className="kit-badge-code">REF: {currentKit?.code}</span>
                <h2>{currentKit?.name}</h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {currentKit?.description} &bull; Tipo de embalagem: <strong>{currentKit?.boxType}</strong>
                </p>
              </div>

              {/* Botões de atalho de preenchimento */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-secondary btn-sm" onClick={handleAutoFillFirstActiveLots}>
                  Preencher com Lote A
                </button>
                <button className="btn-secondary btn-sm" onClick={handleAlternativeLots} title="Simula uma caixa com lotes diferentes">
                  Alternar p/ Lote B
                </button>
              </div>
            </div>

            {/* Grid dos Slots de Itens da Caixa */}
            <div style={{ margin: '20px 0 10px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '14px' }}>
                2. Bipar ou Selecionar Lote de Cada Cosmético Desta Caixa:
              </div>

              <div className="slots-grid">
                {kitProducts.map((item, index) => {
                  const selectedLotId = selectedLots[item.productId];
                  const activeLot = item.availableLots.find(l => l.id === selectedLotId);
                  const isFilled = !!activeLot;

                  return (
                    <div 
                      key={item.productId} 
                      className={`product-slot-card ${isFilled ? 'filled' : ''}`}
                    >
                      <div className={`slot-index-badge ${isFilled ? 'done' : ''}`}>
                        {isFilled ? <Check size={12} /> : index + 1}
                      </div>

                      <div className="product-slot-header">
                        <img 
                          src={item.product?.image} 
                          alt={item.product?.name} 
                          className="product-slot-img" 
                        />
                        <div className="product-slot-title">
                          <h4>{item.product?.name}</h4>
                          <div className="product-slot-meta">
                            {item.product?.category} &bull; {item.product?.volume}
                          </div>
                        </div>
                      </div>

                      <div className="slot-lot-field">
                        <div className="slot-lot-label">
                          <span>Lote do Frasco:</span>
                          <span style={{ fontSize: '0.7rem', color: isFilled ? 'var(--success)' : 'var(--warning)' }}>
                            {isFilled ? 'LOTE VINCULADO' : 'AGUARDANDO LOTE'}
                          </span>
                        </div>

                        <select
                          className="slot-lot-select"
                          value={selectedLotId || ''}
                          onChange={(e) => handleLotChange(item.productId, e.target.value)}
                        >
                          <option value="">-- Selecione o Lote do Frasco --</option>
                          {item.availableLots.map(lot => (
                            <option key={lot.id} value={lot.id}>
                              {lot.lotNumber} (Val: {lot.expDate})
                            </option>
                          ))}
                        </select>

                        {activeLot && (
                          <div className="lot-details-pill">
                            <span>Fab: {activeLot.mfgDate}</span>
                            <span style={{ color: 'var(--brand-accent)' }}>Validade: {activeLot.expDate}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Barra de Ação Inferior */}
            <div className="assembly-actions-bar">
              <div className="assembly-status-text">
                {isReadyToAssemble ? (
                  <>
                    <CheckCircle2 size={24} style={{ color: 'var(--success)' }} />
                    <div>
                      <strong style={{ color: 'var(--success)' }}>Caixa Pronta para Selar!</strong>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        Todos os {kitProducts.length} itens possuem lote e validade associados.
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertCircle size={24} style={{ color: 'var(--warning)' }} />
                    <div>
                      <strong style={{ color: 'var(--warning)' }}>Montagem em Andamento</strong>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        Selecione o lote de todos os {kitProducts.length} itens para liberar a impressão.
                      </div>
                    </div>
                  </>
                )}
              </div>

              <button 
                className="btn-primary"
                disabled={!isReadyToAssemble}
                onClick={handleFinishAndPrint}
                style={{ minWidth: '260px' }}
              >
                <Printer size={18} />
                <span>Finalizar Caixa & Gerar QR Zebra</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
