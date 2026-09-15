import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const packageJsonPath = path.join(rootDir, 'package.json');
const versionJsPath = path.join(rootDir, 'src', 'version.js');

// Lê package.json
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Argumento: patch | minor | major (default: patch)
const bumpType = process.argv[2] || 'patch';

let [major, minor, patch] = (pkg.version || '1.0.0').split('.').map(n => parseInt(n, 10) || 0);

if (pkg.version === '0.0.0') {
  major = 1;
  minor = 0;
  patch = 1;
} else if (bumpType === 'major') {
  major += 1;
  minor = 0;
  patch = 0;
} else if (bumpType === 'minor') {
  minor += 1;
  patch = 0;
} else {
  patch += 1;
}

const newVersion = `${major}.${minor}.${patch}`;
pkg.version = newVersion;

// Salva package.json atualizado
fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');

// Cria ou atualiza src/version.js
const now = new Date();
const formattedDate = now.toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});

const versionContent = `// Gerado automaticamente pelo sistema de versionamento QQ-BOX
export const APP_VERSION = '${newVersion}';
export const BUILD_TIMESTAMP = '${now.toISOString()}';
export const BUILD_DATE_BR = '${formattedDate}';
export const GOOGLE_PROJECT_ID = 'qq-box-tc';
export const FIREBASE_HOSTING_URL = 'https://qq-box-tc.web.app';

export default {
  version: APP_VERSION,
  buildTimestamp: BUILD_TIMESTAMP,
  buildDate: BUILD_DATE_BR,
  projectId: GOOGLE_PROJECT_ID,
  hostingUrl: FIREBASE_HOSTING_URL
};
`;

fs.writeFileSync(versionJsPath, versionContent, 'utf8');
console.log(`[QQ-BOX] Versão atualizada com sucesso para: v${newVersion} (${formattedDate})`);
