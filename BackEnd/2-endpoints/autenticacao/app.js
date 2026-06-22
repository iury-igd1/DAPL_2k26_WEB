/*
Exercício:
    
    Desenvolva um servidor Node.js com três endpoints (/login, /dashboard, /admin) que demonstram a diferença 
    entre os códigos 401 e 403.

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
        res.end(`- SERVIDOR DE AUTENTICAÇÃO E PERMISSÃO -\n
Página inicial\n
Rotas disponíveis:
/login      -> Simula um login bem-sucedido
/dashboard  -> Retorna 401 (usuário não autenticado)
/admin      -> Retorna 403 (usuário sem permissão)\n
Digite uma dessas rotas na URL para testar cada situação.
Exemplo: http://localhost:3005/login`)
    } else if (req.url === '/login') {
        // 200 OK: Simula um login que deu certo
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- LOGIN -\n
Login realizado com sucesso!
O usuário foi autenticado corretamente.`)
    } else if (req.url === '/dashboard') {
        // 401 Unauthorized: O usuário não está autenticado e precisa fazer login
        res.statusCode = 401
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- DASHBOARD -\n
Acesso negado.
Você precisa estar autenticado para acessar esta página.`)
    } else if (req.url === '/admin') {
        // 403 Forbidden: Mesmo que o usuário estivesse logado, essa área exige um nível de permissão que ele não tem
        res.statusCode = 403
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- ÁREA ADMINISTRATIVA -\n
Você não tem permissão para acessar esta área.
Mesmo estando autenticado, seu usuário não possui acesso de administrador.`)
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- ERRO 404 -\n
Página não encontrada.\n
Rotas válidas:
/login
/dashboard
/admin`)
    }
})

const port = 3005
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
