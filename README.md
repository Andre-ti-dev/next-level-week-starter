# ♻ Ecoleta - Starter

[![CAPA](https://raw.githubusercontent.com/Andre-ti-dev/next-level-week-starter/master/Ecoleta%20(Starter).png)]()

Projeto com foco em pontos de coletas de resíduos que não podem ser colocados em conjunto com o lixo convencional como pilhas, baterias, entre outros.

O projeto é parte da Next Level Week Starter da Rocketseat com o instrutor Mayk Brito.

📝  Anotações realizadas durante o desenvolvimento do projeto: [NOTION](https://www.notion.so/Ecoleta-Starter-2cbce81f97e14dca9bd544beee03e5d3)

[CAPTURAS DE TELA](/screenshots)

### Tecnologias utilizadas

- HTML 5
  - No projeto são utilizadas as tags semânticas do HTML5 para que o projeto seja indexado corretamente pelos motores de busca e seu conteúdo seja organizado.
 - CSS 3
   - É utilizado as novas funcionalidades do CSS 3 como Flexbox para alinhar o nosso conteúdo HTML, assim como variáveis para padronizarmos nossas cores e facilitar a manutenção.
 - JavaScript
   - É abordado o conceito de variáveis utilizando var, let e const, assim como as estrutura de dados e funções, funcionalidades recentes como Fetch API e Promises.
   - Como adicional no projeto foi incluído a funcionalidade de módulos que permite que separemos funcionalidades de forma eficiente em nossa aplicação JavaScript.
   
 - Node
   - É abordado a criação de um servidor HTTP utilizando Express, assim como a criação de rotas.
   - Utilizamos o banco de dados SQLite para persistir os dados da nossa aplicação, criando tabelas e inserindo dados.
   
## Instalação

Após clonar esse repositório instale as dependências com:
```
$ npm install
```
Crie o banco e a tabela no SQLite com:
```
$ node src/database/db.js
```

E execute a aplicação com o comando.
```
$ npm start
```
