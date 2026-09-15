# Regras do Projeto QQ-BOX

Este arquivo define as regras estritas e obrigatórias de desenvolvimento para o projeto **QQ-BOX**:

## 1. Versionamento Automático Obrigatório
- A cada alteração, adição de funcionalidade, melhoria de design, refatoração ou correção de bug:
  - O número de versão deve ser incrementado automaticamente (SemVer: `patch`, `minor` ou `major`).
  - A versão deve ser atualizada em `package.json` e em `src/version.js`.
  - A versão atualizada DEVE ser exibida visivelmente:
    1. **Na Tela de Login** (ex: `v1.0.1`).
    2. **Dentro do Sistema** (no Navbar superior e no rodapé do sistema).

## 2. Deploy Automático Obrigatório
- Sempre que houver qualquer alteração ou incremento de versão:
  1. Executar o build de produção (`npm.cmd run build`).
  2. Publicar imediatamente no **Firebase Hosting** do projeto oficial: `npx.cmd firebase deploy --only hosting`.
  3. Comitar e enviar o código para o repositório GitHub oficial: `git add . && git commit -m "..." && git push origin main`.
  4. Disponibilizar o link público atualizado (`https://qq-box-tc.web.app`) para testes online imediatos.
