import commum_page from '../support/pages/commum_page'
import cadastro_user_page from '../support/pages/cadastro_user_page'
import login_page from '../support/pages/login_page'

describe('Fluxo de Login', () =>{

    beforeEach('Acessar tela de Login',() =>{
        //clica em login sem preencher nada
        commum_page.acessarLoginUser()

    })
    it('Email Vazio' , () => {
        //clica em login sem preencher nada
        login_page.clicarLogin()
        //valida a mensagem de erro do campo email
        login_page.validarMensagemErro('E-mail inválido.')

    })
    it('Senha Vazia' , () => {
        //preenche email
        login_page.preencheEmail('thug@gmail.com')
        //clicar no botao login
        login_page.clicarLogin()
        //valida mensagem de erro
        login_page.validarMensagemErro('Senha inválida.')

    })
    it('Email Invalido' , () => {
        login_page.preencheEmail('thug')
        login_page.preencheSenha('34245023')
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')

    })
    it('Login Com Sucesso' , () => {
        login_page.preencheEmail('thug@gmail.com')
        login_page.preencheSenha('34245023')
        login_page.clicarLogin()
        login_page.validarMensagemSucess('Login realizado')

    })
})