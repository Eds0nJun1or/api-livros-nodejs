# API de Gerenciamento de Livros

Este é um simples projeto de API em Node.JS para gerenciar informações sobre livros. A API utiliza Express.js para o roteamento e o Mongoose para interagir com o MongoDB.

## Funcionalidades

- GET /livros: Retorna todos os livros cadastrados.
- POST /livros: Cria um novo livro na base de dados.
- PUT /livros/:id: Atualiza as informações de um livro existente na base de dados.
- DELETE /livros/:id: Exclui um livro da base de dados.
- Configuração do Banco de Dados
- A API se conecta a um banco de dados MongoDB hospedado na nuvem. Certifique-se de ter uma instância do MongoDB configurada e substitua a URL de conexão no arquivo index.js pela sua própria URL.

## Utilização

1. Clone este repositório.
2. Instale as dependências do projeto usando o comando npm install.
3. Inicie o servidor usando o comando npm start.
4. Teste as rotas da API usando o Postman ou uma ferramenta similar.

## Modelo de Dados

A entidade "Livro" possui os seguintes campos:

- title: Título do livro.
- genero: Gênero do livro.
- description: Descrição do livro.
- image_url: URL da imagem da capa do livro.
