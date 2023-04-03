# Uno API

Este repositório contém a implementação de uma API RESTful para gerenciamento de informações de laboratório, criada com Node.js, Express e PostgreSQL.

## Funcionalidades da API
A API implementa as seguintes funcionalidades:

- Cadastro de Solicitantes
- Cadastro de Solicitações de Análise
- Cadastro de Amostras
- Cadastro de Análises
- Consulta de Solicitantes
- Consulta de Solicitações de Análise
- Consulta de Amostras
- Consulta de Análises
- Como executar o projeto

## Pré-requisitos
- Node.js instalado em sua máquina
- Docker instalado em sua máquina

## Passos
- Clone este repositório em sua máquina usando o comando: 
``` 
git clone https://github.com/DaviidSantos/uno-api 
```
- Navegue até a pasta raiz do projeto usando o comando cd uno-api
- Execute o comando npm install para instalar as dependências do projeto
- Execute o Docker em sua máquina
- Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
```
POSTGRES_USER=<defina um usuário>
POSTGRES_PASSWORD=<defina uma senha>
DATABASE_URL=postgres://<usuário>:<senha>@localhost:5432/uno
PORT=3000
ACCESS_TOKEN_SECRET=<defina uma chave secreta>
```
- Execute o comando docker-compose up para iniciar o PostgreSQL
- Execute o projeto com o comando npm start
- O servidor estará disponível em http://localhost:3000.

## Estrutura do projeto
A estrutura do projeto é organizada em pastas da seguinte forma:

``` 
├── src
│   └── adapters
│       └── SolicitanteAdapter.ts
│   └── controllers
│   └── core
│       └── solicitante
│           └── entity
│               └── Solicitante.ts
│           └── repository
│               └── SolicitanteRepository.ts
│           └── usecases
│               └── CreateSolicitante.ts
│               └── GetAllSolicitantes.ts
│               └── GetSolicitante.ts
│               └── UpdateSolicitante.ts   
│   └── infra
│       └── db
│           └── prisma.ts
│       └── repository
│           └── SolicitanteRepository.ts
├── tests
│   └── Solicitante.test.ts
├── prisma
│   └── schema.prisma
├── .gitignore
├── docker-compose.yml
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

