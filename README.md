# Teste prático de Automação de QA com Cypress
## Objetivo: 
Criar testes automatizados utilizando o Cypress para verificar o comportamento da aplicação e garantir que todas as funcionalidades principais estão funcionando corretamente.

## Como rodar os testes

1. Clone este repositório.
2. Abra o terminal e navegue até o diretório do projeto.
3. Instale as dependências com o comando: npm install
4. Para rodar os testes, use o comando: npm run test
5. A aplicação estará disponível em http://localhost:8080.
6. Para rodar os testes no Cypress, execute o comando: npm run test
 
## Desafios Enfrentados
- Tive dificuldade em entender como o código se conecta à API e a lógica de exibição das postagens. Após analisar o script.js e a estrutura do HTML, além de consultar a documentação do JavaScript e pesquisar sobre o funcionamento do fetch, consegui entender como as postagens são carregadas e simular um erro 404 com uma URL inválida.
- Resolver erros e interpretar mensagens de retorno, o que exigiu a habilidade de mapear elementos da página. A presença de IDs no código facilitou esse mapeamento e a aplicação dos cenários de testes sugeridos. É nóis, dev! rs

## Cenários de testes
### Interface Gráfica
- Validei se a aplicação está online
- Validei o titulo da pagina
- Validei se trazia ao menos um post na pagina
- Validei o click em um post
- Validei se vai para o detalhes desse post clicado
- Validei o botão voltar
### API
- Validei o retorno da API com um status 200
- Validei o corpo da resposta
- Validei o título
- Validei o Body
- Simulei um erro usando uma URL inválida

## Conclusão
Finalizar este teste técnico foi uma experiência desafiadora e recompensadora, pois tive a oportunidade de aprofundar meus conhecimentos em automação de testes. Até agora, minha experiência prática vinha apenas dos cursos do Papito, onde temos sempre um banco de dados pronto, uma API preparada e um passo a passo de sucesso a seguir. Este projeto, no entanto, me desafiou a aplicar o que aprendi de forma mais independente. Utilizando tanto o conhecimento adquirido nos cursos quanto as pesquisas realizadas durante o teste, consegui evoluir significativamente. Estou ansiosa para aplicar esses aprendizados em futuras oportunidades e contribuir para a equipe. Agradeço pela oportunidade de participar deste desafio e vou continuar evoluindo com a automação de testes!
