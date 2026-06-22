/*
    Exercício:
    
    Servidor com pelo menos 3 rotas (/, /post1, /post2), cada uma servindo um arquivo .html 
    diferente. Rotas inexistentes devem retornar uma página HTML de erro 404. Usa o módulo fs 
    para leitura dos arquivos e trata erros de leitura com código 500.
*/

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('menu.html', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo 'menu.html'.\n")
            } else {
                res.statusCode = 200 // 200 OK
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else if (req.url === '/post1') {
        fs.readFile('post1.html', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo 'post1.html'.\n")
            } else {
                res.statusCode = 200 // 200 OK
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else if (req.url === '/post2') {
        fs.readFile('post2.html', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo 'post2.html'.\n")
            } else {
                res.statusCode = 200 // 200 OK
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else if (req.url === '/img/neymar.jpg') {
        fs.readFile('img/neymar.jpg', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo 'img/neymar.jpg'.\n")
            } else {
                res.statusCode = 200 // 200 OK
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    } else if (req.url === '/img/calendario.jpg') {
        fs.readFile('img/calendario.jpg', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo 'img/calendario.jpg'.\n")
            } else {
                res.statusCode = 200 // 200 OK
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    } else if (req.url === '/img/caderno.jpg') {
        fs.readFile('img/caderno.jpg', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo 'img/caderno.jpg'.\n")
            } else {
                res.statusCode = 200 // 200 OK
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    } else if (req.url === '/img/questao.jpg') {
        fs.readFile('img/questao.jpg', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo 'img/questao.jpg'.\n")
            } else {
                res.statusCode = 200 // 200 OK
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    } else {
        fs.readFile('404.html', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo '404.html'.\n")
            } else {
                res.statusCode = 404 // 404 Not Found
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    }
})

const port = 3006
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
