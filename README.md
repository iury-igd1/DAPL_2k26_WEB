# 💻 DAPL_2k26_WEB

![Status](https://img.shields.io/badge/status-em%20andamento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

Repositório com os exercícios da disciplina de **Desenvolvimento de Aplicativos (DAPL)** do curso técnico da **ETE FMC**.

O projeto reúne atividades de:

- **HTML** para páginas estáticas
- **Canvas + JavaScript** para animações e jogos
- **Node.js** com módulos nativos (`http` e `fs`) para servidores e rotas

> ⚠️ O repositório está **em andamento**.

---

## 📌 Visão geral

| Área             | Conteúdo                                                                    |
| ---------------- | --------------------------------------------------------------------------- |
| **FrontEnd**     | páginas estáticas, exercícios em Canvas e jogos no navegador                |
| **BackEnd**      | servidores HTTP com rotas, status codes, query string e leitura de arquivos |
| **Status geral** | a maior parte dos exercícios está concluída                                 |

---

## 🗂 Estrutura da pasta

```text
DAPL_2k26_WEB/
├── FrontEnd/
│   ├── pagina-circuito.html
│   ├── wikipedia-etefmc.html
│   ├── img/
│   └── canvas/
│       ├── parte-1/
│       ├── parte-2/
│       ├── jogo-cobrinha/
│       ├── chuva-particulas/
│       └── arena-gravitacional/
├── BackEnd/
│   ├── introducao-nodejs/
│   │   ├── hello-world/
│   │   └── html-server/
│   ├── endpoints/
│   │   ├── autenticacao/
│   │   ├── cardapio/
│   │   ├── http-status/
│   │   └── mini-blog/
│   └── requisicoes/
│       ├── cor-pagina/
│       ├── jogo-guess/
│       └── query-basico/
└── README.md
```

---

## 🎨 FrontEnd

### 1) `pagina-circuito.html`

Página explicativa sobre o circuito **“Quem foi o primeiro?”**, com lista de componentes, imagem do circuito e link de referência.

### 2) `wikipedia-etefmc.html`

Página no estilo de artigo da Wikipedia sobre a **ETE FMC**, construída com HTML puro e estrutura de tabela.

### 3) Exercícios em Canvas

| Pasta                         | Descrição                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| `canvas/parte-1/`             | animação com quadrados, retas e círculos com posições, velocidades e cores aleatórias |
| `canvas/parte-2/`             | dois quadrados com botão de pausa/retomar e controle de velocidade                    |
| `canvas/jogo-cobrinha/`       | jogo clássico da cobrinha com pontuação e reinício                                    |
| `canvas/chuva-particulas/`    | efeito visual de partículas seguindo o mouse                                          |
| `canvas/arena-gravitacional/` | jogo de arena com gravidade, bombas e modo 1 ou 2 jogadores                           |

---

## 🌐 BackEnd

Todos os exercícios usam os módulos nativos do Node.js e não dependem de bibliotecas externas.

### `introducao-nodejs/hello-world`

Servidor básico com resposta `Hello, World!`.

**Porta:** `3001`

### `introducao-nodejs/html-server`

Servidor que entrega uma página HTML no navegador.

**Porta:** `3002`

### `endpoints/http-status`

Servidor didático para demonstrar códigos HTTP `1xx`, `2xx`, `3xx`, `4xx` e `5xx`, além de uma página `404` personalizada.

**Porta:** `3003`

### `endpoints/cardapio`

Servidor com rotas para cardápio de segunda a sexta.

**Porta:** `3004`

### `endpoints/autenticacao`

Exercício sobre diferença entre `401 Unauthorized` e `403 Forbidden`.

**Porta:** `3005`

### `endpoints/mini-blog`

Mini blog com menu, posts, imagens e página de erro `404`.

**Porta:** `3006`

### `requisicoes/query-basico`

Servidor com query string para nome, idade e e-mail.

**Porta:** `3007`

### `requisicoes/cor-pagina`

Servidor que altera a cor da página com base no parâmetro `cor=red|green|blue`.

**Porta:** `3008`

### `requisicoes/jogo-guess`

Projeto ainda não finalizado.

---

## ▶️ Como executar

### FrontEnd

Abra o arquivo `.html` desejado diretamente no navegador.

### BackEnd

Entre na pasta do exercício desejado e execute:

```bash
node app.js
```

Exemplo:

```bash
cd BackEnd/introducao-nodejs/hello-world
node app.js
```

> Observação importante: vários servidores usam caminhos relativos com `fs.readFile()`.  
> Por isso, o jeito mais seguro de executar é **sempre rodar o comando dentro da própria pasta do exercício**.

---

## 🧠 Observações do projeto

- Os exercícios foram organizados como parte da trilha de aprendizado da disciplina.
- O repositório mistura páginas estáticas, animações em Canvas e servidores HTTP simples.

---

## 👤 Autor

Projeto acadêmico desenvolvido por **Iury Gonçalves de Souza** no curso técnico de **Desenvolvimento de Aplicativos** da **ETE FMC**.
