/*
Exercício:
    
    Desenvolva um servidor que implemente um jogo de adivinhação entre cliente e servidor.
    Requisitos:
        - Uma página HTML (frontend) contendo uma caixa de texto para o usuário digitar um número e um botão 
          para enviar esse número ao servidor. Quando o usuário clicar no botão, o número digitado deverá ser 
          enviado para um endpoint do servidor chamado /guess.
        - No servidor, deve ser gerado um número aleatório entre 0 e 100, que será o número secreto do jogo. 
        - Ao receber uma tentativa no endpoint /guess, o servidor deverá comparar o número enviado pelo usuário 
          com o número secreto e retornar uma resposta em plain text informando se o número digitado é:
            > maior que o número secreto;
            > menor que o número secreto;
            > ou igual, caso o usuário acerte.
        - O jogo deve ser implementado de forma completa, mantendo a interação entre cliente e servidor, 
          permitindo que o usuário continue tentando adivinhar o número. 
        - O jogador terá no máximo 5 tentativas para acertar.
        - Ao final do jogo:
            > se o usuário acertar o número antes de esgotar as 5 tentativas, o servidor deverá retornar 
              uma página HTML de vitória, contendo uma animação de comemoração;
            > se o usuário não acertar após 5 tentativas, o servidor deverá retornar uma página HTML de 
              derrota (game over), também com uma animação apropriada.
*/
