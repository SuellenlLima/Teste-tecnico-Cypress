# Teste prático de Automação de QA com Cypress
## Objetivo: 
Criar testes automatizados utilizando o Cypress para verificar o comportamento da aplicação e garantir que todas as funcionalidades principais estão funcionando corretamente.

## Como rodar os testes

### Para iniciar o servidor
1. Abra o terminal na pasta do projeto
2. Instale as dependências do projeto (se ainda não tiver feito isso), usando o comando: npm install
3. Inicialize o servidor usando o comendo: npm start
4. Abra no navegador e acesse o link: http://localhost:8080/

### Para rodar os testes
1. Abra o terminal na pasta do projeto.
2. Para rodar os testes, execute o comando: npm run test

### Para abrir o Cypress (Se desejar ver direto pela interface)
1. Abra o terminal na pasta do projeto
2. Instale o Cypress (se ainda não tiver feito isso)
3. Abra o Cypress com o comando: npx Cypress open
4. Selecione: E2E Testing
5. Selecione o navegador: Eu usei os Chrome
6. Separei os testes em Home e API


 
## Desafios Enfrentados
- Tive dificuldade em entender como o código se conecta à API e a lógica de exibição das postagens. Após analisar o script.js e a estrutura do HTML, além de consultar a documentação do JavaScript e pesquisar sobre o funcionamento do fetch, consegui entender como as postagens são carregadas e simular um erro 404 com uma URL inválida.
- Resolver erros e interpretar mensagens de retorno, o que exigiu a habilidade de mapear elementos da página. A presença de IDs no código facilitou esse mapeamento e a aplicação dos cenários de testes sugeridos. É nóis, dev! rs
- Durante a configuração do ambiente local, achei que só trocando o comando no package seria suficiente, mas estava retornando que o comando npm não era reconhecido no terminal. Após várias tentativas de solucionar, incluindo reinstalar o Node.js, ajustar variáveis de ambiente e corrigir o PATH, consegui resolver e rodar os testes corretamente.

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
