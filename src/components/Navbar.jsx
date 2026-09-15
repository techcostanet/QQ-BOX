import React from 'react';
import { 
  Sparkles, 
  Layers, 
  QrCode, 
  Search, 
  Package, 
  Settings, 
  CloudCheck, 
  Printer 
} from 'lucide-react';

export default function Navbar({ 
  tenants, 
  activeTenantId, 
  onSelectTenant, 
  activeTab, 
  onSelectTab,
  totalBoxesCount 
}) {
  const currentTenant = tenants.find(t => t.id === activeTenantId) || tenants[0];

  return (
    <header className="navbar">
      <div className="brand-section">
        <div className="logo-badge">
          <div 
            className="logo-icon-wrap" 
            style={{ 
              background: `linear-gradient(135deg, ${currentTenant.primaryColor}, ${currentTenant.secondaryColor})` 
            }}
          >
            <QrCode size={20} />
          </div>
          <div className="logo-meta">
            <span className="logo-title">{currentTenant.logoText}</span>
            <span className="logo-tagline">CosmetiqCloud SaaS</span>
          </div>
        </div>

        {/* Tenant Switcher Pill */}
        <div className="tenant-switcher-box">
          <span className="tenant-label">Tenant:</span>
          <select 
            className="tenant-select" 
            value={activeTenantId} 
            onChange={(e) => onSelectTenant(e.target.value)}
          >
            {tenants.map(t => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.slug})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="nav-tabs">
        <button 
          className={`tab-btn ${activeTab === 'assembly' ? 'active' : ''}`}
          onClick={() => onSelectTab('assembly')}
        >
          <Package size={16} />
          <span>Bancada de Montagem</span>
        </button>

        <button 
          className={`tab-btn ${activeTab === 'traceability' ? 'active' : ''}`}
          onClick={() => onSelectTab('traceability')}
        >
          <Search size={16} />
          <span>Rastreabilidade & Recall</span>
        </button>

        <button 
          className={`tab-btn ${activeTab === 'consumer' ? 'active' : ''}`}
          onClick={() => onSelectTab('consumer')}
        >
          <QrCode size={16} />
          <span>Leitura do Consumidor</span>
        </button>

        <button 
          className={`tab-btn ${activeTab === 'catalog' ? 'active' : ''}`}
          onClick={() => onSelectTab('catalog')}
        >
          <Layers size={16} />
          <span>Produtos & Lotes</span>
        </button>

        <button 
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => onSelectTab('settings')}
        >
          <Settings size={16} />
          <span>White-Label & Zebra</span>
        </button>
      </nav>

      {/* Cloud & Printer Status Badges */}
      <div className="nav-actions">
        <div 
          className="cloud-badge" 
          title="Arquitetura 100% Google Cloud & Cloud Firestore com isolamento por Tenant"
          style={{ background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}
        >
          <span className="cloud-dot"></span>
          <span>Google Firestore</span>
        </div>

        <div 
          className="cloud-badge" 
          style={{ background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.25)', color: '#60a5fa' }}
          title={`Impressora Zebra: ${currentTenant.printerSettings.model} (${currentTenant.printerSettings.connectionType})`}
        >
          <Printer size={13} />
          <span>Zebra Pronta</span>
        </div>
      </div>
    </header>
  );
}
