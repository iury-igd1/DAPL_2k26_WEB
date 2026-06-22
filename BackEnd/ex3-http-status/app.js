/*
    Exercício:
    
    Servidor com rotas que demonstram um exemplo de cada categoria de código de status HTTP 
    (1xx, 2xx, 3xx, 4xx e 5xx), além de uma página HTML personalizada para o erro 404.

    Resumo das rotas e do que cada uma demonstra:
    /                  -> 200 (2xx) Página inicial, tudo certo
    /informacoes       -> 102 (1xx) Informativo: "ainda estou processando"
    /contato           -> 200 (2xx) Outra rota de sucesso comum
    /redirecionamento  -> 302 (3xx) Redirecionamento (a URL "mudou de lugar")
    /adm               -> 403 (4xx) Proibido: o cliente não tem permissão
    /manutencao        -> 503 (5xx) Erro do servidor: serviço indisponível
    /jogo              -> 200 servindo o jogo (ou 500 se a leitura falhar)
    qualquer outra URL -> 404 (4xx) Não encontrado, com página HTML customizada
*/

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Página principal.\n')
        return
    } else if (req.url === '/informacoes') {
        res.statusCode = 102 // 102 Processing
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(
            'O servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda...\nPor favor, aguarde.',
        )
        return
    } else if (req.url === '/contato') {
        res.statusCode = 200 // 200 OK
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Página de contatos.\n')
        return
    } else if (req.url === '/redirecionamento') {
        res.statusCode = 302 // 302 Found
        res.setHeader('Location', '/jogo')
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Redirecionando para /jogo...\n')
        return
    } else if (req.url === '/adm') {
        res.statusCode = 403 // 403 Forbidden
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Acesso restrito. Você não deveria estar vendo isso...\n')
        return
    } else if (req.url === '/manutencao') {
        res.statusCode = 503 // 503 Service Unavailable
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Serviço temporariamente indisponível. Voltamos já!\n')
        return
    } else if (req.url === '/jogo') {
        fs.readFile('jogo.html', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo 'jogo.html'.\n")
                return
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    } else {
        fs.readFile('404.html', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end("Falha interna. Erro ao ler o arquivo '404.html'.\n")
                return
            } else {
                res.statusCode = 404
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }
})

const port = 3003
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
