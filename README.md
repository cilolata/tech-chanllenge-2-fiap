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
- 

## Projeto

- npm install
- npm run dev

## Scripts tabelas

CREATE TABLE users (
	id serial4 NOT NULL,
	username varchar(50) NOT NULL,
	email varchar(100) NULL,
	"password" varchar(100) NOT NULL,
	"permission_type" public."permission_type" DEFAULT '0'::permission_type NOT NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_username_key UNIQUE (username)
);


  CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    subject VARCHAR(100),
    created_at TIMESTAMP WITHOUT TIME ZONE,
    updated_at TIMESTAMP WITHOUT TIME ZONE,
    user_id INTEGER NOT NULL,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id) 
        REFERENCES users(id) ON DELETE CASCADE
);

<img width="300" height="300" alt="postgres - public - posts" src="https://github.com/user-attachments/assets/c2c83623-ba52-4e75-8b4b-a1072cefe75b" />


  
