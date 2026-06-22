/* 
    Canvas - parte 2

    Exercício: 
        2 quadrados de cores diferentes (um se move na horizontal, o outro na vertical), com um botão para 
        pausar/retomar e um slider para controlar a velocidade dos dois ao mesmo tempo.
        Código formatado utilizando a extensão 'Prettier'.
*/

var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight - 120 // Sobra de espaço para o painel de controle
var c = canvas.getContext('2d')

// Velocidade atual (vem do slider) e verificação se a animação está pausada
var velocidade = 10
var pausado = false

// Guardam o "sentido" do movimento de cada quadrado (1 ou -1), separado da velocidade. Assim, ao mudar o
// slider ou pausar/retomar, o quadrado continua andando para o mesmo lado em que estava
var sentidoX1 = 1 // quadrado 1 (se move na horizontal)
var sentidoY2 = 1 // quadrado 2 (se move na vertical)

var x1 = 50
var y1 = 100

// Chamada pelo slider. Só atualiza o valor da velocidade, sem alterar o sentido em que cada um está andando
function atualizarValor() {
    var slider = document.getElementById('slider')
    velocidade = parseInt(slider.value)
}

// Chamada pelo botão Parar/Iniciar. Apenas alterna o estado de pausa, preservando velocidade e sentido
function animacao() {
    pausado = !pausado
}

function animate() {
    requestAnimationFrame(animate)

    // Quanto cada quadrado deve andar por frame (0 se estiver pausado)
    var passo = pausado ? 0 : velocidade

    // ---------- Quadrado 1 (horizontal) ----------
    c.clearRect(0, canvas.height / 2 - 50, canvas.width, 100)
    c.fillStyle = 'rgba(15, 218, 245, 1)'
    c.fillRect(x1, canvas.height / 2 - 50, 100, 100)

    x1 += passo * sentidoX1
    if (x1 + 100 >= canvas.width) {
        x1 = canvas.width - 100
        sentidoX1 = -1
    } else if (x1 <= 0) {
        x1 = 0
        sentidoX1 = 1
    }

    // ---------- Quadrado 2 (vertical) ----------
    c.clearRect(canvas.width / 2 - 50, 0, 100, canvas.height / 2 - 50)
    c.clearRect(canvas.width / 2 - 50, canvas.height / 2 + 50, 100, canvas.height / 2 - 50)
    c.fillStyle = 'rgb(247, 25, 25)'
    c.fillRect(canvas.width / 2 - 50, y1, 100, 100)

    y1 += passo * sentidoY2
    if (y1 + 100 >= canvas.height) {
        y1 = canvas.height - 100
        sentidoY2 = -1
    } else if (y1 <= 0) {
        y1 = 0
        sentidoY2 = 1
    }
}

animate()
