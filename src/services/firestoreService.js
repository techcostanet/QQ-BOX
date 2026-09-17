// Camada de Serviços do Cloud Firestore para Multi-Tenant & Caixas Serializadas
import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  addDoc,
  query,
  where,
  onSnapshot,
  increment,
  serverTimestamp
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import {
  INITIAL_TENANTS,
  INITIAL_PRODUCTS,
  INITIAL_LOTS,
  INITIAL_KIT_TEMPLATES,
  INITIAL_BOXES
} from '../data/mockDatabase';

/**
 * Verifica se o Firestore está configurado e acessível.
 */
export const isFirestoreReady = () => {
  return isFirebaseConfigured() && db !== null;
};

/**
 * Povoa o banco do Cloud Firestore com dados iniciais se estiver vazio.
 */
export const seedInitialDataIfEmpty = async () => {
  if (!isFirestoreReady()) return false;

  try {
    const tenantsRef = collection(db, 'tenants');
    const snapshot = await getDocs(tenantsRef);

    if (!snapshot.empty) {
      console.log('ℹ️ Firestore já contém tenants cadastrados. Não é necessário seed.');
      return false;
    }

    console.log('🌱 Inicializando dados de demonstração no Cloud Firestore...');

    // 1. Grava Tenants
    for (const tenant of INITIAL_TENANTS) {
      await setDoc(doc(db, 'tenants', tenant.id), tenant);
    }

    // 2. Grava Produtos
    for (const product of INITIAL_PRODUCTS) {
      await setDoc(doc(db, `tenants/${product.tenantId}/products`, product.id), product);
    }

    // 3. Grava Lotes
    for (const lot of INITIAL_LOTS) {
      await setDoc(doc(db, `tenants/${lot.tenantId}/lots`, lot.id), lot);
    }

    // 4. Grava Kit Templates
    for (const kit of INITIAL_KIT_TEMPLATES) {
      await setDoc(doc(db, `tenants/${kit.tenantId}/kitTemplates`, kit.id), kit);
    }

    // 5. Grava Caixas na coleção raiz 'boxes' (chave pelo serial único para busca pública rápida)
    for (const box of INITIAL_BOXES) {
      await setDoc(doc(db, 'boxes', box.serialNumber), box);
    }

    console.log('✅ Seed do Cloud Firestore concluído com sucesso!');
    return true;
  } catch (error) {
    console.error('❌ Erro durante o seed do Firestore:', error);
    return false;
  }
};

/**
 * Assina atualizações em tempo real dos Tenants
 */
export const subscribeTenants = (callback) => {
  if (!isFirestoreReady()) {
    callback(INITIAL_TENANTS);
    return () => {};
  }

  const q = collection(db, 'tenants');
  return onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) {
        callback(INITIAL_TENANTS);
      } else {
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        callback(list);
      }
    },
    (err) => {
      console.warn('Erro ao escutar tenants no Firestore:', err);
      callback(INITIAL_TENANTS);
    }
  );
};

/**
 * Assina produtos do Tenant em tempo real
 */
export const subscribeProducts = (tenantId, callback) => {
  if (!isFirestoreReady()) {
    callback(INITIAL_PRODUCTS.filter(p => p.tenantId === tenantId));
    return () => {};
  }

  const q = collection(db, `tenants/${tenantId}/products`);
  return onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) {
        callback(INITIAL_PRODUCTS.filter(p => p.tenantId === tenantId));
      } else {
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        callback(list);
      }
    },
    (err) => {
      console.warn('Erro ao escutar produtos no Firestore:', err);
      callback(INITIAL_PRODUCTS.filter(p => p.tenantId === tenantId));
    }
  );
};

/**
 * Assina lotes do Tenant em tempo real
 */
export const subscribeLots = (tenantId, callback) => {
  if (!isFirestoreReady()) {
    callback(INITIAL_LOTS.filter(l => l.tenantId === tenantId));
    return () => {};
  }

  const q = collection(db, `tenants/${tenantId}/lots`);
  return onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) {
        callback(INITIAL_LOTS.filter(l => l.tenantId === tenantId));
      } else {
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        callback(list);
      }
    },
    (err) => {
      console.warn('Erro ao escutar lotes no Firestore:', err);
      callback(INITIAL_LOTS.filter(l => l.tenantId === tenantId));
    }
  );
};

/**
 * Assina modelos de kits (Kit Templates) do Tenant em tempo real
 */
export const subscribeKitTemplates = (tenantId, callback) => {
  if (!isFirestoreReady()) {
    callback(INITIAL_KIT_TEMPLATES.filter(k => k.tenantId === tenantId));
    return () => {};
  }

  const q = collection(db, `tenants/${tenantId}/kitTemplates`);
  return onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) {
        callback(INITIAL_KIT_TEMPLATES.filter(k => k.tenantId === tenantId));
      } else {
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        callback(list);
      }
    },
    (err) => {
      console.warn('Erro ao escutar kit templates no Firestore:', err);
      callback(INITIAL_KIT_TEMPLATES.filter(k => k.tenantId === tenantId));
    }
  );
};

/**
 * Assina as Caixas Serializadas do Tenant em tempo real
 */
export const subscribeBoxes = (tenantId, callback) => {
  if (!isFirestoreReady()) {
    callback(INITIAL_BOXES.filter(b => b.tenantId === tenantId));
    return () => {};
  }

  // Consulta caixas pertencentes ao tenant
  const q = query(collection(db, 'boxes'), where('tenantId', '==', tenantId));
  return onSnapshot(
    q,
    (snapshot) => {
      const initialTenantBoxes = INITIAL_BOXES.filter(b => b.tenantId === tenantId);
      if (snapshot.empty) {
        callback(initialTenantBoxes);
      } else {
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        // Mescla garantindo que todas as caixas de demonstração e as caixas criadas existam
        const map = new Map();
        initialTenantBoxes.forEach(b => map.set(b.serialNumber, b));
        list.forEach(b => map.set(b.serialNumber, b));
        const merged = Array.from(map.values());
        merged.sort((a, b) => new Date(b.assembledAt || 0) - new Date(a.assembledAt || 0));
        callback(merged);
      }
    },
    (err) => {
      console.warn('Erro ao escutar caixas no Firestore:', err);
      callback(INITIAL_BOXES.filter(b => b.tenantId === tenantId));
    }
  );
};

/**
 * Salva uma nova caixa física serializada no Cloud Firestore
 */
export const saveBoxToFirestore = async (newBox) => {
  if (!isFirestoreReady()) {
    return newBox;
  }

  try {
    const boxRef = doc(db, 'boxes', newBox.serialNumber);
    const boxPayload = {
      ...newBox,
      createdAt: serverTimestamp()
    };
    await setDoc(boxRef, boxPayload);
    console.log(`📦 Caixa serializada salva no Cloud Firestore: /boxes/${newBox.serialNumber}`);
    return newBox;
  } catch (error) {
    console.error('Erro ao salvar caixa no Firestore:', error);
    throw error;
  }
};

/**
 * Cadastra um novo lote de produto no Cloud Firestore
 */
export const saveLotToFirestore = async (tenantId, newLot) => {
  if (!isFirestoreReady()) {
    return newLot;
  }

  try {
    const lotRef = doc(db, `tenants/${tenantId}/lots`, newLot.id);
    await setDoc(lotRef, newLot);
    console.log(`🏷️ Novo lote registrado no Firestore: ${newLot.lotNumber}`);
    return newLot;
  } catch (error) {
    console.error('Erro ao cadastrar lote no Firestore:', error);
    throw error;
  }
};

/**
 * Cadastra um novo produto cosmético no Cloud Firestore
 */
export const saveProductToFirestore = async (tenantId, newProduct) => {
  if (!isFirestoreReady()) {
    return newProduct;
  }

  try {
    const prodRef = doc(db, `tenants/${tenantId}/products`, newProduct.id);
    await setDoc(prodRef, newProduct);
    console.log(`💄 Produto registrado no Firestore: ${newProduct.name}`);
    return newProduct;
  } catch (error) {
    console.error('Erro ao cadastrar produto no Firestore:', error);
    throw error;
  }
};

/**
 * Atualiza os parâmetros White-Label e Zebra do Tenant
 */
export const updateTenantInFirestore = async (tenant) => {
  if (!isFirestoreReady()) {
    return tenant;
  }

  try {
    const tenantRef = doc(db, 'tenants', tenant.id);
    await setDoc(tenantRef, tenant, { merge: true });
    console.log(`🏢 Configurações do Tenant atualizadas no Firestore: ${tenant.name}`);
    return tenant;
  } catch (error) {
    console.error('Erro ao atualizar tenant no Firestore:', error);
    throw error;
  }
};

/**
 * Consulta pública de uma Caixa por Serial (Usada pelo Consumidor no QR Code)
 */
export const getBoxBySerialFromFirestore = async (serialNumber) => {
  if (!isFirestoreReady()) {
    return INITIAL_BOXES.find(b => b.serialNumber === serialNumber) || null;
  }

  try {
    const docRef = doc(db, 'boxes', serialNumber);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return { id: snap.id, ...snap.data() };
    }
    return null;
  } catch (error) {
    console.error(`Erro ao buscar serial ${serialNumber} no Firestore:`, error);
    return null;
  }
};

/**
 * Registra a telemetria do escaneamento do QR Code no Cloud Firestore
 */
export const recordScanInFirestore = async (serialNumber, scanMeta = {}) => {
  if (!isFirestoreReady()) return;

  try {
    const boxRef = doc(db, 'boxes', serialNumber);
    
    // Atualiza contador na caixa
    await updateDoc(boxRef, {
      scanCount: increment(1),
      lastScannedAt: new Date().toISOString()
    });

    // Registra evento detalhado na subcoleção de telemetria
    const scanCollectionRef = collection(db, `boxes/${serialNumber}/scans`);
    await addDoc(scanCollectionRef, {
      scannedAt: serverTimestamp(),
      userAgent: navigator.userAgent || 'Unknown',
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Smartphone' : 'Desktop',
      ...scanMeta
    });

    console.log(`📱 Leitura registrada com sucesso no Firestore para a caixa ${serialNumber}`);
  } catch (error) {
    console.warn('Erro ao registrar scan de telemetria no Firestore:', error);
  }
};
