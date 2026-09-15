import React, { useState } from 'react';
import { 
  Package, 
  Plus, 
  Calendar, 
  Tag, 
  Layers, 
  FileText, 
  Check, 
  Sparkles,
  Barcode
} from 'lucide-react';

export default function CatalogManager({
  tenant,
  products,
  lots,
  kitTemplates,
  onAddLot
}) {
  const tenantProducts = products.filter(p => p.tenantId === tenant.id);
  const tenantLots = lots.filter(l => l.tenantId === tenant.id);
  const tenantKits = kitTemplates.filter(k => k.tenantId === tenant.id);

  const [activeTab, setActiveTab] = useState('lots'); // 'lots' | 'products' | 'kits'

  // Estado do formulário de novo lote
  const [showNewLotModal, setShowNewLotModal] = useState(false);
  const [newLotProduct, setNewLotProduct] = useState(tenantProducts[0]?.id || '');
  const [newLotNumber, setNewLotNumber] = useState('');
  const [newLotMfg, setNewLotMfg] = useState(new Date().toISOString().split('T')[0]);
  const [newLotExp, setNewLotExp] = useState('2028-12-31');

  const handleCreateLot = (e) => {
    e.preventDefault();
    if (!newLotProduct || !newLotNumber) return;

    const createdLot = {
      id: `lot-${Date.now()}`,
      tenantId: tenant.id,
      productId: newLotProduct,
      lotNumber: newLotNumber.toUpperCase().trim(),
      mfgDate: newLotMfg,
      expDate: newLotExp,
      status: 'active'
    };

    onAddLot(createdLot);
    setNewLotNumber('');
    setShowNewLotModal(false);
  };

  return (
    <div>
      <div className="section-header">
        <div className="section-header-left">
          <h1>Catálogo, Lotes & Receitas de Kits</h1>
          <p>Gerencie o cadastro de cosméticos com especificações técnicas (INCI, ANVISA) e cadastre novos lotes de produção.</p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            className="btn-primary"
            onClick={() => setShowNewLotModal(true)}
          >
            <Plus size={16} />
            <span>Cadastrar Novo Lote</span>
          </button>
        </div>
      </div>

      {/* Sub-abas */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <button 
          className={`btn-secondary btn-sm ${activeTab === 'lots' ? 'active' : ''}`}
          onClick={() => setActiveTab('lots')}
          style={{ 
            background: activeTab === 'lots' ? 'var(--brand-primary)' : '#ffffff',
            color: activeTab === 'lots' ? '#ffffff' : 'var(--text-secondary)',
            borderColor: activeTab === 'lots' ? 'var(--brand-primary)' : 'var(--border-medium)'
          }}
        >
          Lotes Ativos de Cosméticos ({tenantLots.length})
        </button>
        <button 
          className={`btn-secondary btn-sm ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
          style={{ 
            background: activeTab === 'products' ? 'var(--brand-primary)' : '#ffffff',
            color: activeTab === 'products' ? '#ffffff' : 'var(--text-secondary)',
            borderColor: activeTab === 'products' ? 'var(--brand-primary)' : 'var(--border-medium)'
          }}
        >
          Produtos Individuais ({tenantProducts.length})
        </button>
        <button 
          className={`btn-secondary btn-sm ${activeTab === 'kits' ? 'active' : ''}`}
          onClick={() => setActiveTab('kits')}
          style={{ 
            background: activeTab === 'kits' ? 'var(--brand-primary)' : '#ffffff',
            color: activeTab === 'kits' ? '#ffffff' : 'var(--text-secondary)',
            borderColor: activeTab === 'kits' ? 'var(--brand-primary)' : 'var(--border-medium)'
          }}
        >
          Modelos de Kits ({tenantKits.length})
        </button>
      </div>

      {/* ABA 1: LOTES */}
      {activeTab === 'lots' && (
        <div className="glass-card" style={{ padding: 0 }}>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Lote do Cosmético</th>
                  <th>Produto Vinculado</th>
                  <th>Data de Fabricação</th>
                  <th>Data de Validade</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tenantLots.map(lot => {
                  const product = products.find(p => p.id === lot.productId);
                  return (
                    <tr key={lot.id}>
                      <td>
                        <span className="serial-cell" style={{ color: 'var(--brand-primary)' }}>
                          {lot.lotNumber}
                        </span>
                      </td>
                      <td>
                        <strong>{product?.name}</strong>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          SKU: {product?.sku} &bull; {product?.volume}
                        </div>
                      </td>
                      <td style={{ fontSize: '0.85rem' }}>{lot.mfgDate}</td>
                      <td style={{ fontSize: '0.85rem', fontWeight: 600 }}>{lot.expDate}</td>
                      <td>
                        <span style={{ 
                          padding: '3px 10px', 
                          background: 'var(--success-bg)', 
                          color: 'var(--success)', 
                          border: '1px solid var(--success-border)',
                          borderRadius: 'var(--radius-full)', 
                          fontSize: '0.75rem',
                          fontWeight: 600
                        }}>
                          ATIVO NA BANCADA
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ABA 2: PRODUTOS */}
      {activeTab === 'products' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {tenantProducts.map(prod => (
            <div key={prod.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <img src={prod.image} alt={prod.name} style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', border: '1px solid var(--border-subtle)' }} />
                <div>
                  <h4 style={{ fontSize: '0.98rem', lineHeight: '1.25' }}>{prod.name}</h4>
                  <div style={{ fontSize: '0.78rem', color: 'var(--brand-primary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{prod.sku}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{prod.category} &bull; {prod.volume}</div>
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                {prod.description}
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid var(--border-subtle)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                <div><strong>Processo ANVISA:</strong> {prod.anvisaProcess}</div>
                <div><strong>EAN-13:</strong> {prod.barcodeEan}</div>
              </div>

              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>
                <strong>INCI:</strong> {prod.inciIngredients.substring(0, 80)}...
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ABA 3: MODELOS DE KITS */}
      {activeTab === 'kits' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
          {tenantKits.map(kit => (
            <div key={kit.id} className="glass-card">
              <img src={kit.heroImage} alt={kit.name} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '14px', border: '1px solid var(--border-subtle)' }} />
              <div style={{ fontSize: '0.78rem', color: 'var(--brand-primary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{kit.code}</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>{kit.name}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>{kit.description}</p>

              <div style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Composição do Kit ({kit.items.length} itens):
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem' }}>
                {kit.items.map((item, idx) => {
                  const prod = products.find(p => p.id === item.productId);
                  return (
                    <li key={idx} style={{ background: '#f8fafc', border: '1px solid var(--border-subtle)', padding: '5px 10px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{prod?.name}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{prod?.volume}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* MODAL CADASTRAR NOVO LOTE */}
      {showNewLotModal && (
        <div className="modal-backdrop" onClick={() => setShowNewLotModal(false)}>
          <div className="modal-container" style={{ maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Cadastrar Novo Lote de Fabricação</h3>
              <button className="modal-close-btn" onClick={() => setShowNewLotModal(false)}>&times;</button>
            </div>

            <form onSubmit={handleCreateLot} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                  Cosmético:
                </label>
                <select 
                  value={newLotProduct} 
                  onChange={(e) => setNewLotProduct(e.target.value)}
                  style={{ width: '100%' }}
                >
                  {tenantProducts.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.sku})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                  Código do Lote (gravado no frasco):
                </label>
                <input 
                  type="text" 
                  placeholder="Ex: LT-2026-NOV01"
                  value={newLotNumber}
                  onChange={(e) => setNewLotNumber(e.target.value)}
                  required
                  style={{ width: '100%', fontFamily: 'var(--font-mono)' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                    Data Fabricação:
                  </label>
                  <input 
                    type="date" 
                    value={newLotMfg} 
                    onChange={(e) => setNewLotMfg(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>
                    Data de Validade:
                  </label>
                  <input 
                    type="date" 
                    value={newLotExp} 
                    onChange={(e) => setNewLotExp(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button type="button" className="btn-secondary" onClick={() => setShowNewLotModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Salvar Lote na Nuvem
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
