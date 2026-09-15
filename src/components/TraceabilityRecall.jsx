import React, { useState } from 'react';
import { 
  Search, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  Printer, 
  QrCode, 
  Layers, 
  Calendar, 
  ArrowRight,
  Filter,
  BarChart3
} from 'lucide-react';

export default function TraceabilityRecall({
  boxes,
  kitTemplates,
  products,
  lots,
  tenant,
  onReopenLabel,
  onOpenConsumerView
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all' | 'lot' | 'serial'

  const tenantBoxes = boxes.filter(b => b.tenantId === tenant.id);

  // Filtra as caixas por serial ou por lote de produto interno
  const filteredBoxes = tenantBoxes.filter(box => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return true;

    // Busca por Serial da Caixa
    if (box.serialNumber.toLowerCase().includes(term)) return true;

    // Busca por Lote de algum produto contido nesta caixa
    const hasLot = box.items.some(item => {
      const lot = lots.find(l => l.id === item.lotId);
      return lot && lot.lotNumber.toLowerCase().includes(term);
    });

    return hasLot;
  });

  // Estatísticas rápidas de rastreabilidade
  const totalScans = tenantBoxes.reduce((acc, b) => acc + (b.scanCount || 0), 0);
  const totalBoxes = tenantBoxes.length;

  return (
    <div>
      {/* Cabeçalho */}
      <div className="section-header">
        <div className="section-header-left">
          <h1>Rastreabilidade Reversa & Controle de Qualidade (Recall)</h1>
          <p>Localize instantaneamente qualquer caixa serializada pesquisando pelo número de série ou pelo lote de qualquer produto interno.</p>
        </div>
      </div>

      {/* Cartões de Indicadores Rápidos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div className="glass-card" style={{ padding: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Caixas Serializadas</span>
            <Layers size={18} style={{ color: 'var(--brand-primary)' }} />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{totalBoxes}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)' }}>100% gravadas na nuvem</div>
        </div>

        <div className="glass-card" style={{ padding: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Leituras de QR Code</span>
            <QrCode size={18} style={{ color: 'var(--info)' }} />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{totalScans}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Scans realizados por clientes</div>
        </div>

        <div className="glass-card" style={{ padding: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Auditoria Sanitária</span>
            <ShieldAlert size={18} style={{ color: 'var(--warning)' }} />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>Conforme</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Rastreabilidade lote a lote ativa</div>
        </div>
      </div>

      {/* Barra de Busca Reversa */}
      <div className="glass-card" style={{ marginBottom: '24px', padding: '18px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
            <Search 
              size={18} 
              style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
            />
            <input 
              type="text"
              placeholder="Digite o Lote do Produto (ex: LT-2026-ESP02) ou o Serial da Caixa (ex: KT-LEC-98214)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', paddingLeft: '42px', fontSize: '0.92rem' }}
            />
          </div>

          {searchTerm && (
            <button className="btn-secondary btn-sm" onClick={() => setSearchTerm('')}>
              Limpar Busca
            </button>
          )}

          {/* Botões de atalho rápido de busca para testes */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', alignSelf: 'center' }}>Testar Lote:</span>
            <button className="btn-secondary btn-sm" onClick={() => setSearchTerm('LT-2026-ESP01')}>
              Lote ESP01
            </button>
            <button className="btn-secondary btn-sm" onClick={() => setSearchTerm('LT-2026-LIMP01')}>
              Lote LIMP01
            </button>
            <button className="btn-secondary btn-sm" onClick={() => setSearchTerm('LT-2026-VITC01')}>
              Lote VITC01
            </button>
          </div>
        </div>

        {searchTerm && (
          <div style={{ marginTop: '12px', fontSize: '0.82rem', color: 'var(--brand-primary)', fontWeight: 600 }}>
            Exibindo {filteredBoxes.length} caixa(s) encontrada(s) para o termo "{searchTerm}".
          </div>
        )}
      </div>

      {/* Tabela de Caixas Serializadas */}
      <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Serial da Caixa</th>
                <th>Modelo do Kit</th>
                <th>Composição (Produtos & Lotes Vinculados)</th>
                <th>Data Montagem</th>
                <th>Operador</th>
                <th>Scans</th>
                <th style={{ textAlign: 'right' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredBoxes.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                    Nenhuma caixa encontrada com os filtros informados.
                  </td>
                </tr>
              ) : (
                filteredBoxes.map(box => {
                  const kit = kitTemplates.find(k => k.id === box.kitTemplateId);
                  const formattedDate = new Date(box.assembledAt).toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  });

                  return (
                    <tr key={box.id}>
                      {/* Serial */}
                      <td>
                        <span className="serial-cell">{box.serialNumber}</span>
                      </td>

                      {/* Kit */}
                      <td>
                        <strong>{kit?.name}</strong>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          REF: {kit?.code}
                        </div>
                      </td>

                      {/* Lotes individuais contidos nesta caixa */}
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {box.items.map((item, i) => {
                            const product = products.find(p => p.id === item.productId);
                            const lot = lots.find(l => l.id === item.lotId);
                            const isSearchedLot = searchTerm && lot?.lotNumber.toLowerCase().includes(searchTerm.toLowerCase());

                            return (
                              <div 
                                key={i} 
                                style={{ 
                                  fontSize: '0.75rem', 
                                  background: isSearchedLot ? 'var(--danger-bg)' : '#f8fafc',
                                  border: isSearchedLot ? '1px solid var(--danger-border)' : '1px solid var(--border-subtle)',
                                  color: isSearchedLot ? 'var(--danger)' : 'var(--text-secondary)',
                                  padding: '3px 8px',
                                  borderRadius: '4px',
                                  display: 'inline-flex',
                                  justifyContent: 'space-between',
                                  gap: '8px'
                                }}
                              >
                                <span>{product?.name.substring(0, 20)}:</span>
                                <strong style={{ color: isSearchedLot ? '#fca5a5' : 'var(--brand-accent)' }}>
                                  {lot?.lotNumber || 'N/A'}
                                </strong>
                              </div>
                            );
                          })}
                        </div>
                      </td>

                      {/* Data */}
                      <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {formattedDate}
                      </td>

                      {/* Operador */}
                      <td style={{ fontSize: '0.8rem' }}>
                        {box.operatorName}
                      </td>

                      {/* Scans */}
                      <td>
                        <span style={{ 
                          padding: '3px 8px', 
                          background: 'rgba(59, 130, 246, 0.1)', 
                          color: '#60a5fa', 
                          borderRadius: 'var(--radius-full)', 
                          fontSize: '0.78rem',
                          fontWeight: 600
                        }}>
                          {box.scanCount || 0} scans
                        </span>
                      </td>

                      {/* Ações */}
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '8px' }}>
                          <button 
                            className="btn-secondary btn-sm" 
                            title="Ver Etiqueta Zebra e Código ZPL"
                            onClick={() => onReopenLabel(box, kit)}
                          >
                            <Printer size={14} />
                            <span>Zebra</span>
                          </button>

                          <button 
                            className="btn-secondary btn-sm" 
                            title="Simular leitura do cliente"
                            onClick={() => onOpenConsumerView(box.serialNumber)}
                          >
                            <QrCode size={14} />
                            <span>Ver Scan</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
