import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker'
import commum_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page'
import cadastro_user_page from '../support/pages/cadastro_user_page'

// Contexto

Given('que acesso a tela de login', () => {
    commum_page.acessarLoginUser()
})

Given('que acesso a tela de cadastro', () => {
    commum_page.acessarCadastroUsuario()
})

// Login

When('preencho o email {string}', (email) => {
    login_page.preencheEmail(email)
})

When('preencho a senha {string}', (senha) => {
    login_page.preencheSenha(senha)
})

When('clico no botão de login', () => {
    login_page.clicarLogin()
})

Then('vejo a mensagem de erro de login {string}', (mensagem) => {
    login_page.validarMensagemErro(mensagem)
})

Then('vejo a mensagem de sucesso {string}', () => {
    login_page.validarMensagemSucess()
})

// Cadastro

When('preencho o nome {string}', (nome) => {
    cadastro_user_page.preencheNome(nome)
})

When('preencho o email de cadastro {string}', (email) => {
    cadastro_user_page.preencheEmail(email)
})

When('preencho o email de cadastro com um endereço aleatório', () => {
    cadastro_user_page.preencheEmail(faker.internet.email())
})

When('preencho a senha de cadastro {string}', (senha) => {
    cadastro_user_page.preencheSenha(senha)
})

When('clico no botão de cadastrar', () => {
    cadastro_user_page.clicarCadastrar()
})

Then('vejo a mensagem de erro de cadastro {string}', (mensagem) => {
    cadastro_user_page.validarMensagemErro(mensagem)
})

Then('vejo a mensagem de sucesso de cadastro {string}', (mensagem) => {
    cadastro_user_page.validarMensagemSucess(mensagem)
})
