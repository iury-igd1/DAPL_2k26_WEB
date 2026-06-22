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
        res.statusCode = 200 // 200 OK
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- Servidor de demonstração de códigos HTTP -\n
Página inicial\n\n
Rotas disponíveis:\n
/                  -> 200 (OK) Página inicial com lista de rotas\n
/informacoes       -> 102 (Processing) Resposta informativa\n
/contato           -> 200 (OK) Página de contato\n
/redirecionamento  -> 302 (Found) Redireciona para /jogo\n
/adm               -> 403 (Forbidden) Acesso proibido\n
/manutencao        -> 503 (Service Unavailable) Serviço indisponível\n
/jogo              -> 200 (OK) Abre a página do jogo\n\n
Qualquer outra rota -> 404 (Not Found)\n`)
    } else if (req.url === '/informacoes') {
        res.statusCode = 102 // 102 Processing
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- Página de informações -\n
Código HTTP atual: 102 (Processing)\n\n
O servidor recebeu a requisição e ainda está processando a resposta.\n`)
    } else if (req.url === '/contato') {
        res.statusCode = 200 // 200 OK
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- Página de contato -\n
Código HTTP atual: 200 (OK)\n\n
Tudo ocorreu corretamente nesta rota.\n`)
    } else if (req.url === '/redirecionamento') {
        res.statusCode = 302 // 302 Found
        res.setHeader('Location', '/jogo')
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`Código HTTP atual: 302 (Found)\n\n
Redirecionando para /jogo...\n`)
    } else if (req.url === '/adm') {
        res.statusCode = 403 // 403 Forbidden
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- Área administrativa -\n
Código HTTP atual: 403 (Forbidden)\n\n
Você não tem permissão para acessar esta página.\n`)
    } else if (req.url === '/manutencao') {
        res.statusCode = 503 // 503 Service Unavailable
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- Página de manutenção -\n
Código HTTP atual: 503 (Service Unavailable)\n\n
O servidor está temporariamente indisponível.\n`)
    } else if (req.url === '/jogo') {
        fs.readFile('jogo.html', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end(
                    "Falha interna.\nCódigo HTTP atual: 500 (Internal Server Error)\n\nErro ao ler o arquivo 'jogo.html'.\n",
                )
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else {
        fs.readFile('404.html', (err, data) => {
            if (err) {
                res.statusCode = 500 // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end(
                    "Falha interna.\nCódigo HTTP atual: 500 (Internal Server Error)\n\nErro ao ler o arquivo '404.html'.\n",
                )
            } else {
                res.statusCode = 404
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    }
})

const port = 3003
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
