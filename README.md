# StockOS
Sistema de gestão de estoque com foco em cenário empresarial real. O projeto terá uma API REST em Node.js/Express com PostgreSQL e um dashboard administrativo em Angular com Tailwind CSS e Chart.js.

## Stack

- Backend: Node.js, Express, Prisma, PostgreSQL, JWT, Swagger, Jest
- Frontend: Angular, Tailwind CSS, Chart.js, Angular Router, Reactive Forms, RxJS
- Infra: Docker, Docker Compose

## Estrutura

```text
back-end/
	prisma/
	src/
front-end/
	src/app/
docker-compose.yml
```

## Como rodar localmente

### 1) Backend

```bash
cd back-end
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

API base:

- `GET http://localhost:3000/api/health`
- `GET http://localhost:3000/api/docs`

### 2) Frontend

```bash
cd front-end
npm install
npm start
```

App:

- `http://localhost:4200`

## Como rodar com Docker

Na raiz do projeto:

```bash
docker compose up --build
```

Serviços:

- Frontend: `http://localhost:4200`
- Backend: `http://localhost:3000/api/health`
- Swagger: `http://localhost:3000/api/docs`
- PostgreSQL: `localhost:5432`

## Status atual

- Setup inicial de backend e frontend concluído
- Estrutura de pastas alinhada ao escopo do MVP
- Prisma schema inicial com entidades principais
- Layout base Angular com login, shell e dashboard inicial
- Docker Compose com banco, API e frontend

## Próximas etapas

1. Implementar autenticação JWT (register/login/me) 
2. Entregar CRUD de produtos com validação de SKU único
3. Implementar entradas/saídas de estoque com regras de negócio
4. Adicionar histórico, alertas e endpoints completos de dashboard
5. Evoluir testes unitários e documentação Swagger por módulo
