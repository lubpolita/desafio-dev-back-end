
  <h3 align="center">Desafio Back-end </h3>

  <p align="center">
    Projeto desenvolvido para o processo seletivo da empresa Precato 
    <br />
    <br />
    <a href="https://github.com/lubpolita/desafio-dev-back-end/issues">Report Bug</a>
    ·
    <a href="https://github.com/lubpolita/desafio-dev-back-end/issues">Request Feature</a>
  </p>
</p>


<!-- ABOUT THE PROJECT -->
## :computer: Sobre o Projeto

Implementação de uma API REST que recebe solicitações de pagamentos e, a partir das regras de negócio definidas, indentifica se a solicitação é inválida ou não.

### :briefcase: Regras de negócio: 

1 - Uma solicitação só pode ser feita se o cadastro do credor a receber o pagamento estiver aprovado.

2 - Uma solicitação de pagamento deve sempre haver um ente devedor.

3 - Em uma solicitação de pagamento, o valor inicial e final devem ser sempre maiores do que 0.

4 - Em uma solicitação de pagamento, o valor final deve ser sempre menor que o valor inicial.

5 - Solicitações de pagamentos para um mesmo credor deve ocorrer apenas se o identificador de remessa for diferente das solicitações já existentes.

6 - Se uma solicitação for identificada como inválida, o motivo que a definiu como inválida deve ser armazenado.

### :hammer_and_wrench: Tecnologias Utilizadas

As seguintes ferramentas foram usadas na construção do projeto:
* [NodeJS](https://nodejs.org/en/)
* [TypeORM](https://typeorm.io/)
* [ExpressJS](https://expressjs.com/pt-br/)
* [ESLint](https://eslint.org/)
* [Jest](https://jestjs.io/pt-BR/)
* [Docker](https://www.docker.com/)
* [Insomnia](https://insomnia.rest/download)
* [Postgresql](https://www.postgresql.org/)
* [GitHub](https://github.com/)


<!-- GETTING STARTED -->
## :rocket: Iniciando

Guia prático de como rodar o projeto localmente.
### Pré-requisitos

É necessário ter instalado no seu computador o [NodeJS](https://nodejs.org/en/) e também um banco de dados para fazer a conexão com a API. As configurações de conexão com o banco de dados podem ser alteradas facilmente no arquivo chamado "ormconfig.json". É importante ressaltar que nesse projeto foi utilizado o banco de dados [Postgresql](https://www.postgresql.org/).

### Instalação e Inicialização

1. Clone o repositório
   ```sh
   git clone https://github.com/lubpolita/desafio-dev-back-end.git
   ```
2. Entre no diretório principal 
   ```sh
   cd desafio-dev-back-end
   ```
   ```sh
   cd precato
   ```
4. Instale as dependências
   ```sh
   yarn
   ```
5. Rode os testes automáticos implementados
   ```sh
   yarn test
   ```
   Caso queira visualizar os logs dos testes automáticos digite o seguinte comando:
   ```sh
   yarn test:verbose
   ```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contato

Luiza Polita: https://www.linkedin.com/in/luizapolita/ 

Project Link: [https://github.com/lubpolita/desafio-dev-back-end](https://github.com/lubpolita/desafio-dev-back-end)

