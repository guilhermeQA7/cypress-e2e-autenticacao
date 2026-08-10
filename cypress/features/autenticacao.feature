# language: pt
@auth
Funcionalidade: Autenticação
  Como usuário do site
  Quero me cadastrar e fazer login
  Para acessar minha conta

  Regra: Login

    Contexto:
      Dado que acesso a tela de login

    @smoke @auth
    Cenário: Login com sucesso
      Quando preencho o email "thug@gmail.com"
      E preencho a senha "34245023"
      E clico no botão de login
      Então vejo a mensagem de sucesso "Login realizado"

    @regression @auth
    Cenário: Email vazio ao logar
      Quando clico no botão de login
      Então vejo a mensagem de erro de login "E-mail inválido."

    @regression @auth
    Cenário: Senha vazia ao logar
      Quando preencho o email "thug@gmail.com"
      E clico no botão de login
      Então vejo a mensagem de erro de login "Senha inválida."

    @regression @auth
    Cenário: Email inválido ao logar
      Quando preencho o email "thug"
      E preencho a senha "34245023"
      E clico no botão de login
      Então vejo a mensagem de erro de login "E-mail inválido."

  Regra: Cadastro de usuário

    Contexto:
      Dado que acesso a tela de cadastro

    @smoke @auth
    Cenário: Cadastro com sucesso
      Quando preencho o nome "Mr Thug"
      E preencho o email de cadastro com um endereço aleatório
      E preencho a senha de cadastro "34245023"
      E clico no botão de cadastrar
      Então vejo a mensagem de sucesso de cadastro "Cadastro realizado!"

    @regression @auth
    Cenário: Campo nome vazio ao cadastrar
      Quando clico no botão de cadastrar
      Então vejo a mensagem de erro de cadastro "O campo nome deve ser prenchido"

    @regression @auth
    Cenário: Campo email vazio ao cadastrar
      Quando preencho o nome "Mr Thug"
      E clico no botão de cadastrar
      Então vejo a mensagem de erro de cadastro "O campo e-mail deve ser prenchido corretamente"

    @regression @auth
    Cenário: Campo email inválido ao cadastrar
      Quando preencho o nome "Mr tHug"
      E preencho o email de cadastro "thughtuggmail.com"
      E clico no botão de cadastrar
      Então vejo a mensagem de erro de cadastro "O campo e-mail deve ser prenchido corretamente"

    @regression @auth
    Cenário: Campo senha vazio ao cadastrar
      Quando preencho o nome "Mr Thug"
      E preencho o email de cadastro "Thug@gmail.com"
      E clico no botão de cadastrar
      Então vejo a mensagem de erro de cadastro "O campo senha deve ter pelo menos 6 dígitos"

    @regression @auth
    Cenário: Campo senha inválido ao cadastrar
      Quando preencho o nome "Mr Thug"
      E preencho o email de cadastro "thug@gmail.com"
      E preencho a senha de cadastro "1234"
      E clico no botão de cadastrar
      Então vejo a mensagem de erro de cadastro "O campo senha deve ter pelo menos 6 dígitos"
