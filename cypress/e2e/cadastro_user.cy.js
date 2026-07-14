import commum_page from '../support/pages/commum_page'  //importa a page de ações comuns
import cadastro_user_page from '../support/pages/cadastro_user_page' //importa a page de cadastro
import { faker } from '@faker-js/faker'

describe('Cadastro de usuario', () => {
    beforeEach('Acessar tela de cadastro', () => {
        commum_page.acessarCadastroUsuario() //antes de cada teste acessa a tela de cadastro
    })

    it('Campo Nome Vazio', () => {
        cadastro_user_page.clicarCadastrar() //clica em cadastrar sem preencher nada
        cadastro_user_page.validarMensagemErro ('O campo nome deve ser prenchido') //valida a mensagem de erro do campo nome
    })
    it('Campo Email Vazio', () => {
        cadastro_user_page.preencheNome ('Mr Thug')//preenche apenas o nome
        cadastro_user_page.clicarCadastrar()//clica em cadastrar sem preencher o email
        cadastro_user_page.validarMensagemErro ('O campo e-mail deve ser prenchido corretamente')//valida a mensagem de erro do campo email

    })
    it('Campo Email Invalido', () => {
        cadastro_user_page.preencheNome('Mr tHug')//preenche o nome
        cadastro_user_page.preencheEmail('thughtuggmail.com')//preenche o email com valor inválido
        cadastro_user_page.clicarCadastrar()//clica em cadastrar
        cadastro_user_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente') //valida a mensagem de erro do campo email


    })
    it('Campo Senha Vazio', () => {
        cadastro_user_page.preencheNome('Mr Thug')//preenche o nome
        cadastro_user_page.preencheEmail('Thug@gmail.com')//preenche o email
        cadastro_user_page.clicarCadastrar()//clica em cadastrar sem preencher a senha
        cadastro_user_page.clicarCadastrar('O campo senha deve ter pelo menos 6 dígitos')//valida a mensagem de erro do campo senha

    })
    it('Campo Senha invalido', () => {
        cadastro_user_page.preencheNome("Mr Thug")//preenche o nome
        cadastro_user_page.preencheEmail("thug@gmail.com")//preenche o email
        cadastro_user_page.preencheSenha("1234")//preenche a senha com valor inválido
        cadastro_user_page.clicarCadastrar()//clica em cadastrar
        cadastro_user_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')//valida a mensagem de erro do campo senha

    })
    it('Cadastro Com Sucesso', () => {
        cadastro_user_page.preencheNome ('Mr Thug')//preenche o nome
        cadastro_user_page.preencheEmail ("thug@gmail.com")//preenche o email com dado aleatório do faker
        cadastro_user_page.preencheSenha ('34245023')//preenche a senha
        cadastro_user_page.clicarCadastrar ()//clica em cadastrar
        cadastro_user_page.validarMensagemSucess('Cadastro realizado!')//valida a mensagem de sucesso
       

    })
})