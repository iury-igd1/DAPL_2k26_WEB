var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var teclas = {}

var x = 200;
var y = 200;
var bx = 100;
var by = 100;
var velocidade = 5;
var b = 1;

document.addEventListener("keydown", (event) => {
    teclas[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    teclas[event.key] = false;
});

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(x, y, b*30, 30);
    c.fillStyle = 'rgb(34, 247, 98)';
    if (teclas["ArrowUp"])
        y -= velocidade;
    if (teclas["ArrowDown"])
        y += velocidade;
    if (teclas["ArrowLeft"])
        x -= velocidade;
    if (teclas["ArrowRight"])        
        x += velocidade;
    c.fillRect(x, y, b*30, 30);
}

function bolinhas() {
    bx = Math.floor(Math.random() * canvas.width);
    by = Math.floor(Math.random() * canvas.height);
    c.fillStyle = 'rgb(247, 34, 34)';
    c.fillRect(bx, by, 20, 20);
}

function crescer() {
    if (x < bx + 20 && x + 30 > bx && y < by + 20 && y + 30 > by) {
        b+=1;
        bolinhas();
    }
}

animate();
bolinhas();
setInterval(crescer, 100);