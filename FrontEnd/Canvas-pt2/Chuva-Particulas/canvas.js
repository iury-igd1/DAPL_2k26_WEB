/* 
    Desafio - Chuva de Partículas

    A cada movimento do mouse, nascem particulas que "caem" com gravidade, como uma chuva, 
    acompanhando para onde o cursor vai.
    Código formatado utilizando a extensão 'Prettier'.
*/

var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

// Posição atual do mouse na tela
var mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
}

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x
    mouse.y = event.y
})

// Paleta de cores das partículas
var coresChuva = ['#9FD8FF', '#6FB8F2', '#3E8EDE', '#1F5FA8', '#FFFFFF']

var GRAVIDADE = 0.15 // O quanto a partícula acelera para baixo a cada frame
var PARTICULAS_POR_MOVIMENTO = 3 // Quantas partículas nascem a cada movimento do mouse

// Construtor de uma partícula individual
function Particula(x, y, dx, dy, tamanho, cor) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.tamanho = tamanho
    this.cor = cor
    this.vida = 1 // Começa em 1 (100% visível) e vai diminuindo

    this.draw = function () {
        c.globalAlpha = this.vida
        c.fillStyle = this.cor
        c.fillRect(this.x, this.y, this.tamanho, this.tamanho)
        c.globalAlpha = 1
    }

    this.update = function () {
        this.dy += GRAVIDADE // Efeito de gravidade puxando a partícula para baixo
        this.x += this.dx
        this.y += this.dy

        this.vida -= 0.015 // A partícula vai sumindo

        this.draw()
    }
}

var particulas = []

// A cada movimento do mouse, cria algumas partículas novas na posição dele
window.addEventListener('mousemove', function () {
    for (var i = 0; i < PARTICULAS_POR_MOVIMENTO; i++) {
        var dx = (Math.random() - 0.5) * 3
        var dy = Math.random() * 1.5 // Começa caindo bem devagar
        var tamanho = Math.random() * 5 + 2
        var cor = coresChuva[Math.floor(Math.random() * coresChuva.length)]

        particulas.push(new Particula(mouse.x, mouse.y, dx, dy, tamanho, cor))
    }
})

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    // Percorre de trás para frente para poder remover sem pular nenhum item da lista
    for (var i = particulas.length - 1; i >= 0; i--) {
        var p = particulas[i]
        p.update()

        // Remove a partícula quando ela "morre" (sem vida) ou sai da tela
        if (p.vida <= 0 || p.y > canvas.height) {
            particulas.splice(i, 1)
        }
    }
}

animate()
