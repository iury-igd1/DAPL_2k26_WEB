/* 
    Canvas - parte 1

    Exercício: 
        10 quadrados + 10 retas + 30 círculos, todos com posição, velocidade e cor aleatórias a cada vez 
        que a página recarrega. Os objetos devem colidir nas bordas do Canvas.
        Código formatado utilizando a extensão 'Prettier'.
*/

var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

// Quantidades de cada objeto
var QTD_QUADRADOS = 10
var QTD_RETAS = 10
var QTD_CIRCULOS = 30

// Tamanhos fixos para quadrados e retas
var TAMANHO_QUADRADO = 80
var TAMANHO_RETA = 120

// Limite de tamanho dos círculos (raios mínimo e máximo)
var RAIO_MIN = 10
var RAIO_MAX = 80

// Sorteia um numero entre min e max
function sortear(min, max) {
    return Math.random() * (max - min) + min
}

// Sorteia uma cor aleatória no formato rgb
function sortearCor() {
    var r = Math.floor(sortear(0, 255))
    var g = Math.floor(sortear(0, 255))
    var b = Math.floor(sortear(0, 255))
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

// ---------- Quadrados ----------
var quadrados = []
for (var i = 0; i < QTD_QUADRADOS; i++) {
    quadrados.push({
        x: sortear(0, canvas.width - TAMANHO_QUADRADO),
        y: sortear(0, canvas.height - TAMANHO_QUADRADO),
        dx: sortear(-3, 3),
        dy: sortear(-3, 3),
        cor: sortearCor(),
    })
}

// ---------- Retas ----------
// Cada reta tem um ponto inicial (x, y) e um ângulo fixo que define para onde a ponta final da linha aponta
var retas = []
for (var i = 0; i < QTD_RETAS; i++) {
    retas.push({
        x: sortear(0, canvas.width),
        y: sortear(0, canvas.height),
        dx: sortear(-3, 3),
        dy: sortear(-3, 3),
        angulo: sortear(0, Math.PI * 2),
        cor: sortearCor(),
    })
}

// ---------- Círculos ----------
var circulos = []
for (var i = 0; i < QTD_CIRCULOS; i++) {
    circulos.push({
        raio: sortear(RAIO_MIN, RAIO_MAX),
        x: 0, // A posição inicial é definida depois, considerando o raio
        y: 0,
        dx: sortear(-3, 3),
        dy: sortear(-3, 3),
        cor: sortearCor(),
    })
    // Posiciona o círculo garantindo que ele nasça dentro do Canvas
    circulos[i].x = sortear(circulos[i].raio, canvas.width - circulos[i].raio)
    circulos[i].y = sortear(circulos[i].raio, canvas.height - circulos[i].raio)
}

// Atualiza a posição de um quadrado e inverte a direção ao bater na borda
function moverQuadrado(q) {
    q.x += q.dx
    q.y += q.dy

    if (q.x <= 0 || q.x + TAMANHO_QUADRADO >= canvas.width) {
        q.dx = -q.dx
    }
    if (q.y <= 0 || q.y + TAMANHO_QUADRADO >= canvas.height) {
        q.dy = -q.dy
    }
}

// Atualiza a posição de uma reta e inverte a direção ao bater na borda
function moverReta(r) {
    r.x += r.dx
    r.y += r.dy

    if (r.x <= 0 || r.x >= canvas.width) {
        r.dx = -r.dx
    }
    if (r.y <= 0 || r.y >= canvas.height) {
        r.dy = -r.dy
    }
}

// Atualiza a posição de um círculo e inverte a direção ao bater na borda
// O raio entra na conta, já que o "limite" do círculo não é x/y
function moverCirculo(cir) {
    cir.x += cir.dx
    cir.y += cir.dy

    if (cir.x - cir.raio <= 0 || cir.x + cir.raio >= canvas.width) {
        cir.dx = -cir.dx
    }
    if (cir.y - cir.raio <= 0 || cir.y + cir.raio >= canvas.height) {
        cir.dy = -cir.dy
    }
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    // Quadrados
    for (var i = 0; i < quadrados.length; i++) {
        moverQuadrado(quadrados[i])
        c.fillStyle = quadrados[i].cor
        c.fillRect(quadrados[i].x, quadrados[i].y, TAMANHO_QUADRADO, TAMANHO_QUADRADO)
    }

    // Retas
    for (var i = 0; i < retas.length; i++) {
        moverReta(retas[i])

        var r = retas[i]
        var x2 = r.x + Math.cos(r.angulo) * TAMANHO_RETA
        var y2 = r.y + Math.sin(r.angulo) * TAMANHO_RETA

        c.beginPath()
        c.moveTo(r.x, r.y)
        c.lineTo(x2, y2)
        c.strokeStyle = r.cor
        c.stroke()
    }

    // Círculos
    for (var i = 0; i < circulos.length; i++) {
        moverCirculo(circulos[i])

        c.beginPath()
        c.arc(circulos[i].x, circulos[i].y, circulos[i].raio, 0, Math.PI * 2)
        c.strokeStyle = circulos[i].cor
        c.stroke()
    }
}

animate()
