# tech-chanllenge-2-fiap

- TODO
- handler de erros e tipagem https api
- testes
- docker file/compose
- documentaçao
- enpoint: GET /posts/search - Busca de Posts:
▪ Este endpoint permitirá a busca de posts por palavras-
chave. Os usuários poderão passar uma query string com o
termo de busca e o sistema retornará uma lista de posts que
contêm esse termo no título ou conteúdo.
- .env (por enquanro as variaveis estão setadas pois tive problema com o .env)

## Projeto

- npm install
- npm run dev
  
  enquanto nao temos o dockfile precisa criar a imagem do postgress no docker:
  
  docker run -d --name postgres -e POSTGRES_USER=postgres\
  -e POSTGRES_PASSWORD=postgres
  -p 5432:5432 \
  postgres:latest

  depois roda a migration

  - npm run migration

  e ai o projeto:
  
  - npm run dev

<img width="300" height="300" alt="postgres - public - posts" src="https://github.com/user-attachments/assets/c2c83623-ba52-4e75-8b4b-a1072cefe75b" />


  
