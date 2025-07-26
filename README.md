# 🚀 Portfólio React com AOS e Deploy no GitHub Pages

Este é um projeto simples de portfólio criado com **React.js**, usando **AOS (Animate On Scroll)** para animações e com **deploy gratuito no GitHub Pages**.

---

## 📥 Como usar este projeto

### 1. ✅ Faça o download do projeto

Baixe o arquivo `.zip` do repositório e extraia para uma pasta no seu computador.

Ou clone via Git:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

> Substitua `seu-usuario/seu-repositorio` pelo seu nome de usuário e nome do repositório no GitHub.

---

### 2. 📦 Instale as dependências

Com o terminal aberto na raiz do projeto, rode:

```bash
npm install
```

---

### 3. 📚 Instale bibliotecas adicionais

#### AOS (animações):
```bash
npm install aos
```

#### gh-pages (deploy no GitHub Pages):
```bash
npm install gh-pages --save-dev
```

---

### 4. ✏️ Edite suas informações

Abra o arquivo `src/App.js` e altere:

- **Nome**
- **Descrição**
- **Projetos**
- **Email e LinkedIn**
- Substitua a imagem `public/profile.jpg` pela sua foto (com o mesmo nome).

---

### 5. ▶️ Rode o projeto localmente

```bash
npm start
```

Acesse: `http://localhost:3000` no seu navegador.

---

### 6. 🚀 Deploy no GitHub Pages

#### a) Edite o `package.json`:

Adicione no topo:

```json
"homepage": "https://seu-usuario.github.io/seu-repositorio",
```

Adicione aos scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

#### b) Inicialize e envie ao GitHub (se ainda não fez):

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main
```

#### c) Execute o deploy:

```bash
npm run deploy
```

---

### 7. 🌐 Ative o GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em **Settings > Pages**
3. Em **Branch**, selecione `gh-pages`
4. Clique em **Save**

Seu portfólio estará disponível em:

```
https://seu-usuario.github.io/seu-repositorio/
```

---

## 🔄 Para atualizar o projeto depois

1. Edite o que quiser
2. Rode:

```bash
git add .
git commit -m "update"
git push origin main
npm run deploy
```

---

## 👨‍💻 Tecnologias usadas

- React.js
- AOS (Animate On Scroll)
- GitHub Pages