# Praticando – Testes E2E com Cypress

Projeto de estudo e prática de automação de testes end-to-end (E2E) utilizando **Cypress**, com foco nos fluxos de **Login** e **Cadastro de Usuário**, estruturado com o padrão **Page Object Model (POM)**.

## 🚀 Tecnologias

- [Cypress](https://www.cypress.io/)
- JavaScript
- Page Object Model (POM)

## 📁 Estrutura do projeto

```
cypress/
├── e2e/
│   ├── login.cy.js
│   └── cadastro_user.cy.js
├── fixtures/
├── support/
│   ├── pages/
│   │   ├── cadastro_user_page.js
│   │   ├── commum_page.js
│   │   ├── home_page.js
│   │   └── login_page.js
│   ├── commands.js
│   └── e2e.js
cypress.config.js
package.json
```

O padrão **Page Object Model** foi utilizado para separar a lógica de interação com a interface (seletores, cliques, preenchimento de campos) das especificações dos testes, facilitando a manutenção e reutilização de código entre os arquivos `.cy.js`.

## ✅ Cenários de teste

### Fluxo de Login (`login.cy.js`)

- **Email Vazio** – valida mensagem de erro ao tentar logar sem preencher o e-mail
- **Senha Vazia** – valida mensagem de erro ao tentar logar sem preencher a senha
- **Email Inválido** – valida mensagem de erro ao informar um e-mail em formato inválido
- **Login com Sucesso** – valida o fluxo de login com credenciais válidas

Cada teste conta com um `beforeEach` responsável por acessar a tela de login antes da execução.

### Fluxo de Cadastro de Usuário (`cadastro_user.cy.js`)

- Cenários de cadastro de novo usuário, reaproveitando as funções da `commum_page` para navegação entre as telas.

## ▶️ Como rodar os testes

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/guilhermeQA7/praticando.git
cd praticando
npm install
```

Para abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Para rodar todos os testes em modo headless:

```bash
npx cypress run
```

## 📌 Status

Todos os testes implementados até o momento estão passando ✅.

## 📖 Sobre

Projeto criado para consolidar conhecimentos em automação de testes com Cypress, boas práticas de organização de código (POM) e escrita de casos de teste E2E.

## 👤 Autor

**Guilherme Martins**  
[GitHub](https://github.com/guilhermeQA7)