Decisões arquiteturais:

Este projeto está baseado nos principios do solid, no qual estamos com responsabilidade única para cada camada da aplicação.
Temos a camada de components, onde temos a interface do usuário (UI).
Temos uma camada de serviço, responsável por acessar serviços externos, como por exemplo nossas apis.
Temos interações entre cada componente, porém cada um com a sua responsabilidade única (Formulário, Listagem dos dados,  e o componente principal)

<img width="500" src="https://miro.medium.com/max/790/1*uWQOjkzzYAxSqlRaHK4pWA.png" alt="alternatetext">

Versões de linguagem:

VUE 4

VFerramentas utilizadas::

Visual Studio Code

Node v12.18.4

NPM 6.14.6

Instruções para a subida do projeto:

Realizar a instalação do Node (https://nodejs.org/en/download/)

Realizar a instalação do vue cli através do npm (https://cli.vuejs.org/guide/installation.html)

Na raíz do projeto, onde se localiza o arquivo package.json, baixar as dependencias do projeto, através do comando npm i.

Executar o projeto através do comando npm run serve.
