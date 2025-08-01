FROM node:20.19.4-slim

WORKDIR /app

COPY package*.json .

COPY tsconfig.json ./ 

RUN npm install

COPY . .

ARG SUPABASE_URL

RUN echo SUPABASE_URL=${SUPABASE_URL} > .env
RUN echo PORT=5432 > .env

RUN pnpm run build

EXPOSE 3000

CMD ["node", "dist/main"]