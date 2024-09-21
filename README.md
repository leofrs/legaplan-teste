# Desafio: Aplicação de Gerenciamento de Tarefas

![Tela principal](/assets/desktop1.png)
![Tela principal](/assets/desktop2.png)
![Tela principal](/assets/desktop3.png)
![Tela principal](/assets/mobile1.png)
![Tela principal](/assets/mobile2.png)
![Tela principal](/assets/mobile3.png)

## Descrição

Este projeto é uma aplicação web simples para gerenciamento de tarefas, que permite aos usuários criar, visualizar e excluir tarefas.

## Funcionalidades

-   **Gerenciamento de Tarefas:** Usuários podem listar, adicionar, marcar como concluída e excluir suas tarefas.
-   **Interface de Usuário:** Interface intuitiva e responsiva criada com Next.js, utilizando hooks para gerenciar estado e efeitos colaterais.

## Requisitos Técnicos

### Backend

-   **Linguagem:** TypeScript;
-   **Tecnologia:** Node.js;
-   **Framework:** Express.js e Prisma ORM;
-   **Banco de Dados:** PostgreSQL.

### Frontend

-   **Linguagem:** TypeScript;
-   **Tecnologia:** Next.Js;
-   **Gerenciamento de Estado:** React Hooks(useState, useEffect) e Custom hooks;

## Estrutura do Projeto

### Backend

-   **Endpoints:**
-   **get**"/api/v1/get-all-task", tasksController.getAllTasks;
-   **post**"/api/v1/create-task", tasksController.create
-   **delete**"/api/v1/delete-task-by-id/:id", tasksController.deleteById
-   **put**"/api/v1/updated-task/:id", tasksController.concludeTask

### Frontend

-   **Componentes Principais:**

    -   **header:** Exibir o header da aplicação;
    -   **modals:** responsável pela exibição dos modais de add e excluir;
    -   **Tarefas:** responsável por exibir as tarefas abertas e finalizadas

-   **Gerenciamento de Estado:** Utilização de hooks como `useState` e `useEffect` para gerenciar estado e efeitos colaterais.

## Instalação

### Backend

1. Clone o repositório:

    ```bash
    git clone https://github.com/leofrs/legaplan-back
    ```

2. Navegue até o diretório do backend:

    ```bash
    cd backend
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure o banco de dados e as variáveis de ambiente no arquivo `.env`.

5. Inicie o servidor:

    ```bash
    npm start
    ```

### Frontend

1. Clone o repositório:

    ```bash
    git clone https://github.com/leofrs/legaplan-teste
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Contato

Para dúvidas ou suporte, entre em contato com [leofrrodrigues86@gmail.com](mailto:leofrrodrigues86@gmail.com).

---
