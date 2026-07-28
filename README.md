# Automação E2E com Cypress — Autenticação e Cadastro

Suíte de testes end-to-end em Cypress cobrindo os fluxos de **login** e **cadastro de usuário**, estruturada com o padrão **Page Object Model**.

Aplicação sob teste: [Automation Practice](https://automationpratice.com.br/)

## Stack

| | |
|---|---|
| Framework | Cypress 15 |
| Linguagem | JavaScript |
| Arquitetura | Page Object Model |

## Cobertura

São 10 casos automatizados, **8 deles negativos** — a suíte foi desenhada em torno das validações de campo, não do caminho feliz.

### Fluxo de Login — `cypress/e2e/login.cy.js`

| Caso | Cenário | Mensagem esperada |
|---|---|---|
| Email Vazio | envia o formulário sem preencher nada | `E-mail inválido.` |
| Senha Vazia | e-mail válido, senha em branco | `Senha inválida.` |
| Email Invalido | e-mail sem `@` e sem domínio | `E-mail inválido.` |
| Login Com Sucesso | credenciais válidas | `Login realizado` |

### Cadastro de Usuário — `cypress/e2e/cadastro_user.cy.js`

| Caso | Cenário | Mensagem esperada |
|---|---|---|
| Campo Nome Vazio | envia o formulário sem preencher nada | `O campo nome deve ser prenchido` |
| Campo Email Vazio | apenas o nome preenchido | `O campo e-mail deve ser prenchido corretamente` |
| Campo Email Invalido | e-mail malformado | `O campo e-mail deve ser prenchido corretamente` |
| Campo Senha Vazio | nome e e-mail preenchidos, senha em branco | `O campo senha deve ter pelo menos 6 dígitos` |
| Campo Senha invalido | senha com 4 caracteres | `O campo senha deve ter pelo menos 6 dígitos` |
| Cadastro Com Sucesso | dados válidos | `Cadastro realizado!` |

### Técnicas aplicadas

- **Particionamento em Classes de Equivalência** — cada campo é exercitado nas partições válida, vazia e malformada.
- **Análise de Valor Limite** — o mínimo de 6 dígitos da senha é atacado pelos dois lados: 4 caracteres (abaixo) e 8 (acima).

## Estrutura

```
cypress/
├── e2e/
│   ├── login.cy.js              # 4 casos — fluxo de login
│   └── cadastro_user.cy.js      # 6 casos — fluxo de cadastro
├── support/
│   ├── pages/
│   │   ├── commum_page.js       # navegação compartilhada entre as specs
│   │   ├── login_page.js
│   │   ├── cadastro_user_page.js
│   │   └── home_page.js
│   ├── commands.js
│   └── e2e.js
└── fixtures/
cypress.config.js                # baseUrl e timeout padrão
```

Os page objects concentram seletores e ações: uma mudança de layout na aplicação é corrigida em um único arquivo, sem tocar nas specs.

## Como executar

Requer Node.js instalado.

```bash
git clone https://github.com/guilhermeQA7/cypress-e2e-autenticacao.git
cd cypress-e2e-autenticacao
npm install
```

Modo interativo:

```bash
npx cypress open
```

Modo headless:

```bash
npx cypress run
```

## Autor

Guilherme Martins — [GitHub](https://github.com/guilhermeQA7) · [LinkedIn](https://www.linkedin.com/in/guilherme-martins-33892438a)
