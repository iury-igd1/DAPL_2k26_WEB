/* 
    Desafio - Jogo da Cobrinha
    Código formatado utilizando a extensão 'Prettier'.
*/

var canvas = document.querySelector('canvas')

var TAMANHO_CELULA = 20 // Cada quadradinho do grid tem 20x20 px

// O tabuleiro será o maior múltiplo de TAMANHO_CELULA que cabe na tela
var colunas = Math.floor((window.innerWidth - 20) / TAMANHO_CELULA)
var linhas = Math.floor((window.innerHeight - 150) / TAMANHO_CELULA)

canvas.width = colunas * TAMANHO_CELULA
canvas.height = linhas * TAMANHO_CELULA

var c = canvas.getContext('2d')
var placar = document.getElementById('placar')

// A cobra é um array de células {x, y}. O primeiro item é sempre a cabeça
var cobra = []
var direcao = { x: 1, y: 0 } // Começa andando para a direita
var proximaDirecao = { x: 1, y: 0 }

var comida = { x: 0, y: 0 }
var pontos = 0
var jogoAcabou = false

var INTERVALO_MS = 110 // Velocidade do jogo: quanto menor, mais rápido
var loopId = null

// Cria a cobra inicial no meio do tabuleiro, com 3 segmentos
function iniciarJogo() {
    var meioX = Math.floor(colunas / 2)
    var meioY = Math.floor(linhas / 2)

    cobra = [
        { x: meioX, y: meioY },
        { x: meioX - 1, y: meioY },
        { x: meioX - 2, y: meioY },
    ]

    direcao = { x: 1, y: 0 }
    proximaDirecao = { x: 1, y: 0 }
    pontos = 0
    jogoAcabou = false
    atualizarPlacar()

    posicionarComida()

    if (loopId !== null) clearInterval(loopId)
    loopId = setInterval(passo, INTERVALO_MS)
}

// Coloca a comida em uma célula aleatória que não esteja ocupada pela cobra
function posicionarComida() {
    var livre = false
    var x, y

    while (!livre) {
        x = Math.floor(Math.random() * colunas)
        y = Math.floor(Math.random() * linhas)
        livre = true

        for (var i = 0; i < cobra.length; i++) {
            if (cobra[i].x === x && cobra[i].y === y) {
                livre = false
                break
            }
        }
    }

    comida.x = x
    comida.y = y
}

function atualizarPlacar() {
    placar.textContent = 'Pontos: ' + pontos
}

// Lê o teclado e guarda a próxima direção, sem deixar a cobra reverter direto sobre o próprio corpo
document.addEventListener('keydown', function (event) {
    if (jogoAcabou) {
        // Qualquer tecla depois do "Game Over" reinicia o jogo
        iniciarJogo()
        return
    }

    if (event.key === 'ArrowUp' && direcao.y === 0) {
        proximaDirecao = { x: 0, y: -1 }
    } else if (event.key === 'ArrowDown' && direcao.y === 0) {
        proximaDirecao = { x: 0, y: 1 }
    } else if (event.key === 'ArrowLeft' && direcao.x === 0) {
        proximaDirecao = { x: -1, y: 0 }
    } else if (event.key === 'ArrowRight' && direcao.x === 0) {
        proximaDirecao = { x: 1, y: 0 }
    }
})

// Executa um "tick" do jogo: anda uma célula, verifica colisões e comida
function passo() {
    direcao = proximaDirecao

    var cabecaAtual = cobra[0]
    var novaCabeca = { x: cabecaAtual.x + direcao.x, y: cabecaAtual.y + direcao.y }

    // Colisão com a parede
    if (novaCabeca.x < 0 || novaCabeca.x >= colunas || novaCabeca.y < 0 || novaCabeca.y >= linhas) {
        fimDeJogo()
        return
    }

    // Colisão com o próprio corpo
    for (var i = 0; i < cobra.length; i++) {
        if (cobra[i].x === novaCabeca.x && cobra[i].y === novaCabeca.y) {
            fimDeJogo()
            return
        }
    }

    cobra.unshift(novaCabeca) // Adiciona a nova cabeça na frente

    if (novaCabeca.x === comida.x && novaCabeca.y === comida.y) {
        // Comeu a bolinha: cresce e gera comida nova
        pontos++
        atualizarPlacar()
        posicionarComida()
    } else {
        cobra.pop() // Não cresceu: remove o último segmento do rabo
    }

    desenhar()
}

function fimDeJogo() {
    jogoAcabou = true
    clearInterval(loopId)

    c.fillStyle = 'rgba(0, 0, 0, 0.7)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.fillStyle = 'white'
    c.font = 'bold 28px Arial'
    c.textAlign = 'center'
    c.fillText('FIM DE JOGO', canvas.width / 2, canvas.height / 2 - 10)

    c.font = '16px Arial'
    c.fillText('Pressione qualquer tecla para jogar novamente', canvas.width / 2, canvas.height / 2 + 20)
}

function desenhar() {
    c.clearRect(0, 0, canvas.width, canvas.height)

    // Comida
    c.fillStyle = 'rgb(247, 34, 34)'
    c.fillRect(comida.x * TAMANHO_CELULA, comida.y * TAMANHO_CELULA, TAMANHO_CELULA, TAMANHO_CELULA)

    // Corpo da cobra (a cabeça fica um pouco mais clara para se destacar)
    for (var i = 0; i < cobra.length; i++) {
        c.fillStyle = i === 0 ? 'rgb(120, 255, 150)' : 'rgb(34, 200, 98)'
        c.fillRect(
            cobra[i].x * TAMANHO_CELULA,
            cobra[i].y * TAMANHO_CELULA,
            TAMANHO_CELULA - 1,
            TAMANHO_CELULA - 1,
        )
    }
}

iniciarJogo()
desenhar()
