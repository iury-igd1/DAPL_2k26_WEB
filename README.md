# 💻 DAPL_2k26 WEB

![Status](https://img.shields.io/badge/status-em%20andamento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

Repositório com os exercícios e projetos da disciplina **Desenvolvimento de Aplicativos (DAPL)**, do curso técnico da **ETE FMC**.

O conteúdo está dividido em duas frentes:

- **FrontEnd**: páginas HTML, animações com Canvas e jogos em JavaScript no navegador
- **BackEnd**: servidores HTTP feitos em Node.js usando apenas os módulos nativos `http` e `fs`

> ⚠️ O repositório está em evolução e pode receber novos exercícios ao longo do curso.

---

## 📁 Estrutura atual

```text
DAPL_2k26_WEB/
├── FrontEnd/
│   ├── ex1-pagina.html
│   ├── ex2-wikipedia.html
│   ├── img/
│   ├── Canvas-pt1/
│   ├── Canvas-pt2/
│   │   ├── Chuva-Particulas/
│   │   └── Jogo-Cobrinha/
│   └── Desafio-Jogo-Canvas/
│
└── BackEnd/
    ├── ex1-hello-world-server/
    ├── ex2-html-server/
    ├── ex3-http-server/
    ├── ex4-cardapio/
    ├── ex5-autenticacao/
    └── ex6-mini-blog/
```

---

## 🎨 FrontEnd

### `ex1-pagina.html`
Página introdutória com descrição do projeto, lista de componentes e imagem do circuito.

### `ex2-wikipedia.html`
Página no estilo Wikipedia sobre a ETE FMC, com tabela lateral, referências e imagens.

### `Canvas-pt1/`
Exercício de Canvas com objetos aleatórios que se movem e colidem com as bordas da tela.

### `Canvas-pt2/`
Conjunto de exercícios de Canvas com quadrados animados, controle de pausa e slider de velocidade.

### `Canvas-pt2/Chuva-Particulas/`
Efeito visual de partículas acompanhando o movimento do mouse.

### `Canvas-pt2/Jogo-Cobrinha/`
Jogo da cobrinha em grid, com pontuação, colisões e reinício.

### `Desafio-Jogo-Canvas/`
Jogo original em Canvas: **Arena Gravitacional**, com modo solo e modo 2 jogadores.

---

## 🌐 BackEnd

Todos os servidores foram feitos com os módulos nativos do Node.js:

- `http`
- `fs`

Não há dependências externas, então não é necessário rodar `npm install`.

### `ex1-hello-world-server/`
Servidor básico que responde com `Hello, World!`.

### `ex2-html-server/`
Servidor que entrega um arquivo HTML no navegador.

### `ex3-http-server/`
Servidor com exemplos de códigos de status HTTP e páginas personalizadas.

### `ex4-cardapio/`
Servidor com rotas de cardápio por dia da semana.

### `ex5-autenticacao/`
Servidor com exemplos práticos de `401 Unauthorized` e `403 Forbidden`.

### `ex6-mini-blog/`
Mini blog com menu, posts e páginas de erro servidos via leitura de arquivos com `fs`.

---

## ▶ Como executar

### FrontEnd
Abra o `index.html` ou o `.html` correspondente diretamente no navegador.

### BackEnd
Entre na pasta do exercício e execute:

```bash
node app.js
```

Depois acesse o endereço mostrado no terminal.

---

## ✅ Convenções usadas neste repositório

- texto em português do brasil
- indentação padronizada com prettier
- comentários explicativos nos exercícios
- código organizado por tema e por aula

---

## 👤 Autor

Desenvolvido por **Iury Gonçalves de Souza** durante a disciplina de **Desenvolvimento de Aplicativos (DAPL)** da **ETE FMC**.
