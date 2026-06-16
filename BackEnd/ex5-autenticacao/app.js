const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(`Página principal.
            Use a URL para redirecionar para o que você deseja.
            `);
        return;
    }
    else if (req.url === '/login') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Login realizado com sucesso!\n');
        return;
    }
    else if (req.url === '/dashboard') {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Acesso negado. Faça login primeiro.\n');
        return;
    }
    else if (req.url === '/admin') {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Você não tem permissão para acessar esta área.\n');
        return;
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Página não encontrada.\n');
        return;
    }
});

const port = 4000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
