# api-todo-list
# API DE TAREFAS FEITA COM NODE.JS + TYPESCRIPT
## DEPENDENCIAS
- EXPRESS
- SEQUELIZE
- MYSQL2
- ZOD
- TYPESCRIPT
- TSX

## O que faz?
Esta api permite cria tarefas e categoria e organiza-las por categoria. As suas principais funções são:
- permite criar tarefas
- atualizar as tarefas
- remover tarefas
- alterar o estado das tarefas(pendente ou concluida)

## ROTAS
### Tarefas
- GET /tarefas - todas as tarefas
- POST /tarefas - cria tarefas
- PUT /tarefas/:id - edita as taredas
- PUT /tarefas/:id/concluir - marcar a tarefa como concluida
- DELETE /tarefas/:id - remover tarefa

### Categorias
- GET /categorias - todas as categorias
- POST /categorias - criar categoria
- PUT /categorias/:id - atualiza a categoria
- DELETE /categoria/:id - Exclui a categoria

## COMANDO
- npm install: instala as dependencias
- npm start: inicia o servidor
- npm run dev: inicia o servidor no modo de desenvolvimento
- npm run build: compila e transpila o codigo typescript para javascript na pasta /dist
