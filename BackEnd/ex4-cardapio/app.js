/*
    Exercício:
    
    Servidor com os endpoints /seg, /ter, /qua, /qui e /sex, cada um retornando o cardápio de um dia 
    da semana. Qualquer outra rota deve retornar 404 com a mensagem "Dia não encontrado".
*/

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`Página principal.
            
            Use a URL para redirecionar para o dia da semana que você deseja.`)
    } else if (req.url === '/seg') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`CARDÁPIO DE SEGUNDA
            
            Prato Principal: Strogonoff de Frango
            Acompanhamentos: Arroz e Batata Frita
            Sobremesa: Mousse de Maracujá
            `)
    } else if (req.url === '/ter') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`CARDÁPIO DE TERÇA
            
            Prato Principal: Filé de Frango Grelhado
            Acompanhamentos: Arroz, Feijão e Salada
            Sobremesa: Palha Italiana
            `)
    } else if (req.url === '/qua') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`CARDÁPIO DE QUARTA
            
            Prato Principal: Feijoada
            Acompanhamentos: Couve, Farofa e Laranja
            Sobremesa: Pudim de Leite
            `)
    } else if (req.url === '/qui') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`CARDÁPIO DE QUINTA
            
            Prato Principal: Lasanha
            Acompanhamentos: Arroz e Salada
            Sobremesa: Brownie de Chocolate
            `)
    } else if (req.url === '/sex') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`CARDÁPIO DE SEXTA
            
            Prato Principal: Hambúrguer de Picanha
            Acompanhamentos: Batata Frita e Onion Rings
            Sobremesa: Milkshake de Creme
            `)
    } else {
        // Qualquer outra rota cai aqui
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Dia não encontrado.\n')
    }
})

const port = 3004
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
