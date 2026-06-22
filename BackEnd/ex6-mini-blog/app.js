/*
    Exercício:
    
    Servidor com pelo menos 3 rotas (/, /post1, /post2), cada uma servindo um arquivo .html 
    diferente. Rotas inexistentes devem retornar uma página HTML de erro 404. Usa o módulo fs 
    para leitura dos arquivos e trata erros de leitura com código 500.
*/

const http = require('http')
const fs = require('fs')

// Mapa simples de rota -> arquivo .html que ela deve servir
const PAGINAS = {
    '/': 'menu.html',
    '/post1': 'post1.html',
    '/post2': 'post2.html',
}

const TIPOS_IMAGEM = {
    '.jpg': 'image/jpeg',
}

function enviarHtml(res, nomeArquivo) {
    fs.readFile(nomeArquivo, (err, data) => {
        if (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end(`Falha interna. Erro ao ler o arquivo '${nomeArquivo}'.\n`)
            return
        }

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data)
    })
}

function enviar404(res) {
    fs.readFile('404.html', (err, data) => {
        if (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end("Falha interna. Erro ao ler o arquivo '404.html'.\n")
            return
        }
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data)
    })
}

function enviarImagem(res, urlPedida) {
    const caminho = urlPedida.slice(1)
    const ponto = urlPedida.lastIndexOf('.')
    const extensao = ponto === -1 ? '' : urlPedida.slice(ponto).toLowerCase()
    const tipo = TIPOS_IMAGEM[extensao]

    if (!tipo) {
        enviar404(res)
        return
    }

    fs.readFile(caminho, (err, data) => {
        if (err) {
            enviar404(res)
            return
        }

        res.statusCode = 200
        res.setHeader('Content-Type', tipo)
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    if (PAGINAS[req.url]) {
        enviarHtml(res, PAGINAS[req.url])
    } else if (req.url.startsWith('/img/')) {
        enviarImagem(res, req.url)
    } else {
        enviar404(res)
    }
})

const port = 3006
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
