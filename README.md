# tech-chanllenge-2-fiap

## TODO
- handler de erros e tipagem https api
- testes
- docker file/compose - por enquanto criei só a conexão no docker do postgres. nao consegui fazer a integração com o projeto
- documentaçao
- GITHUB ACTIONS
- .env (por enquanro as variaveis estão setadas pois tive problema com o .env)

## Projeto

### CRIAR E RODAR O BANCO COM O DOCKER:
   - docker-compose up (caso precise refazer docker-compose down -v && docker-compose up)
   - npm run migrations
   - npm run dev
  
### PARA CRIAR O BANCO SEM O COMPOSED

  docker run -d --name postgres -e POSTGRES_USER=postgres\
  -e POSTGRES_PASSWORD=postgres
  -p 5432:5432 \
  postgres:latest

Obs: adicionei campos novos nas entidades - portando para criar post adicionar os campos novos


  
