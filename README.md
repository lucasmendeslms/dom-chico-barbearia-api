<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

1. Clone o repositório para a sua máquina

2. Instale o [Docker Desktop](https://docs.docker.com/get-docker/)

3. Faça a instalação e configuração do [Node.js](https://nodejs.org/en)

4. Abra o Docker Desktop para inicializar o Docker Engine

5. Execute o comando abaixo para instalar as dependências do projeto

   ```bash
   $ npm install
   ```

6. Crie e inicialize o container definido no arquivo `docker-compose.yml` contendo o banco de dados PostgreSQL

   ```bash
   $ docker-compose up -d
   ```

7. Crie as tabelas no banco de dados a partir do arquivo `schema.prisma`

   ```bash
   $ npx prisma migrate dev --name init
   ```

8. Execute o comando abaixo para verificar se as tabelas foram criadas com sucesso
   ```bash
   $ npx prisma studio
   ```

## Running the app

```bash

# Abra o Docker Desktop e inicialize o container
$ docker-compose start

# Execute um dos comando abaixo para inicializar o servidor com a aplicação

  # development (É necessário executar o comando novamente para refletir alterações no código)
  $ npm run start

  # watch mode (O servidor atualiza automaticamente após uma alteração no código)
  $ npm run start:dev

  # production mode
  $ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Alguns comandos importantes do docker:

- Criar e inicializar o container definido no arquivo docker-compose.yml (Uma única vez): `docker-compose up -d`

- Iniciar o container depois de criado: `docker-compose start`

- Pausar o container: `docker-compose stop`

- Excluir o container: `docker-compose down`

## Materiais para ajudar

[Dio: Entendendo controllers, services e repositories](https://www.dio.me/articles/entendendo-controllers-services-e-repositories-em-aplicacoes-nodejs-com-typescript)

[Explorando camadas do Nest](https://www.youtube.com/watch?v=KvcTDlfPPcs)

[Rocketseat: Construindo uma aplicação rápida e do zero com NestJS](https://www.youtube.com/watch?v=TRa55WbWnvQ)

[Rocketseat: Comandos docker mais utilizados](https://blog.rocketseat.com.br/comandos-docker-mais-utilizados/)

[Explicação do funcionamento do docker compose](https://blog.4linux.com.br/docker-compose-explicado/)
