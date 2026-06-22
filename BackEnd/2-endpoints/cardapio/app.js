/*
Exercício:
    
    Desenvolva um servidor Node.js com os endpoints /seg, /ter, /qua, /qui e /sex, cada um retornando o cardápio 
    de um dia da semana. Qualquer outra rota deve retornar 404 com a mensagem "Dia não encontrado".
*/

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- CARDÁPIO SEMANAL -\n
Página inicial\n
Rotas disponíveis:
/seg -> Cardápio de segunda-feira
/ter -> Cardápio de terça-feira
/qua -> Cardápio de quarta-feira
/qui -> Cardápio de quinta-feira
/sex -> Cardápio de sexta-feira\n
Digite uma dessas rotas na URL para visualizar o cardápio do dia desejado.
Exemplo: http://localhost:3004/seg`)
    } else if (req.url === '/seg') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- CARDÁPIO DE SEGUNDA-FEIRA -\n\n
Prato Principal: Strogonoff de Frango
Acompanhamentos: Arroz e Batata Frita
Sobremesa: Mousse de Maracujá`)
    } else if (req.url === '/ter') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- CARDÁPIO DE TERÇA-FEIRA -\n\n
Prato Principal: Filé de Frango Grelhado
Acompanhamentos: Arroz, Feijão e Salada
Sobremesa: Palha Italiana`)
    } else if (req.url === '/qua') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- CARDÁPIO DE QUARTA-FEIRA -\n\n
Prato Principal: Feijoada
Acompanhamentos: Couve, Farofa e Laranja
Sobremesa: Pudim de Leite`)
    } else if (req.url === '/qui') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- CARDÁPIO DE QUINTA-FEIRA -\n\n
Prato Principal: Lasanha
Acompanhamentos: Arroz e Salada
Sobremesa: Brownie de Chocolate`)
    } else if (req.url === '/sex') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- CARDÁPIO DE SEXTA-FEIRA -\n\n
Prato Principal: Hambúrguer de Picanha
Acompanhamentos: Batata Frita e Onion Rings
Sobremesa: Milkshake de Creme`)
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`- ERRO 404 -\n
Dia não encontrado.\n
Rotas válidas:
/seg\n/ter\n/qua\n/qui\n/sex`)
    }
})

const port = 3004
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
