/*
Exercício:

    Desenvolva um servidor Node.js que implementa um jogo de adivinhação entre cliente e servidor.

    Regras:
      - o servidor sorteia um número entre 0 e 100;
      - o usuário envia palpites para o endpoint /guess;
      - o servidor informa se o número digitado é maior, menor ou igual ao número secreto;
      - o jogador tem no máximo 5 tentativas;
      - se acertar, o servidor retorna uma página de vitória;
      - se errar 5 vezes, o servidor retorna uma página de derrota.
*/

const http = require('http')
const fs = require('fs')

var numeroSecreto = 0
var tentativas = 0

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, 'http://localhost:3009')
    const endpoint = urlParams.pathname

    if (endpoint === '/') {
        numeroSecreto = Math.floor(Math.random() * 101)
        tentativas = 5

        fs.readFile('jogo.html', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo 'jogo.html'.\n")
            } else {
                const paginaLimpa = data.replace('{{MENSAGEM}}', '')

                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(paginaLimpa)
            }
        })
    } else if (endpoint === '/guess') {
        const palpiteString = urlParams.searchParams.get('palpite')
        const palpite = parseInt(palpiteString, 10)

        if (palpite === numeroSecreto) {
            fs.readFile('vitoria.html', (err, data) => {
                if (err) {
                    res.statusCode = 500
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                    res.end("Falha interna. Erro ao ler o arquivo 'vitoria.html'.\n")
                } else {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    res.end(data)
                }
            })
        } else {
            tentativas--

            if (tentativas > 0) {
                fs.readFile('jogo.html', 'utf8', (err, data) => {
                    if (err) {
                        res.statusCode = 500
                        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                        res.end("Falha interna. Erro ao ler o arquivo 'jogo.html'.\n")
                    } else {
                        const dica = palpite > numeroSecreto ? 'MENOR' : 'MAIOR'
                        const textoDica = `O número secreto é ${dica} que ${palpite}. Restam ${tentativas} tentativa(s)!`
                        const paginaComDica = data.replace('{{MENSAGEM}}', textoDica)

                        res.statusCode = 200
                        res.setHeader('Content-Type', 'text/html; charset=utf-8')
                        res.end(paginaComDica)
                    }
                })
            } else {
                fs.readFile('derrota.html', (err, data) => {
                    if (err) {
                        res.statusCode = 500
                        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                        res.end("Falha interna. Erro ao ler o arquivo 'derrota.html'.\n")
                    } else {
                        res.statusCode = 200
                        res.setHeader('Content-Type', 'text/html; charset=utf-8')
                        res.end(data)
                    }
                })
            }
        }
    } else {
        fs.readFile('404.html', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo '404.html'.\n")
            } else {
                res.statusCode = 404
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    }
})

const port = 3009
server.listen(port, () => {
    console.log(`Servidor do Jogo rodando em http://localhost:${port}/`)
})
