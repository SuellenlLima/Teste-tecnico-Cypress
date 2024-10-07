<<<<<<< HEAD
# Teste Prático de Automação de QA com Cypress

## Bem-vindo!

Este repositório contém um desafio prático para avaliar suas habilidades em automação de testes utilizando Cypress. Você trabalhará em uma aplicação simples que consome uma API pública para listar e exibir posts.

## Objetivo

Você irá:
- Configurar corretamente o cypress na aplicação.
- Executar a aplicação localmente através de um servidor web configurado.
- Criar e executar testes automatizados com Cypress para validar o comportamento da aplicação.

## Como Funciona a Aplicação

A aplicação é uma página web simples que:
- Exibe uma lista de posts fornecida por uma API pública.
- Ao clicar em um post, a lista é ocultada e os detalhes do post selecionado são exibidos.
- O usuário pode voltar à lista de posts clicando no botão "Back to Posts".

## Passo a Passo para Realizar o Teste

### 1. Instalar Dependências do Projeto

Faça o download ou clone o repositório que contém os arquivos do projeto.

Abra o terminal na pasta do projeto e execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

O servidor será iniciado e a aplicação ficará disponível em http://localhost:8080.

### 3. Testar a Aplicação Manualmente
Com o servidor rodando, acesse http://localhost:8080 no navegador. A página exibirá uma lista de posts. Clique em qualquer post para visualizar seus detalhes e, em seguida, use o botão "Back to Posts" para voltar à lista de posts.

### 4. Criar Testes Automatizados com Cypress
Agora que a aplicação está rodando localmente, sua tarefa principal é escrever testes automatizados para verificar o comportamento esperado da aplicação. Use o Cypress para automatizar os seguintes cenários:

### Cenários de Teste Sugeridos:
 - Carregamento da Lista de Posts:

Verifique se a lista de posts é carregada corretamente ao acessar a página.
Certifique-se de que pelo menos um post esteja presente na lista.
Exibição dos Detalhes de um Post:

- Simule o clique em um post e verifique se a lista de posts é oculta.
Confirme se os detalhes corretos do post clicado são exibidos (título e conteúdo do post).
Voltar à Lista de Posts:

- Teste se o botão "Back to Posts" faz a transição correta de volta à lista de posts, ocultando os detalhes do post.
Certifique-se de que a lista original de posts é exibida corretamente após retornar.
Validação de Respostas da API:

- Valide se as respostas da API possuem os dados corretos (como título e corpo dos posts).
Simule um cenário de falha, por exemplo, quando a API não retorna dados, e veja como a aplicação lida com isso.

## O que Será Avaliado
- Cobertura dos Testes: Quão bem os testes cobrem as funcionalidades da aplicação. Não se esqueça de testar as interações principais da página.
- Boas Práticas: Organização, clareza e reutilização de código nos testes.
- Trabalho com API: Como você valida as respostas da API e lida com possíveis erros.
- Performance dos Testes: Os testes devem ser executados de maneira eficiente e rápida.

## Entrega
Ao finalizar o teste, envie o projeto com os testes Cypress implementados para o email ** g.martins@gen.com.br **. Certifique-se de que todos os testes rodem corretamente em um ambiente local com o comando 

```bash
npm run test
```


Boa sorte! Se precisar de ajuda ou tiver dúvidas durante o processo, não hesite em entrar em contato.
=======
# cypress-tests
Diz respeito a um teste tecnico que eu fiz para uma entrevista
>>>>>>> a393f0065e5b44beaa3c1e04c87f50baf6cedfcc
