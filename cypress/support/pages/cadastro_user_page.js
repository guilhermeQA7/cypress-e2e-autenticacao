export default {
    clicarCadastrar(){
        cy.get('#btnRegister') //busca o botão de cadastrar e clica
            .click()    
    },
    validarMensagemErro(mensagem){
        cy.get('.errorLabel') //busca o elemento de mensagem de erro
             .should ('be.visible') //verifica se está visível na tela
             .should ('have.text', mensagem )   //verifica se o texto é igual ao esperado
    },

    preencheNome(nome) {
        //busca o campo nome e digita o valor recebido
        cy.get('#user')
            .type(nome)

    },

    preencheEmail(Email){
        //busca o campo email e digita o valor recebido
        cy.get('#email')
             .type(Email)   

    },
    preencheSenha(senha){
        //busca o campo senha e digita o valor recebido
        cy.get('#password')
            .type(senha)

    },
    validarMensagemSucess(mensagem){
        //busca o elemento de mensagem de sucesso
        cy.get('.swal2-title')
            .should('have.text', mensagem)//verifica se o texto é igual ao esperado

    }
}