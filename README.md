<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Descrição

> O "NetunoAcademy" é um emocionante projeto desenvolvido em Node.js, que visa criar uma plataforma educacional interativa para compartilhar e acessar cursos em diferentes áreas do conhecimento. Essa plataforma permitirá que instrutores qualificados ofereçam cursos de alta qualidade e que alunos interessados se inscrevam e façam parte desses cursos, criando assim uma comunidade de aprendizado dinâmica e envolvente.

# Como utilizar a aplicação.

- Primeiro, crie uma conta no site da [cloudinary](https://cloudinary.com/)
- Instale o Docker em sua máquina.

### Clone o projeto.
```bash
git clone git@github.com:Jackson-SM/NetunoAcademy-API.git
```
### Entre no diretório do projeto.
```bash
cd ./NetunoAcademy-API
```
### Instale as dependências.
```bash
yarn install
```
### Inicie o Dockerfile para configurar o contêiner.
```bash
// Antes, garanta que o Docker esteja inicializado.
docker-compose up -d
```

# Variáveis de Ambiente
> Para esse projeto, estaremos utilizando variaveis de ambiente para manter nossos dados sensíveis.
> O Banco de dados poderá ser configurado com o docker, mas caso deseje utilizar um **Cluster de banco de dados** também é possível.

## Configurar as variaveis:
- Caso já tenha todos os dados em mãos, poderá configurar as variaveis de ambiente utilizando o Shell Script criado para fazer isso automaticamente, apenas siga os passos abaixo.

Na raiz do projeto, execute o ```Environment.sh``` com o bash.
```bash
bash environment.sh
```
> Para fazer isso manualmente, duplique o arquivo ```.env.example``` e renomeie para ```.env``` apenas. Em seguida edite o arquivo duplicado e renomeado substituindo os valores das variaveis.

## Iniciar a aplicação

```bash
# Desenvolvimentoo
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Testar a aplicação

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```


# Conclusão

> O "NetunoAcademy" é uma plataforma educacional desenvolvida em Node.js e NestJS, que proporciona uma experiência de aprendizado excepcional. Com recursos como o Swagger para documentação de APIs, a plataforma oferece uma interface interativa para explorar e compartilhar cursos em diversas áreas do conhecimento. Com cadastro de instrutores e alunos, painéis de gerenciamento, fóruns de discussão, avaliações, certificados e busca avançada, a plataforma promove uma comunidade de aprendizado colaborativa e segura, tornando-se uma solução valiosa para compartilhar conhecimento e enriquecer a educação.


# Autores

- Autor - [Jackson Magalhães](https://github.com/Jackson-SM)
- Website - [Jackson Magalhães](jacksonmagalhaes.netlify.app)
