# 💻 DAPL_2k26_WEB

![Status](https://img.shields.io/badge/status-em%20andamento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

Repositório com os exercícios e projetos da matéria de **Desenvolvimento de Aplicativos (DAPL)** do curso técnico da **ETE FMC**, cobrindo a trilha de desenvolvimento Web: HTML, JavaScript no navegador (Canvas) e Node.js no back-end.

> ⚠️ Curso em andamento — novos exercícios e projetos serão adicionados ao longo das próximas aulas.

---

## 📁 Estrutura do projeto

\```
DAPL_2k26_WEB/
├── FrontEnd/
│ ├── ex1-pagina.html # Circuito de eletrônica
│ ├── ex2-wikipedia.html # Página "estilo Wikipedia" (HTML puro, sem CSS)
│ ├── img/ # Imagens usadas pelos exercícios acima
│ ├── Canvas-pt1/ # 10 quadrados + 10 retas + 10 círculos animados
│ ├── Canvas-pt2/ # 2 quadrados controláveis (play/pause + slider)
│ │ ├── Jogo-Cobrinha/ # Jogo da Cobrinha (Snake)
│ │ └── Chuva-Particulas/ # Chuva de partículas seguindo o mouse
│ └── Desafio-Jogo-Canvas/ # "Arena Gravitacional" - jogo original (1 ou 2 players)
│
└── BackEnd/
├── ex1-hello-world-server/ # Servidor Node básico ("Hello, World!")
├── ex2-html-server/ # Servidor que entrega a página do Jogo Canvas
├── ex3-http-server/ # Rotas demonstrando códigos HTTP 1xx-5xx + 404 customizado
├── ex4-cardapio/ # Rotas /seg, /ter, /qua, /qui, /sex com cardápio do dia
├── ex5-autenticacao/ # Rotas demonstrando a diferença entre 401 e 403
└── ex6-mini-blog/ # Mini-blog servido via fs, com posts e imagens
\```

---

## 🎨 FrontEnd

| Pasta / Arquivo                | Descrição                                                                                                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ex1-pagina.html`              | Documentação de um circuito eletrônico ("Quem foi o primeiro?").                                                                                                                    |
| `ex2-wikipedia.html`           | Página sobre a ETE FMC organizada no estilo de um artigo da Wikipedia, usando **apenas HTML nativo** (tabelas, `<center>`, âncoras) — sem nenhuma linha de CSS.                     |
| `Canvas-pt1/`                  | 10 quadrados, 10 retas e 10 círculos animados, com posição, velocidade, cor e raio aleatórios a cada recarregamento da página. Todos colidem e quicam nas bordas do canvas.         |
| `Canvas-pt2/`                  | Dois quadrados (um se move na horizontal, outro na vertical), com botão de pausar/retomar e um slider de velocidade.                                                                |
| `Canvas-pt2/Jogo-Cobrinha/`    | Jogo da Cobrinha clássico em grade (grid), com crescimento real do corpo, pontuação e reinício automático da bolinha em posições aleatórias.                                        |
| `Canvas-pt2/Chuva-Particulas/` | Efeito de partículas que "chovem" com gravidade a partir da posição do mouse, acompanhando seu movimento pela tela.                                                                 |
| `Desafio-Jogo-Canvas/`         | **Arena Gravitacional** — jogo original feito em Canvas: cada jogador controla a gravidade do seu personagem para se esquivar de bombas. Suporta 1 ou 2 jogadores no mesmo teclado. |

Para testar qualquer exercício do FrontEnd, basta abrir o `index.html` (ou `.html` correspondente) direto no navegador — não precisa de servidor.

---

## 🌐 BackEnd

Todos os servidores usam **apenas os módulos nativos do Node.js** (`http` e `fs`), sem nenhuma dependência externa e sem o módulo `path` — não é necessário rodar `npm install`.

| Pasta                     | Porta  | Rota(s)                                                                              | Descrição                                                                                                                                     |
| ------------------------- | ------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `ex1-hello-world-server/` | `3001` | `/`                                                                                  | Servidor básico que responde "Hello, World!".                                                                                                 |
| `ex2-html-server/`        | `3002` | `/`                                                                                  | Entrega a página HTML do Jogo Canvas (Arena Gravitacional).                                                                                   |
| `ex3-http-server/`        | `3003` | `/`, `/informacoes`, `/contato`, `/redirecionamento`, `/adm`, `/manutencao`, `/jogo` | Demonstra um exemplo de cada categoria de status HTTP (1xx a 5xx) e uma página 404 personalizada para rotas inexistentes.                     |
| `ex4-cardapio/`           | `3004` | `/seg` `/ter` `/qua` `/qui` `/sex`                                                   | Retorna o cardápio fictício de cada dia da semana (texto puro). Outras rotas → 404.                                                           |
| `ex5-autenticacao/`       | `3005` | `/login` `/dashboard` `/admin`                                                       | Demonstra a diferença entre os códigos **401** (não autenticado) e **403** (autenticado, mas sem permissão).                                  |
| `ex6-mini-blog/`          | `3006` | `/`, `/post1`, `/post2`, `/img/*`                                                    | Mini-blog de notícias com 2 posts e imagens, lido via `fs` a partir de arquivos `.html`. Rotas inválidas retornam uma página 404 customizada. |

---

## 🛠 Tecnologias utilizadas

- **HTML5** — estrutura das páginas e do canvas
- **JavaScript** — lógica de animações, jogos e interatividade no navegador
- **Node.js** (módulos `http` e `fs`) — servidores HTTP no back-end

---

## 👤 Autor

Desenvolvido por **Iury Gonçalves de Souza** durante o curso técnico de Desenvolvimento de Aplicativos da [ETE FMC](https://www.etefmc.com.br/).
