// Configuração do Google Firebase SDK (Modular v12)
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

// Verifica se as chaves mínimas foram fornecidas
export const isFirebaseConfigured = () => {
  return Boolean(
    firebaseConfig.projectId && 
    firebaseConfig.projectId !== "SEU_FIREBASE_PROJECT_ID" &&
    firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== "SUA_API_KEY"
  );
};

let app = null;
let db = null;
let auth = null;
let storage = null;

if (isFirebaseConfigured()) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
    console.info("🔥 Firebase conectado com sucesso ao projeto:", firebaseConfig.projectId);
  } catch (error) {
    console.warn("⚠️ Erro ao inicializar Firebase:", error);
  }
} else {
  console.info("ℹ️ Firebase rodando em modo Simulação/Offline. Configure o arquivo .env para conectar ao Cloud Firestore.");
}

export { app, db, auth, storage, firebaseConfig };
