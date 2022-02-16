<h1 align = "center">  :flying_saucer: Blink Space

<p align="center"> 
    <img alt = "Languages" src="https://img.shields.io/github/languages/count/Konstructa/blink-space">
    <img alt = "Tamanho" src="https://img.shields.io/github/repo-size/Konstructa/blink-space">
    <img alt = "Commit" src="https://img.shields.io/github/last-commit/Konstructa/blink-space">
    <img alt = "Issues" src="https://img.shields.io/github/issues/Konstructa/blink-space">
</p>

<h3 align="center"> 
    <a href="#rocket-technology">Technology</a>          |
    <a href="#computer-Description">Description</a>          |
    <a href="#hammer-installation">Installation</a>
</h3>

## :rocket: Technology

- NodeJS

- Express

- Typescript

- MySQL

- NestJs

- TypeORM

- Bcrypt

## :computer: Description

Esse projeto é uma API que simula uma compra, existe cadastro de usuário, produtos e pedidos.

Essa loja é de veiculos espaciais, temos os mais rápidos e seguros da galáxia!

## :world_map: Routes

`Global Prefix /api/v1`

METHOD | PATH | 
|---|---|
| POST | /customer |
| DELETE | /customer/:id |
| PATCH | /customer/:id |

METHOD | PATH | 
|---|---|
| POST | /order |
| DELETE | /order/:id |
| GET | /customerByOrderID/:id |
| GET | /productDetailsByOrderID/:id |

METHOD | PATH | 
|---|---|
| POST | /product |


## :hammer: Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
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

