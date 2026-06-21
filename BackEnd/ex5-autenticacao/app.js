/*
    Exercício:
    
    Servidor com três endpoints (/login, /dashboard, /admin) que demonstram a diferença entre 
    os códigos 401 e 403.

    Diferença entre 401 e 403:
    - 401 Unauthorized: significa "não autenticado". O servidor não sabe quem você é (faltou fazer login). 
      A solução é se autenticar.
    - 403 Forbidden: o servidor sabe quem você é, mas mesmo assim nega o acesso, porque essa identidade não 
      tem permissão para aquele recurso. Fazer login de novo não resolve.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`Página principal.
            Use a URL para redirecionar para o que você deseja.
            `)
        return
    } else if (req.url === '/login') {
        // 200 OK: Simula um login que deu certo
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Login realizado com sucesso!\n')
        return
    } else if (req.url === '/dashboard') {
        // 401 Unauthorized: Ninguém fez login ainda, o servidor não sabe quem está pedindo essa página
        res.statusCode = 401
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Acesso negado. Faça login primeiro.\n')
        return
    } else if (req.url === '/admin') {
        // 403 Forbidden: Mesmo que o usuário estivesse logado, essa área exige um nível de permissão que ele não tem
        res.statusCode = 403
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Você não tem permissão para acessar esta área.\n')
        return
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Página não encontrada.\n')
        return
    }
})

const port = 3005
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
