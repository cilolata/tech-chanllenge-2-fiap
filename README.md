<h1 align="center"> POSTAI API </h1>

[![TypeORM](https://img.shields.io/badge/TypeORM-FF0000?style=for-the-badge&logo=typeorm&logoColor=white)](https://typeorm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)

## TODO
- handler de erros e tipagem https api (opcional)
- testes
- swagger

## Arquitetura
graph LR
  A[👤 POST /user] --> B[⚙️ API]
  B --> C[(🔵 Supabase)]
  C --> D{E professor?}
  D -->|Sim| E[👨🏫📝 Create Post]
  E --> F[✏️ Edit Post]
  F --> G[🗑️ Delete Post]
  D -->|Não| H[👩🎒👀 View Posts]
  H --> I[📖 Read Content]
```

![supabase-schema-bymytsaevbrbdojeevty](https://github.com/user-attachments/assets/7924ab92-20ca-4477-915a-1754c48f79f6)

PERMISSION_TYPE: 
 - PROFESSOR: 1
 - ALUNO: 0


## Instalação

npm run install

## .env

SUPABASE_URL=
<br>
SUPABASE_KEY=
<br>
DB_PORT=

## rodar aplicação

npm run build

npm run start

## urls deploy

- POST: https://postai-latest.onrender.com/usuario 
- POST: https://postai-latest.onrender.com/posts

- GET: https://postai-latest.onrender.com/posts
- GET: https://postai-latest.onrender.com/posts/id
- GET: https://postai-latest.onrender.com/posts/search=search

- PUT: https://postai-latest.onrender.com/posts/id

- DELETE: https://postai-latest.onrender.com/posts/id

## imagem dockerhub

- cilolata/postai

## Banco de dados

 - postgres
 - supabase (nuvem)





