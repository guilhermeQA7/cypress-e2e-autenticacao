export default{
    acessarCadastroUsuario(){
        cy.visit('/')  //acessa a página inicial
            .get('#top_header') //verifica se o header carregou

        cy.get('.fa-lock') //clica no ícone de cadastro/login
            .click()    
    },
    acessarLoginUser(){
        //acessa a página inicial
        cy.visit('/')
            .get('#top_header')
        //clica no ícone de login    
        cy.get('.fa-user')
            .click()    
    }
}