// Script para povoar o Cloud Firestore do projeto qq-box-tc diretamente
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { 
  INITIAL_TENANTS, 
  INITIAL_PRODUCTS, 
  INITIAL_LOTS, 
  INITIAL_KIT_TEMPLATES, 
  INITIAL_BOXES 
} from '../src/data/mockDatabase.js';

const firebaseConfig = {
  apiKey: "AIzaSyBzMCFgQx-CGrowqtRyXgzljEzU5XBH_cE",
  authDomain: "qq-box-tc.firebaseapp.com",
  projectId: "qq-box-tc",
  storageBucket: "qq-box-tc.firebasestorage.app",
  messagingSenderId: "584365568642",
  appId: "1:584365568642:web:0e2b95afebdbf27769ba9b"
};

console.log("🔥 Conectando ao Firebase qq-box-tc...");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function runSeed() {
  console.log("📦 Gravando Tenants...");
  for (const tenant of INITIAL_TENANTS) {
    await setDoc(doc(db, 'tenants', tenant.id), tenant);
    console.log(`  ✓ Tenant: ${tenant.name}`);
  }

  console.log(`💄 Gravando ${INITIAL_PRODUCTS.length} Produtos Cosméticos...`);
  for (const prod of INITIAL_PRODUCTS) {
    await setDoc(doc(db, `tenants/${prod.tenantId}/products`, prod.id), prod);
  }
  console.log(`  ✓ ${INITIAL_PRODUCTS.length} cosméticos gravados no Firestore!`);

  console.log(`🏷️ Gravando ${INITIAL_LOTS.length} Lotes de Insumos...`);
  for (const lot of INITIAL_LOTS) {
    await setDoc(doc(db, `tenants/${lot.tenantId}/lots`, lot.id), lot);
  }
  console.log(`  ✓ ${INITIAL_LOTS.length} lotes gravados no Firestore!`);

  console.log(`🎁 Gravando ${INITIAL_KIT_TEMPLATES.length} Modelos de Kits...`);
  for (const kit of INITIAL_KIT_TEMPLATES) {
    await setDoc(doc(db, `tenants/${kit.tenantId}/kitTemplates`, kit.id), kit);
  }
  console.log(`  ✓ ${INITIAL_KIT_TEMPLATES.length} modelos de kits gravados no Firestore!`);

  console.log(`📦 Gravando ${INITIAL_BOXES.length} Caixas Serializadas Iniciais...`);
  for (const box of INITIAL_BOXES) {
    await setDoc(doc(db, 'boxes', box.serialNumber), box);
  }
  console.log(`  ✓ ${INITIAL_BOXES.length} caixas gravadas no Firestore!`);

  console.log("\n🎉 SEED CONCLUÍDO COM SUCESSO NO PROJETO qq-box-tc!");
  process.exit(0);
}

runSeed().catch((err) => {
  console.error("❌ Erro ao povoar Firestore:", err);
  process.exit(1);
});
