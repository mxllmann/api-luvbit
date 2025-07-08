# 💌 Luvbit API

**Luvbit** é uma aplicação backend em Node.js com Express e MongoDB, que permite o envio de mensagens românticas anônimas chamadas **Whispers**, com imagens personalizadas, visual **dark retrô** e uma proposta única de conexão emocional silenciosa.

## ✨ Funcionalidades

- 📬 Criação de mensagens ("whispers") com texto, autor (opcional), imagem e cor.
- 🖼️ Upload e listagem de imagens (base64).
- 🔐 Criptografia dos dados sensíveis usando AES-256-CBC.
- ✉️ Envio opcional de e-mails com link do whisper (via Nodemailer).
- 🌐 API hospedada no Render: [https://api-luvbit.onrender.com](https://api-luvbit.onrender.com)

## 🚀 Tecnologias

- Node.js
- Express
- MongoDB + Mongoose
- Nodemailer
- AES-256-CBC (criptografia)
- CORS
- Dotenv

---

## 🛠️ Como rodar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/api-luvbit.git
cd api-luvbit

### 2. Instalar Dependências

```bash
npm install

### 3. Crie um arquivo .env

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/luvbit
SECURE_DATA_KEY=sua_chave_aes_256
IMAGE_UPLOAD_TOKEN=seu_token_de_upload
SMTP_USER=seu_email@gmail.com
SMTP_PASS=sua_senha_de_app
FRONTEND_URL=http://localhost:3000

### 4. Rode a Aplicação

```bash
npm run dev

## 📡 Rotas da API

### 📬 Whispers

| Método | Rota             | Descrição                    |
|--------|------------------|------------------------------|
| POST   | `/whisper`       | Cria um novo whisper         |
| GET    | `/whisper/:id`   | Recupera um whisper por ID   |

### 🖼️ Imagens

| Método | Rota             | Descrição                                 |
|--------|------------------|--------------------------------------------|
| POST   | `/image`         | Cadastra uma imagem (requer token de auth)|
| GET    | `/image`         | Lista todas as imagens                    |

### ✉️ Envio de E-mails

| Método | Rota             | Descrição                                             |
|--------|------------------|--------------------------------------------------------|
| POST   | `/email/send`    | Envia o link de um whisper por e-mail de forma anônima|


## 📁 Estrutura do Projeto

.
├── config/
│   └── db.js
├── controllers/
│   ├── email.controller.js
│   ├── whisper.controller.js
│   └── image.controller.js
├── middlewares/
│   └── verifyToken.js
├── models/
│   ├── whisper.model.js
│   └── image.model.js
├── routes/
│   ├── email.routes.js
│   ├── whisper.routes.js
│   └── image.routes.js
├── utils/
│   └── cryptoUtils.js
├── services/
│   ├── whisper.services.js
│   ├── whisper.service.js
│   └── image.service.js
├── index.js
└── .env

## 👨‍💻 Autor

Projeto criado por **Arthur Mallmann**  
🔗 [linkedin.com/in/arthurmallmann](https://www.linkedin.com/in/arthurmallmann/)
