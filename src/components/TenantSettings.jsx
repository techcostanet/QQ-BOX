import React, { useState } from 'react';
import { 
  Settings, 
  Printer, 
  Globe, 
  Palette, 
  Shield, 
  Save, 
  Check, 
  Cloud, 
  ExternalLink,
  Cpu,
  Flame,
  Database,
  RefreshCw
} from 'lucide-react';
import { isFirestoreReady, seedInitialDataIfEmpty } from '../services/firestoreService';
import { firebaseConfig } from '../services/firebase';

export default function TenantSettings({ tenant, onUpdateTenant }) {
  const [formData, setFormData] = useState({
    name: tenant.name,
    tagline: tenant.tagline,
    logoText: tenant.logoText,
    primaryColor: tenant.primaryColor,
    secondaryColor: tenant.secondaryColor,
    customDomain: tenant.customDomain,
    anvisaLicense: tenant.anvisaLicense,
    supportWhatsapp: tenant.supportWhatsapp,
    printerModel: tenant.printerSettings.model,
    labelWidthMm: tenant.printerSettings.labelWidthMm,
    labelHeightMm: tenant.printerSettings.labelHeightMm,
    dpi: tenant.printerSettings.dpi,
    connectionType: tenant.printerSettings.connectionType
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState(null);

  const handleSeedFirestore = async () => {
    setSeeding(true);
    setSeedResult(null);
    try {
      const seeded = await seedInitialDataIfEmpty();
      if (seeded) {
        setSeedResult({ type: 'success', text: 'Dados de demonstração populados no Cloud Firestore com sucesso!' });
      } else {
        setSeedResult({ type: 'info', text: 'Cloud Firestore já contém dados cadastrados ou credenciais .env ainda não ativadas.' });
      }
    } catch (err) {
      setSeedResult({ type: 'error', text: 'Erro ao conectar ao Firestore: ' + err.message });
    } finally {
      setSeeding(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...tenant,
      name: formData.name,
      tagline: formData.tagline,
      logoText: formData.logoText,
      primaryColor: formData.primaryColor,
      secondaryColor: formData.secondaryColor,
      customDomain: formData.customDomain,
      anvisaLicense: formData.anvisaLicense,
      supportWhatsapp: formData.supportWhatsapp,
      printerSettings: {
        model: formData.printerModel,
        labelWidthMm: Number(formData.labelWidthMm),
        labelHeightMm: Number(formData.labelHeightMm),
        dpi: Number(formData.dpi),
        connectionType: formData.connectionType
      }
    };

    onUpdateTenant(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div>
      <div className="section-header">
        <div className="section-header-left">
          <h1>Configurações do Tenant (White-Label & Zebra)</h1>
          <p>Personalize a identidade visual da sua marca, domínio personalizado do QR Code e parâmetros da impressora térmica Zebra.</p>
        </div>

        {savedSuccess && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', background: 'var(--success-bg)', padding: '8px 16px', borderRadius: 'var(--radius-md)' }}>
            <Check size={18} />
            <span>Configurações salvas na nuvem com sucesso!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        {/* Bloco 1: Identidade Visual & White-Label */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '10px' }}>
            <Palette size={20} style={{ color: 'var(--brand-primary)' }} />
            <h3 style={{ fontSize: '1.15rem' }}>Identidade Visual da Marca (Tenant)</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Nome da Marca:</label>
              <input 
                type="text" 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Texto do Logotipo (Header):</label>
              <input 
                type="text" 
                value={formData.logoText} 
                onChange={(e) => setFormData({ ...formData, logoText: e.target.value })}
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Slogan / Tagline:</label>
              <input 
                type="text" 
                value={formData.tagline} 
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Cor Primária (Ouro/Azul):</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input 
                    type="color" 
                    value={formData.primaryColor} 
                    onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                    style={{ width: '45px', height: '40px', padding: '2px', cursor: 'pointer' }}
                  />
                  <input 
                    type="text" 
                    value={formData.primaryColor} 
                    onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                    style={{ flex: 1, fontFamily: 'var(--font-mono)' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Cor Secundária:</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input 
                    type="color" 
                    value={formData.secondaryColor} 
                    onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                    style={{ width: '45px', height: '40px', padding: '2px', cursor: 'pointer' }}
                  />
                  <input 
                    type="text" 
                    value={formData.secondaryColor} 
                    onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                    style={{ flex: 1, fontFamily: 'var(--font-mono)' }}
                  />
                </div>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Domínio Próprio para o QR Code (CNAME):</label>
              <input 
                type="text" 
                value={formData.customDomain} 
                onChange={(e) => setFormData({ ...formData, customDomain: e.target.value })}
                placeholder="ex: qr.minhamarca.com.br"
                style={{ width: '100%', fontFamily: 'var(--font-mono)' }}
              />
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>O QR Code da caixa externa apontará para este endereço.</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Licença ANVISA:</label>
                <input 
                  type="text" 
                  value={formData.anvisaLicense} 
                  onChange={(e) => setFormData({ ...formData, anvisaLicense: e.target.value })}
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>WhatsApp SAC:</label>
                <input 
                  type="text" 
                  value={formData.supportWhatsapp} 
                  onChange={(e) => setFormData({ ...formData, supportWhatsapp: e.target.value })}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 2: Configuração Térmica Zebra */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '10px' }}>
            <Printer size={20} style={{ color: 'var(--brand-primary)' }} />
            <h3 style={{ fontSize: '1.15rem' }}>Impressora Térmica Zebra (ZPL)</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Modelo da Impressora Zebra:</label>
              <select 
                value={formData.printerModel} 
                onChange={(e) => setFormData({ ...formData, printerModel: e.target.value })}
                style={{ width: '100%' }}
              >
                <option value="Zebra ZD220 / ZD420 (Desktop)">Zebra ZD220 / ZD420 (Desktop USB/Rede)</option>
                <option value="Zebra ZT411 (Industrial)">Zebra ZT411 (Industrial Linha Pesada)</option>
                <option value="Zebra ZD621 (Alta Velocidade)">Zebra ZD621 (Alta Velocidade)</option>
                <option value="Zebra GX420d / GX430t">Zebra GX420d / GX430t</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Largura Etiqueta (mm):</label>
                <input 
                  type="number" 
                  value={formData.labelWidthMm} 
                  onChange={(e) => setFormData({ ...formData, labelWidthMm: e.target.value })}
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Altura Etiqueta (mm):</label>
                <input 
                  type="number" 
                  value={formData.labelHeightMm} 
                  onChange={(e) => setFormData({ ...formData, labelHeightMm: e.target.value })}
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Resolução Cabeça (DPI):</label>
                <select 
                  value={formData.dpi} 
                  onChange={(e) => setFormData({ ...formData, dpi: e.target.value })}
                  style={{ width: '100%' }}
                >
                  <option value="203">203 DPI (8 dots/mm - Padrão)</option>
                  <option value="300">300 DPI (12 dots/mm - Alta Definição)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px' }}>Tipo de Conexão:</label>
                <select 
                  value={formData.connectionType} 
                  onChange={(e) => setFormData({ ...formData, connectionType: e.target.value })}
                  style={{ width: '100%' }}
                >
                  <option value="USB / WebPrint">Navegador WebPrint (Sem driver local)</option>
                  <option value="Ethernet TCP/IP">Rede Ethernet / Wi-Fi Direto (Socket 9100)</option>
                  <option value="Zebra Browser Print">Zebra Browser Print API</option>
                </select>
              </div>
            </div>

            {/* Caixa Informativa sobre Arquitetura 100% Google Cloud & Firestore */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px', marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#fbbf24', fontSize: '0.88rem', fontWeight: 600 }}>
                  <Flame size={18} />
                  <span>Google Cloud & Cloud Firestore</span>
                </div>
                <span 
                  style={{
                    fontSize: '0.72rem',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    background: isFirestoreReady() ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                    color: isFirestoreReady() ? '#34d399' : '#fbbf24',
                    border: `1px solid ${isFirestoreReady() ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                    fontWeight: 600
                  }}
                >
                  {isFirestoreReady() ? 'Cloud Firestore Ativo' : 'Modo Demonstração / Local'}
                </span>
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '12px' }}>
                {isFirestoreReady()
                  ? `Conectado ao projeto Google Firebase: "${firebaseConfig.projectId}". Cada alteração de produtos, lotes e caixas é sincronizada em tempo real.`
                  : 'Para ativar seu banco em nuvem real, insira suas credenciais do Firebase Console no arquivo .env do projeto. O sistema sincronizará automaticamente.'}
              </p>

              {isFirestoreReady() && (
                <button
                  type="button"
                  onClick={handleSeedFirestore}
                  disabled={seeding}
                  className="btn-secondary"
                  style={{ width: '100%', fontSize: '0.8rem', padding: '8px 12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                >
                  <RefreshCw size={14} className={seeding ? 'animate-spin' : ''} />
                  <span>{seeding ? 'Populando Firestore...' : 'Povoar Firestore com Dados Iniciais (Seed)'}</span>
                </button>
              )}

              {seedResult && (
                <div style={{ marginTop: '10px', fontSize: '0.75rem', color: seedResult.type === 'success' ? 'var(--success)' : 'var(--warning)', background: 'rgba(0,0,0,0.2)', padding: '6px 10px', borderRadius: '4px' }}>
                  {seedResult.text}
                </div>
              )}
            </div>

            <div style={{ marginTop: '10px' }}>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                <Save size={16} />
                <span>Salvar Configurações do Tenant</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
