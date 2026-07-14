export default{
    clicarLogin(){
        //clica no botão de login
        cy.get('#btnLogin')
            .click()
    },
    validarMensagemErro(mensagem){
        //busca o elemento de mensagem de erro do login
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text',mensagem)

    },
    validarMensagemSucess(){
        //busca o elemento de mensagem de sucesso
        cy.get('.swal2-title')
            .should('have.text','Login realizado')       
    },
    preencheEmail(email){
        cy.get('#user')
            .type(email)
    },
    preencheSenha(senha){
        cy.get('#password')
            .type(senha)
    }
}