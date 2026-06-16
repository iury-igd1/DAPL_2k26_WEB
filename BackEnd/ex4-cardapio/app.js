const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(`Página principal.
            Use a URL para redirecionar para o dia da semana que você deseja.`);
        return;
    }
    else if (req.url === '/seg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(`CARDÁPIO DE SEGUNDA
            
            Prato Principal: Strogonoff de Frango
            Acompanhamentos: Arroz e Batata Frita
            Sobremesa: Mouse de Maracujá
            `);
        return;
    }
    else if (req.url === '/ter') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(`CARDÁPIO DE TERÇA
            
            Prato Principal: Filé de Frango Grelhado
            Acompanhamentos: Arroz, Feijão e Salada
            Sobremesa: Palha Italiana
            `);
        return;
    }
    else if (req.url === '/qua') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(`CARDÁPIO DE QUARTA
            
            Prato Principal: Feijoada
            Acompanhamentos: Couve, Farofa e Laranja
            Sobremesa: Pudim de Leite
            `);
        return;
    }
    else if (req.url === '/qui') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(`CARDÁPIO DE SEGUNDA
            
            Prato Principal: Lasanha
            Acompanhamentos: Arroz e Salada
            Sobremesa: Brownie de Chocolate
            `);
        return;
    }
    else if (req.url === '/sex') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(`CARDÁPIO DE SEGUNDA
            
            Prato Principal: Hambúrguer de Picanha
            Acompanhamentos: Batata Frita e Onion Rings
            Sobremesa: Milkshake de Creme
            `);
        return;
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Dia não encontrado.\n');
        return;
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
