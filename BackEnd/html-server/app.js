const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Erro ao ler o arquivo index.html\n');
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

/*
Portas que não podem ser usadas:
    - 0 a 1023: portas reservadas para serviços do sistema
    - 65535+ : portas inválidas
*/

const port = 5000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
