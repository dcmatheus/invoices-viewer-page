<div align='center'>

# [Invoices Views](https://invoices-viewer.herokuapp.com/)

</div>

Front End da aplicação [Invoices Viewer](https://github.com/dcmatheus/invoices-viewer).

---

## Tecnologias utilizadas

- #### Vue: Framework javascript principal.
- #### Tailwind: Framework css utilizado na estilização dos componentes.
- #### Vite: Principal builder da aplicação.
- #### Eslint: Ferramenta que mantém o código seguindo os principais padrões da comunidade.

---

## Estrutura de pastas

Estrutura de dados baseado no [Atomic Design](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c).
```js
src
├── pages // pages
├── templates // templates
├── components // molecules
└── units // atoms
```

---

## Iniciando a aplicação

- #### Instale as dependências:
    ```bash
    npm install
    ```

- #### Inicie a aplicação:
    ```bash
    npm start
    ```

>*A aplicação ficara disponível em http://localhost:3000*
---

## Variáveis ​​de Ambiente
Por padrão a API utilizada é a local rodando em http://localhost:3001. Para passar uma URL específica é necessário adicionar um arquivo `.env` na raiz do projeto com a chave `VITE_API_URL`.

Exemplo:
```env
VITE_API_URL='https://invoices-viewer-api.herokuapp.com/'
```

---

## Deploy

O deploy foi feito utilizando o Heroku.

Link do Deploy: https://invoices-viewer.herokuapp.com/
