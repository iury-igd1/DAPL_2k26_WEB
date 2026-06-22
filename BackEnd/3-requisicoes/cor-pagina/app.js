/*
Exercício:
    
    Desenolva um servidor Node.js que recebe como parâmetro o nome de uma cor ('red', 'green' ou 'blue') e muda 
    a cor de fundo da página exibida no navegador do cliente, de acordo com a cor informada.
*/

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, 'http://localhost:3008')
    const endpoint = urlParams.pathname

    if (endpoint === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- PÁGINA PRINCIPAL -\n
Digite a cor desejada para a página no seguinte formato:\n
http://localhost:3008/cores?cor=blue
`)
    } else if (endpoint === '/cores') {
        const cor = urlParams.searchParams.get('cor')

        if (cor === 'red') {
            fs.readFile('vermelho.html', (err, data) => {
                if (err) {
                    res.statusCode = 500
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                    res.end("Falha interna. Erro ao ler o arquivo 'vermelho.html'.\n")
                } else {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    res.end(data)
                }
            })
        } else if (cor === 'green') {
            fs.readFile('verde.html', (err, data) => {
                if (err) {
                    res.statusCode = 500
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                    res.end("Falha interna. Erro ao ler o arquivo 'verde.html'.\n")
                } else {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    res.end(data)
                }
            })
        } else if (cor === 'blue') {
            fs.readFile('azul.html', (err, data) => {
                if (err) {
                    res.statusCode = 500
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                    res.end("Falha interna. Erro ao ler o arquivo 'azul.html'.\n")
                } else {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    res.end(data)
                }
            })
        } else {
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end(`- ERRO 404 -\n
URL inválido.`)
        }
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- ERRO 404 -\n
URL inválido.`)
    }
})

const port = 3008
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
