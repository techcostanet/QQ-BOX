import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AssemblyStation from './components/AssemblyStation';
import ThermalLabelModal from './components/ThermalLabelModal';
import ConsumerMobileView from './components/ConsumerMobileView';
import TraceabilityRecall from './components/TraceabilityRecall';
import CatalogManager from './components/CatalogManager';
import TenantSettings from './components/TenantSettings';

import {
  INITIAL_TENANTS,
  INITIAL_PRODUCTS,
  INITIAL_LOTS,
  INITIAL_KIT_TEMPLATES,
  INITIAL_BOXES
} from './data/mockDatabase';

import {
  isFirestoreReady,
  subscribeTenants,
  subscribeProducts,
  subscribeLots,
  subscribeKitTemplates,
  subscribeBoxes,
  saveBoxToFirestore,
  saveLotToFirestore,
  updateTenantInFirestore,
  recordScanInFirestore
} from './services/firestoreService';

export default function App() {
  // Estado Global Multi-Tenant gerenciado pelo Cloud Firestore
  const [tenants, setTenants] = useState(INITIAL_TENANTS);
  const [activeTenantId, setActiveTenantId] = useState(INITIAL_TENANTS[0].id);

  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [lots, setLots] = useState(INITIAL_LOTS);
  const [kitTemplates, setKitTemplates] = useState(INITIAL_KIT_TEMPLATES);
  const [boxes, setBoxes] = useState(INITIAL_BOXES);

  // Navegação
  const [activeTab, setActiveTab] = useState('assembly'); // 'assembly' | 'traceability' | 'consumer' | 'catalog' | 'settings'

  // Caixa ativa para a visualização do consumidor e modal de etiqueta Zebra
  const [activeBoxSerial, setActiveBoxSerial] = useState(INITIAL_BOXES[0]?.serialNumber || '');
  const [thermalModalData, setThermalModalData] = useState(null); // { box, kitTemplate }

  const currentTenant = tenants.find(t => t.id === activeTenantId) || tenants[0];

  // 1. Escuta Tenants em tempo real do Cloud Firestore
  useEffect(() => {
    const unsub = subscribeTenants((data) => {
      if (data && data.length > 0) {
        setTenants(data);
      }
    });
    return () => unsub();
  }, []);

  // 2. Escuta Produtos, Lotes, Templates e Caixas do Tenant ativo no Cloud Firestore
  useEffect(() => {
    if (!activeTenantId) return;

    const unsubProd = subscribeProducts(activeTenantId, setProducts);
    const unsubLots = subscribeLots(activeTenantId, setLots);
    const unsubKits = subscribeKitTemplates(activeTenantId, setKitTemplates);
    const unsubBoxes = subscribeBoxes(activeTenantId, (loadedBoxes) => {
      if (loadedBoxes && loadedBoxes.length > 0) {
        setBoxes(loadedBoxes);
        if (!activeBoxSerial) {
          setActiveBoxSerial(loadedBoxes[0].serialNumber);
        }
      }
    });

    return () => {
      unsubProd();
      unsubLots();
      unsubKits();
      unsubBoxes();
    };
  }, [activeTenantId]);

  // Aplica as cores dinâmicas da marca (White-Label) às variáveis CSS
  useEffect(() => {
    if (currentTenant) {
      document.documentElement.style.setProperty('--brand-primary', currentTenant.primaryColor);
      document.documentElement.style.setProperty('--brand-secondary', currentTenant.secondaryColor);
      document.documentElement.style.setProperty('--brand-accent', currentTenant.accentColor || currentTenant.primaryColor);
    }
  }, [currentTenant]);

  // Handler: Caixa montada e finalizada na bancada
  const handleBoxAssembled = async (newBox, kitTemplate) => {
    setBoxes(prev => [newBox, ...prev]);
    setActiveBoxSerial(newBox.serialNumber);
    // Abre automaticamente a etiqueta Zebra pronta para impressão
    setThermalModalData({ box: newBox, kitTemplate });

    // Persiste no Cloud Firestore (se configurado)
    try {
      await saveBoxToFirestore(newBox);
    } catch (err) {
      console.warn('Persistindo em modo local/offline:', err);
    }
  };

  // Handler: Reabrir etiqueta térmica a partir do histórico
  const handleReopenLabel = (box, kitTemplate) => {
    setThermalModalData({ box, kitTemplate });
  };

  // Handler: Abrir visualização do consumidor
  const handleOpenConsumerView = (serialNumber) => {
    setActiveBoxSerial(serialNumber);
    setActiveTab('consumer');

    // Registra telemetria de leitura no Cloud Firestore
    recordScanInFirestore(serialNumber);

    // Incrementa contador de scan localmente
    setBoxes(prev => prev.map(b => {
      if (b.serialNumber === serialNumber) {
        return {
          ...b,
          scanCount: (b.scanCount || 0) + 1,
          lastScannedAt: new Date().toISOString()
        };
      }
      return b;
    }));
  };

  // Handler: Cadastrar novo lote
  const handleAddLot = async (newLot) => {
    setLots(prev => [newLot, ...prev]);

    // Persiste no Cloud Firestore (se configurado)
    try {
      await saveLotToFirestore(activeTenantId, newLot);
    } catch (err) {
      console.warn('Lote gravado localmente:', err);
    }
  };

  // Handler: Atualizar configurações do tenant
  const handleUpdateTenant = async (updatedTenant) => {
    setTenants(prev => prev.map(t => t.id === updatedTenant.id ? updatedTenant : t));

    // Persiste no Cloud Firestore (se configurado)
    try {
      await updateTenantInFirestore(updatedTenant);
    } catch (err) {
      console.warn('Tenant atualizado localmente:', err);
    }
  };

  return (
    <div className="app-layout">
      {/* Barra de Navegação Superior */}
      <Navbar
        tenants={tenants}
        activeTenantId={activeTenantId}
        onSelectTenant={setActiveTenantId}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        totalBoxesCount={boxes.filter(b => b.tenantId === activeTenantId).length}
      />

      {/* Conteúdo Principal */}
      <main className="main-content">
        {activeTab === 'assembly' && (
          <AssemblyStation
            tenant={currentTenant}
            kitTemplates={kitTemplates}
            products={products}
            lots={lots}
            onBoxAssembled={handleBoxAssembled}
          />
        )}

        {activeTab === 'traceability' && (
          <TraceabilityRecall
            boxes={boxes}
            kitTemplates={kitTemplates}
            products={products}
            lots={lots}
            tenant={currentTenant}
            onReopenLabel={handleReopenLabel}
            onOpenConsumerView={handleOpenConsumerView}
          />
        )}

        {activeTab === 'consumer' && (
          <ConsumerMobileView
            boxes={boxes.filter(b => b.tenantId === activeTenantId)}
            activeBoxSerial={activeBoxSerial}
            kitTemplates={kitTemplates}
            products={products}
            lots={lots}
            tenants={tenants}
            onSelectBoxSerial={setActiveBoxSerial}
          />
        )}

        {activeTab === 'catalog' && (
          <CatalogManager
            tenant={currentTenant}
            products={products}
            lots={lots}
            kitTemplates={kitTemplates}
            onAddLot={handleAddLot}
          />
        )}

        {activeTab === 'settings' && (
          <TenantSettings
            tenant={currentTenant}
            onUpdateTenant={handleUpdateTenant}
          />
        )}
      </main>

      {/* Modal de Impressão da Etiqueta Térmica Zebra (ZPL e Visual) */}
      {thermalModalData && (
        <ThermalLabelModal
          box={thermalModalData.box}
          kitTemplate={thermalModalData.kitTemplate}
          tenant={currentTenant}
          products={products}
          lots={lots}
          onClose={() => setThermalModalData(null)}
          onOpenConsumerView={handleOpenConsumerView}
        />
      )}
    </div>
  );
}
