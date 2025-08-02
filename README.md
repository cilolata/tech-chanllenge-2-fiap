<h1 align="center"> POSTAI API </h1>

[![TypeORM](https://img.shields.io/badge/TypeORM-FF0000?style=for-the-badge&logo=typeorm&logoColor=white)](https://typeorm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)

## TODO
- handler de erros e tipagem https api (opcional)
- testes
- swagger

# Arquitetura
```mermaid
flowchart TD
    A[Cliente] -->|Requisições| B[API]
    
    subgraph Banco de Dados
        E[(PostgreSQL)]
        F[Tabela Users]
        G[Tabela Posts]
    end

    D -->|Professor?| H[POST/PUT/DELETE /posts]
    D -->|Aluno / Professor| I[GET /posts]
    D -->|Aluno / Professor| J[GET /posts?search=palavra]

    H --> G
    I --> G
    J --> G

    style H stroke:#4CAF50,stroke-width:2px
    style I stroke:#2196F3,stroke-width:2px
    style J stroke:#2196F3,stroke-width:2px
```

![supabase-schema-bymytsaevbrbdojeevty](https://github.com/user-attachments/assets/7924ab92-20ca-4477-915a-1754c48f79f6)

PERMISSION_TYPE: 
 - PROFESSOR: 1
 - ALUNO: 0


# Instalação

npm run install

# .env

SUPABASE_URL=
<br>
SUPABASE_KEY=
<br>
DB_PORT=

# migrations

migration:run

# rodar aplicação

npm run build

npm run start

# urls deploy

- POST: https://postai-latest.onrender.com/usuario 
- POST: https://postai-latest.onrender.com/posts

- GET: https://postai-latest.onrender.com/posts
- GET: https://postai-latest.onrender.com/posts/id
- GET: https://postai-latest.onrender.com/posts/search=

- PUT: https://postai-latest.onrender.com/posts/id

- DELETE: https://postai-latest.onrender.com/posts/ID

# imagem dockerhub

- cilolata/postai

# Banco de dados

 - postgres
 - supabase (nuvem)





