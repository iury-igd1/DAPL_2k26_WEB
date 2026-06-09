var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 120;

var c = canvas.getContext('2d');

function atualizarValor() {
    var slider = document.getElementById('slider');
    dx = parseInt(slider.value);
    dy = parseInt(slider.value);
}

function animacao() {
    if (dx === 0 && dy === 0) {
        dx = 10;
        dy = 10;
    } 
    else {
        dx = 0;
        dy = 0;
    }
}

var x1 = 50;
var y1 = 100;
dx = 10;
dy = 10;

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, canvas.height / 2 - 50, canvas.width, 100);
    c.fillStyle = 'rgba(15, 218, 245, 1)';
    c.fillRect(x1, canvas.height / 2 - 50, 100, 100);

    x1 += dx;
    if (x1 + 100 >= canvas.width) {
        dx = -dx;
    } 
    else if (x1 <= 0) {
        dx = -dx;
    }

    c.clearRect(canvas.width / 2 - 50, 0, 100, canvas.height / 2 - 50);
    c.clearRect(canvas.width / 2 - 50, canvas.height / 2 + 50, 100, canvas.height / 2 - 50);
    c.fillStyle = 'rgb(247, 25, 25)';
    c.fillRect(canvas.width / 2 - 50, y1, 100, 100);

    y1 += dy;
    if (y1 + 100 >= canvas.height) {
        dy = -dy;
    }
    else if (y1 <= 0) {
        dy = -dy;
    }
}

animate();