var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomColor() {
    return `rgb(${Math.floor(random(0, 255))}, ${Math.floor(random(0, 255))}, ${Math.floor(random(0, 255))})`;
}

const squareSize = 80;

let squares = [];
for (let i = 0; i < 10; i++) {
    squares.push({
        x: random(0, canvas.width - squareSize),
        y: random(0, canvas.height - squareSize),
        dx: random(-2, 2),
        dy: random(-2, 2),
        color: randomColor()
    });
}

const lineLength = 120;

let lines = [];
for (let i = 0; i < 10; i++) {
    let angle = random(0, Math.PI * 2);
    lines.push({
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        dx: random(-2, 2),
        dy: random(-2, 2),
        angle: angle,
        color: randomColor()
    });
}

let circles = [];
for (let i = 0; i < 30; i++) {
    circles.push({
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        dx: random(-2, 2),
        dy: random(-2, 2),
        r: random(5, 50),
        color: randomColor()
    });
}

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    squares.forEach(s => {
        s.x += s.dx;
        s.y += s.dy;

        if (s.x <= 0 || s.x + squareSize >= canvas.width) 
            s.dx *= -1;
        if (s.y <= 0 || s.y + squareSize >= canvas.height) 
            s.dy *= -1;

        c.fillStyle = s.color;
        c.fillRect(s.x, s.y, squareSize, squareSize);
    });


    lines.forEach(l => {
        l.x += l.dx;
        l.y += l.dy;

        if (l.x <= 0 || l.x >= canvas.width) 
            l.dx *= -1;
        if (l.y <= 0 || l.y >= canvas.height) 
            l.dy *= -1;

        let x2 = l.x + Math.cos(l.angle) * lineLength;
        let y2 = l.y + Math.sin(l.angle) * lineLength;

        c.beginPath();
        c.moveTo(l.x, l.y);
        c.lineTo(x2, y2);
        c.strokeStyle = l.color;
        c.stroke();
    });

    circles.forEach(cir => {
        cir.x += cir.dx;
        cir.y += cir.dy;

        if (cir.x - cir.r <= 0 || cir.x + cir.r >= canvas.width) 
            cir.dx *= -1;
        if (cir.y - cir.r <= 0 || cir.y + cir.r >= canvas.height) 
            cir.dy *= -1;

        c.beginPath();
        c.arc(cir.x, cir.y, cir.r, 0, Math.PI * 2);
        c.strokeStyle = cir.color;
        c.stroke();
    });

    requestAnimationFrame(animate);
    }

animate();