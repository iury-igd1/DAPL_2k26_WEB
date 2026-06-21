/* 
    Jogo - Arena Gravitacional

    Cada jogador controla a gravidade do seu personagem (W/S para o player 1, setas Cima/Baixo para o 
    player 2) e precisa se esquivar de bombas que saem do centro da arena em direções aleatórias. Quem 
    tocar em uma bomba ou nas bordas laterais perde. Pode ser jogado sozinho (modo 1, contra o tempo) ou 
    com 2 jogadores no mesmo teclado (modo 2, até alguem perder).
    Código formatado utilizando a extensão 'Prettier'.
*/

var canvas = document.querySelector('canvas')
canvas.width = 800
canvas.height = 500
var c = canvas.getContext('2d')

var modo = 0 // 0 = menu, 1 = 1 player, 2 = 2 players

function escolherModo(num) {
    modo = num
    document.getElementById('menuBotoes').style.display = 'none'
}

function reiniciar() {
    // Volta cada variável ao valor inicial do jogo
    px1 = 150
    py1 = 250
    gravidade1 = 1
    impulsoX1 = 0

    px2 = 650
    py2 = 250
    gravidade2 = 1
    impulsoX2 = 0

    listaBombas = []
    frames = 0
    tempoVivo = 0
    tempoBomba = 0
    freq = 100

    fimDeJogo = false
    vencedor = ''

    modo = 0
    document.getElementById('menuBotoes').style.display = 'block'
    document.getElementById('menuReiniciar').style.display = 'none'
}

var teclas = {}
window.addEventListener('keydown', function (event) {
    teclas[event.key] = true
})
window.addEventListener('keyup', function (event) {
    teclas[event.key] = false
})

var px1 = 150 // Posição inicial do player 1
var py1 = 250
var gravidade1 = 1 // 1 para cair, -1 para subir
var impulsoX1 = 0

var px2 = 650 // Posição inicial do player 2
var py2 = 250
var gravidade2 = 1 // 1 para cair, -1 para subir
var impulsoX2 = 0

var listaBombas = []

var frames = 0
var tempoVivo = 0
var tempoBomba = 0 // Tempo desde a última bomba
var freq = 100 // Tempo entre as bombas

var fimDeJogo = false
var vencedor = ''

function animate() {
    requestAnimationFrame(animate)

    // Enquanto nenhum modo foi escolhido, só mostra a mensagem de menu
    if (modo == 0) {
        c.fillStyle = '#333'
        c.fillRect(0, 0, canvas.width, canvas.height)
        c.fillStyle = 'white'
        c.font = '20px Arial'
        c.textAlign = 'center'
        c.fillText('Escolha o modo de jogo nos botões acima para começar!', 400, 250)
        return
    }

    c.clearRect(0, 20, canvas.width, canvas.height - 40)

    if (fimDeJogo == false) {
        frames++
        if (frames % 60 == 0) {
            // 60 fps
            tempoVivo++
        }
    }

    c.fillStyle = 'gray'
    c.fillRect(0, 0, canvas.width, 20)
    c.fillRect(0, canvas.height - 20, canvas.width, 20)

    c.fillStyle = 'black'
    for (var i = 20; i < canvas.height - 20; i += 20) {
        // Espinhos da esquerda
        c.beginPath()
        c.moveTo(0, i)
        c.lineTo(20, i + 10)
        c.lineTo(0, i + 20)
        c.fill()
    }
    for (var i = 20; i < canvas.height - 20; i += 20) {
        // Espinhos da direita
        c.beginPath()
        c.moveTo(800, i)
        c.lineTo(780, i + 10)
        c.lineTo(800, i + 20)
        c.fill()
    }

    if (fimDeJogo == false) {
        tempoBomba++
    }
    var emAviso = false // Pisca o centro da tela para avisar que uma bomba vai aparecer

    if (tempoBomba > freq - 60) {
        emAviso = true
    }

    if (tempoBomba >= freq && fimDeJogo == false) {
        var quantidade = Math.floor(Math.random() * 7) + 4 // Gera de 4 a 10 bombas

        for (var k = 0; k < quantidade; k++) {
            var angulo = Math.random() * Math.PI * 2 // Gera um ângulo aleatório de 0 a 360 para a direção da bomba
            var velocidade = 4.5 + tempoVivo * 0.05 // Quanto mais tempo sobrevive, mais rápidas ficam as bombas

            listaBombas.push({
                // Criar movimento
                x: 394, // Spawna no centro
                y: 244,
                vx: Math.cos(angulo) * velocidade, // Eixo horizontal
                vy: Math.sin(angulo) * velocidade, // Eixo vertical
            })
        }

        tempoBomba = 0
        if (freq > 40) {
            freq -= 8 // Diminui o tempo entre as bombas para aumentar a dificuldade
        }
    }

    if (emAviso && tempoBomba % 20 < 10 && fimDeJogo == false) {
        c.fillStyle = 'red'
    } else {
        c.fillStyle = 'orange'
    }
    c.beginPath()
    c.arc(400, 250, 25, 0, Math.PI * 2)
    c.fill()

    if (fimDeJogo) {
        // Tela de fim de jogo
        c.fillStyle = 'black'
        c.fillRect(0, 0, canvas.width, canvas.height)
        c.fillStyle = 'white'
        c.font = '30px Arial'
        c.textAlign = 'center'
        c.fillText('GAME OVER', 400, 200)

        if (modo == 1) {
            c.fillText('Você sobreviveu por: ' + tempoVivo + ' segundos', 400, 270)
        } else {
            if (vencedor == 'Player 1') {
                c.fillStyle = 'red'
            } else {
                c.fillStyle = 'cyan'
            }
            c.fillText(vencedor.toUpperCase() + ' VENCEU!', 400, 270)
            c.fillStyle = 'white'
            c.fillText('Tempo de jogo: ' + tempoVivo + 's', 400, 330)
        }

        document.getElementById('menuReiniciar').style.display = 'block'
        return
    }

    c.fillStyle = 'yellow'
    for (var i = listaBombas.length - 1; i >= 0; i--) {
        var b = listaBombas[i]

        if (fimDeJogo == false) {
            b.x += b.vx
            b.y += b.vy
        }

        c.fillRect(b.x, b.y, 12, 12)

        if (b.x < 0 || b.x > canvas.width || b.y < 0 || b.y > canvas.height) {
            listaBombas.splice(i, 1)
        } else {
            if (
                px1 + 25 > b.x && // Verifica se as bombas colidiram com o player
                px1 < b.x + 12 &&
                py1 + 25 > b.y &&
                py1 < b.y + 12
            ) {
                fimDeJogo = true
                vencedor = 'Player 2'
            }

            if (modo == 2) {
                if (px2 + 25 > b.x && px2 < b.x + 12 && py2 + 25 > b.y && py2 < b.y + 12) {
                    fimDeJogo = true
                    vencedor = 'Player 1'
                }
            }
        }
    }

    if (teclas['w'] || teclas['W']) gravidade1 = -1
    if (teclas['s'] || teclas['S']) gravidade1 = 1
    if (teclas['a'] || teclas['A']) px1 -= 8
    if (teclas['d'] || teclas['D']) px1 += 8

    // px1/py1 são atualizados pela gravidade (puxa pra cima ou pra baixo, dependendo da última tecla
    // W/S apertada) e pelo impulso do empurrão entre os jogadores (impulsoX1)
    px1 += impulsoX1
    py1 += 9 * gravidade1

    if (py1 <= 20) py1 = 20 // Impede o player de sair da tela
    if (py1 + 25 >= 480) py1 = 455

    if (px1 <= 20 || px1 + 25 >= 780) {
        // Se tocar nas bordas, o outro jogador vence
        fimDeJogo = true
        vencedor = 'Player 2'
    }

    c.fillStyle = 'red'
    c.fillRect(px1, py1, 25, 25)

    if (modo == 2) {
        if (teclas['ArrowUp']) gravidade2 = -1
        if (teclas['ArrowDown']) gravidade2 = 1
        if (teclas['ArrowLeft']) px2 -= 8
        if (teclas['ArrowRight']) px2 += 8

        px2 += impulsoX2
        py2 += 9 * gravidade2

        if (py2 <= 20) py2 = 20
        if (py2 + 25 >= 480) py2 = 455

        if (px2 <= 20 || px2 + 25 >= 780) {
            fimDeJogo = true
            vencedor = 'Player 1'
        }

        c.fillStyle = 'cyan'
        c.fillRect(px2, py2, 25, 25)

        // Verifica se os dois players estão no mesmo lugar
        if (px1 + 25 > px2 && px1 < px2 + 25 && py1 + 25 > py2 && py1 < py2 + 25) {
            if (px1 < px2) {
                var invasaoX = px1 + 25 - px2 // Quantos pixels um jogador invadiu o outro
                px1 -= invasaoX / 2
                px2 += invasaoX / 2
                impulsoX1 = -22 // Aplica um empurrão para afastar os jogadores
                impulsoX2 = 22
            } else {
                var invasaoX = px2 + 25 - px1
                px1 += invasaoX / 2
                px2 -= invasaoX / 2
                impulsoX1 = 22
                impulsoX2 = -22
            }
        }
    }

    impulsoX1 *= 0.92 // Reduz o impulso aos poucos para perder velocidade
    impulsoX2 *= 0.92

    c.fillStyle = 'white'
    c.font = 'bold 16px Arial'
    c.textAlign = 'center'
    c.fillText('TEMPO: ' + tempoVivo + 's', 400, 42)
}

animate()
