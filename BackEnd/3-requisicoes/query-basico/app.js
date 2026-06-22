/*
Exercício:
    
    Desenvolva um servidor Node.js que recebe o nome, a idade e o e-mail de uma pessoa via queryURL e 
    retorna a resposta correta em formato 'plain/text'.
        - Interprete valor informado e diga se a pessoa é maior/menor de idade;
        - Exiba uma mensagem de sucesso apenas se o e-mail for 'admin@etefmc.com.br'.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, 'http://localhost:3007')
    const endpoint = urlParams.pathname

    if (endpoint === '/') {
        res.statusCode = 200 // 200 OK
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- PÁGINA PRINCIPAL -\n
Digite seu nome e sua idade na URL usando o seguinte formato:\n
http://localhost:3007/hello?nome=Iury&idade=18&email=iury@empresa.com
`)
    } else if (endpoint === '/hello') {
        const nome = urlParams.searchParams.get('nome') || 'visitante'
        const idade = Number(urlParams.searchParams.get('idade'))
        const email = urlParams.searchParams.get('email')
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })

        if (idade >= 18) {
            if (email === 'admin@etefmc.com.br') {
                res.end(`Olá, ${nome}, você tem ${idade} anos e É maior de idade!\n
SUCESSO! LOGADO COM SUCESSO COMO ADMIN ETE FMC.`)
            } else {
                res.end(`Olá, ${nome}, você tem ${idade} anos e É maior de idade!`)
            }
        } else {
            if (email === 'admin@etefmc.com.br') {
                res.end(`Olá, ${nome}, você tem ${idade} anos e NÃO É maior de idade!\n
SUCESSO! LOGADO COM SUCESSO COMO ADMIN ETE FMC.`)
            } else {
                res.end(`Olá, ${nome}, você tem ${idade} anos e NÃO É maior de idade!`)
            }
        }
    } else {
        // Qualquer outra rota cai aqui
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- ERRO 404 -\n\n
Essa página não existe.`)
    }
})

const port = 3007
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
