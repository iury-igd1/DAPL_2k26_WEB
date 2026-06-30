const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => 
    res.send('<h1>Página Principal</h1>'));
app.post('/login', (req, res) => {
    res.json({
        msg: 'Login e informações recebidas', 
        dados: req.body,
        idade: 2026 - req.body.ano_nascimento
    })
});
app.post('/ano', (req, res) => {
    res.json({
        msg: 'Ano de nascimento recebido', 
        idade: 2026 - req.body.ano
    })
});

const port = 3010;
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`))