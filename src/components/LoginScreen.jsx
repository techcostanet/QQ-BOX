import React, { useState } from 'react';
import { 
  QrCode, 
  Lock, 
  User, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Database,
  ExternalLink
} from 'lucide-react';
import { APP_VERSION, BUILD_DATE_BR, GOOGLE_PROJECT_ID } from '../version';

export default function LoginScreen({ 
  onLogin, 
  tenants, 
  activeTenantId, 
  onSelectTenant 
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const currentTenant = tenants.find(t => t.id === activeTenantId) || tenants[0];

  // Contas de demonstração para teste rápido
  const demoUsers = [
    {
      name: 'Mariana Silva',
      role: 'Operadora de Bancada 01',
      badge: 'OP-4821',
      tenantId: 'tenant-leclat',
      avatar: 'MS',
      color: '#c27803'
    },
    {
      name: 'Carlos Mendes',
      role: 'Supervisor de Qualidade & Recall',
      badge: 'SQ-1109',
      tenantId: 'tenant-leclat',
      avatar: 'CM',
      color: '#0f766e'
    },
    {
      name: 'Dra. Vanessa Rios',
      role: 'Diretora Técnica & Rastreabilidade',
      badge: 'DT-0042',
      tenantId: 'tenant-dermasync',
      avatar: 'VR',
      color: '#2563eb'
    },
    {
      name: 'Camila Uchoa',
      role: 'Gestora de Bioativos & Origem',
      badge: 'BIO-7701',
      tenantId: 'tenant-aurabio',
      avatar: 'CU',
      color: '#059669'
    }
  ];

  const handleCustomLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Por favor, informe o usuário, e-mail ou código de crachá.');
      return;
    }

    setLoading(true);
    setError('');

    setTimeout(() => {
      onLogin({
        name: username,
        role: 'Operador Credenciado',
        badge: 'OP-LOCAL',
        tenantId: activeTenantId,
        avatar: username.substring(0, 2).toUpperCase()
      });
      setLoading(false);
    }, 300);
  };

  const handleQuickLogin = (user) => {
    setLoading(true);
    onSelectTenant(user.tenantId);
    setTimeout(() => {
      onLogin(user);
      setLoading(false);
    }, 250);
  };

  return (
    <div className="login-page">
      {/* Background Decorativo Suave */}
      <div className="login-ambient-orb orb-1" />
      <div className="login-ambient-orb orb-2" />

      <div className="login-container">
        {/* Top Header Card */}
        <div className="login-header-card">
          <div className="login-brand-badge">
            <div 
              className="login-logo-icon"
              style={{ background: `linear-gradient(135deg, ${currentTenant?.primaryColor || '#9b782b'}, ${currentTenant?.secondaryColor || '#1e3a2f'})` }}
            >
              <QrCode size={26} color="#ffffff" />
            </div>
            <div>
              <h1 className="login-app-title">QQ-BOX</h1>
              <p className="login-app-subtitle">CosmetiqCloud • Rastreabilidade & Serialização</p>
            </div>
          </div>

          {/* BADGE DE VERSÃO OBRIGATÓRIO NA TELA DE LOGIN */}
          <div className="login-version-pill" title={`Compilação: ${BUILD_DATE_BR}`}>
            <span className="version-status-dot" />
            <span className="version-text">Versão <strong>v{APP_VERSION}</strong></span>
            <span className="version-env-tag">Google Cloud</span>
          </div>
        </div>

        {/* Formulário Principal */}
        <div className="login-card">
          <div className="login-card-header">
            <h2>Acesso ao Sistema</h2>
            <p>Entre com suas credenciais ou selecione um perfil de teste</p>
          </div>

          {error && (
            <div className="login-error-alert">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleCustomLogin} className="login-form">
            <div className="form-group">
              <label>Marca / Tenant Ativo</label>
              <div className="input-with-icon">
                <Layers size={18} className="input-icon" />
                <select 
                  value={activeTenantId} 
                  onChange={(e) => onSelectTenant(e.target.value)}
                  className="login-select"
                >
                  {tenants.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.slug})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Usuário / Código de Crachá</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="Ex: mariana.silva ou OP-4821" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  className="login-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Senha / PIN da Bancada</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-login-submit"
              disabled={loading}
              style={{ background: currentTenant?.primaryColor || '#9b782b' }}
            >
              <span>{loading ? 'Autenticando...' : 'Acessar Bancada de Montagem'}</span>
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divisor */}
          <div className="login-divider">
            <span>OU ACESSO RÁPIDO PARA TESTE</span>
          </div>

          {/* Perfis de Teste Instantâneo */}
          <div className="demo-users-grid">
            {demoUsers.map((user, idx) => (
              <button
                key={idx}
                type="button"
                className="demo-user-card"
                onClick={() => handleQuickLogin(user)}
                disabled={loading}
              >
                <div 
                  className="demo-avatar"
                  style={{ background: user.color }}
                >
                  {user.avatar}
                </div>
                <div className="demo-user-info">
                  <div className="demo-user-name">{user.name}</div>
                  <div className="demo-user-role">{user.role}</div>
                  <div className="demo-user-badge">{user.badge}</div>
                </div>
                <ArrowRight size={14} className="demo-arrow" />
              </button>
            ))}
          </div>

          {/* Rodapé do Card */}
          <div className="login-footer-info">
            <div className="security-tag">
              <ShieldCheck size={15} color="#059669" />
              <span>Autenticação Integrada Cloud Firestore</span>
            </div>
            <div className="project-tag">
              <Database size={13} color="#64748b" />
              <span>Projeto GCP: <code>{GOOGLE_PROJECT_ID}</code></span>
            </div>
          </div>
        </div>

        {/* Rodapé inferior com versão e links */}
        <div className="login-page-footer">
          <span>QQ-BOX v{APP_VERSION} • Compilado em {BUILD_DATE_BR}</span>
          <span className="dot-sep">•</span>
          <a 
            href="https://github.com/techcostanet/QQ-BOX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-repo-link"
          >
            GitHub techcostanet/QQ-BOX
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
