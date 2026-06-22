/*
Exercício: 
    
    Desenvolva um servidor Node.js que contém o Jogo Canvas feito anteriormente na matéria de FrontEnd.
*/

const http = require('http')
const fs = require('fs')

// http.createServer recebe uma função que é chamada a cada requisição recebida
const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end('Erro ao ler o arquivo index.html\n')
        } else {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end(data)
        }
    })
})

const port = 3002
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
