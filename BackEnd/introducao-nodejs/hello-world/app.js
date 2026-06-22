/*
    Exercício: 
    
    Servidor Node.js básico, sem nenhuma dependência externa, que exibe uma mensagem de boas-vindas 
    usando o módulo nativo 'http'.
*/

const http = require('http')

// http.createServer recebe uma função que é chamada a cada requisição recebida
const server = http.createServer((req, res) => {
    res.statusCode = 200 // 200 OK: requisição atendida com sucesso
    res.setHeader('Content-Type', 'text/plain') // A resposta é texto puro
    res.end('Hello, World!\n') // Envia o corpo da resposta e finaliza
})

const port = 3001
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
