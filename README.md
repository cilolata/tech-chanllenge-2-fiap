<h1 align="center"> POSTAI API </h1>

[![TypeORM](https://img.shields.io/badge/TypeORM-FF0000?style=for-the-badge&logo=typeorm&logoColor=white)](https://typeorm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)

## Projeto

Este é o segundo projeto do curso FullStack - Fiap. Nele executamos a criaçao de uma api para que professores possam compartilhar as aulas e os alunos acessarem. Utilizamos basicamente as ferramentas ensinadas no módulo, como nodejs, typescript, typeorm, postgres, entre outras, e usamos o conceito de SOLID. Foi um trabalho desafiador, pois atuamos em outras áreas (frontend e dados), mas conseguimos finalizar o projeto, e já estamos pensando em muitas melhorias. Nós também subimos a aplicação no github actions para integração contínua e fluxo de entrega e a API está publicada no Render. 

## Arquitetura
<img width="1026" height="566" alt="Screenshot 2025-08-03 at 19 29 27" src="https://github.com/user-attachments/assets/592bca11-1180-4b55-b17b-42cdab24d25b" />

## Banco de dados

- O banco de dados foi o relacional - postgres, e utilizamos o Superbase para armazenar em nuvem

#### tabelas

permission_type: PROFESSOR = 1, ALUNO = 0

![supabase-schema-bymytsaevbrbdojeevty](https://github.com/user-attachments/assets/7924ab92-20ca-4477-915a-1754c48f79f6)

## Rotas

### Criação de usuário
- POST: /usuario

### Professores: Criação/Edição/Delete de post
- POST: /posts
- PUT: /posts/:id
- DELETE: /posts/:id

### Alunos e Professores: Listagem de todos posts e busca
- GET: /posts
- GET: /posts/id
- GET: /posts/search=search

### Deploy

Criaçao de usuário
- POST: https://postai-latest.onrender.com/usuario

Professores
- POST: https://postai-latest.onrender.com/posts
- PUT: https://postai-latest.onrender.com/posts/:id
- DELETE: https://postai-latest.onrender.com/posts/:id

Professores / Alunos
- GET: https://postai-latest.onrender.com/posts
- GET: https://postai-latest.onrender.com/posts/id
- GET: https://postai-latest.onrender.com/posts/search=search

## Setup inicial

- npm run install
- npm run build
- npm run start

## publicação da imagem dockerhub

[postai imagem](https://hub.docker.com/repository/docker/cilolata/postai/general)

## .env
SUPABASE_URL=
<br>
SUPABASE_KEY=
<br>
DB_PORT=








