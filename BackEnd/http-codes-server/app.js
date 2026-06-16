const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Página principal.\n');
        return;
    }
    else if (req.url === '/informacoes') {
        res.statusCode = 102; // 102 Processing
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('O servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda...\nPor favor, aguarde.');
        return;
    }
    else if (req.url === '/contato') {
        res.statusCode = 200; // 200 OK
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Página de contatos.\n');
        return;
    } 
    else if (req.url === '/redirecionamento') {
        res.statusCode = 302; // 302 Found
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('URL alterado.\n');
        return;
    } 
    else if (req.url === '/adm') {
        res.statusCode = 403; // 403 Forbidden
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Acesso restrito. Você não deveria estar vendo isso...\n');
        return;
    } 
    else if (req.url === '/jogo') {
        fs.readFile('jogo.html', (err, data) => {
            if (err) {
                res.statusCode = 500; // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end("Falha interna. Erro ao ler o arquivo 'jogo.html'.\n");
                return;
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    }
    else {
        res.statusCode = 404; // 404 Not Found
        fs.readFile('404.html', (err, data) => {
            if (err) {
                res.statusCode = 500; // 500 Internal Server Error
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end("Falha interna. Erro ao ler o arquivo '404.html'.\n");
                return;
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }   
        });
    }
});

const port = 5000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
