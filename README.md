# 💻 DAPL_2k26_WEB

![Status](https://img.shields.io/badge/status-em%20andamento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

Repositório com os exercícios e projetos da matéria de **Desenvolvimento de Aplicativos (DAPL)** do curso técnico da **ETE FMC**, cobrindo a trilha de desenvolvimento Web: HTML, JavaScript no navegador (Canvas) e Node.js no back-end.

Este repositório também funciona como **portfólio**: ao final do curso ele reunirá, de forma organizada, todos os projetos práticos desenvolvidos ao longo do ano.

> ⚠️ Curso em andamento — novos exercícios e projetos serão adicionados ao longo das próximas aulas.

---

## 📑 Sumário

- [Estrutura do projeto](#-estrutura-do-projeto)
- [FrontEnd](#-frontend)
- [BackEnd](#-backend)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Como executar](#-como-executar)
- [Sugestões de organização futura](#-sugestões-de-organização-futura)
- [Autor](#-autor)

---

## 📁 Estrutura do projeto

```
DAPL_2k26_WEB/
├── FrontEnd/
│   ├── projeto1.html              # Circuito de eletrônica (não-editável)
│   ├── wikipedia.html             # Página "estilo Wikipedia" (HTML puro, sem CSS)
│   ├── imagens/                   # Imagens usadas pelos exercícios acima
│   ├── Canvas-pt1/                # 10 quadrados + 10 retas + 10 círculos animados
│   ├── Canvas-pt2/                # 2 quadrados controláveis (play/pause + slider)
│   │   ├── Desafio-Cobrinha/      # Jogo da Cobrinha (Snake)
│   │   └── Chuva-Particulas/      # Chuva de partículas seguindo o mouse
│   └── Jogo-Canvas/               # "Arena Gravitacional" - jogo original (1 ou 2 players)
│
└── BackEnd/
    ├── hello-world-server/        # Servidor Node básico ("Hello, World!")
    ├── html-server/               # Servidor que entrega a página do Jogo Canvas
    ├── http-codes-server/         # Rotas demonstrando códigos HTTP 1xx-5xx + 404 customizado
    ├── ex4-cardapio/              # Rotas /seg, /ter, /qua, /qui, /sex com cardápio do dia
    ├── ex5-autenticacao/          # Rotas demonstrando a diferença entre 401 e 403
    └── ex6-mini-blog/             # Mini-blog servido via fs, com posts e imagens
```

---

## 🎨 FrontEnd

| Pasta / Arquivo                | Descrição                                                                                                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projeto1.html`                | Documentação de um circuito eletrônico ("Quem foi o primeiro?"). Mantido como veio do exercício original.                                                                           |
| `wikipedia.html`               | Página sobre a ETE FMC organizada no estilo de um artigo da Wikipedia, usando **apenas HTML nativo** (tabelas, `<center>`, âncoras) — sem nenhuma linha de CSS.                     |
| `Canvas-pt1/`                  | 10 quadrados, 10 retas e 10 círculos animados, com posição, velocidade, cor e raio aleatórios a cada recarregamento da página. Todos colidem e quicam nas bordas do canvas.         |
| `Canvas-pt2/`                  | Dois quadrados (um se move na horizontal, outro na vertical), com botão de pausar/retomar e um slider de velocidade.                                                                |
| `Canvas-pt2/Desafio-Cobrinha/` | Jogo da Cobrinha clássico em grade (grid), com crescimento real do corpo, pontuação e reinício automático da bolinha em posições aleatórias.                                        |
| `Canvas-pt2/Chuva-Particulas/` | Efeito de partículas que "chovem" com gravidade a partir da posição do mouse, acompanhando seu movimento pela tela.                                                                 |
| `Jogo-Canvas/`                 | **Arena Gravitacional** — jogo original feito em Canvas: cada jogador controla a gravidade do seu personagem para se esquivar de bombas. Suporta 1 ou 2 jogadores no mesmo teclado. |

Para testar qualquer exercício do FrontEnd, basta abrir o `index.html` correspondente diretamente no navegador (não precisa de servidor).

---

## 🌐 BackEnd

Todos os servidores usam **apenas os módulos nativos do Node.js** (`http` e `fs`), sem dependências externas — não é necessário rodar `npm install`.

| Pasta                 | Rota(s)                                                                                            | Descrição                                                                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hello-world-server/` | `/`                                                                                                | Servidor básico que responde "Hello, World!". Porta `3000`.                                                                                                 |
| `html-server/`        | `/`, `/canvas.js`                                                                                  | Entrega a página HTML do Jogo Canvas (reaproveitando o `canvas.js` do FrontEnd). Porta `5000`.                                                              |
| `http-codes-server/`  | `/`, `/informacoes`, `/contato`, `/redirecionamento`, `/adm`, `/manutencao`, `/jogo`, `/canvas.js` | Demonstra um exemplo de cada categoria de status HTTP (1xx a 5xx) e uma página 404 personalizada para rotas inexistentes. Porta `5000`.                     |
| `ex4-cardapio/`       | `/seg` `/ter` `/qua` `/qui` `/sex`                                                                 | Retorna o cardápio fictício de cada dia da semana (texto puro). Outras rotas → 404. Porta `3000`.                                                           |
| `ex5-autenticacao/`   | `/login` `/dashboard` `/admin`                                                                     | Demonstra a diferença entre os códigos **401** (não autenticado) e **403** (autenticado, mas sem permissão). Porta `4000`.                                  |
| `ex6-mini-blog/`      | `/`, `/post1`, `/post2`, `/img/*`                                                                  | Mini-blog de notícias com 2 posts e imagens, lido via `fs` a partir de arquivos `.html`. Rotas inválidas retornam uma página 404 customizada. Porta `3000`. |

### Como rodar um servidor

```bash
cd BackEnd/<pasta-do-exercicio>
node app.js
```

Depois acesse `http://localhost:<porta>/` no navegador (a porta de cada servidor é mostrada no terminal e também na tabela acima).

> 💡 Como vários servidores usam a mesma porta (`3000` ou `5000`), rode apenas um por vez.

---

## 🛠 Tecnologias utilizadas

- **HTML5** — estrutura das páginas e do canvas
- **CSS3** — estilização (quando permitido pelo enunciado)
- **JavaScript** — lógica de animações, jogos e interatividade no navegador
- **Node.js** (módulos `http` e `fs`) — servidores HTTP no back-end

---

## ▶ Como executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/iury-igd1/DAPL_2k26_WEB.git
    ```
2. **FrontEnd:** abra o `index.html` do exercício desejado direto no navegador.
3. **BackEnd:** tenha o [Node.js](https://nodejs.org/) instalado e siga as instruções da seção [BackEnd](#-backend) acima.

---

## 💡 Sugestões de organização futura

Algumas sugestões para deixar o repositório ainda mais consistente quando ele se tornar o portfólio final:

1. **Padronizar a caixa dos nomes:** unificar `FrontEnd`/`BackEnd` e pastas como `Canvas-pt1`/`Jogo-Canvas` para letras minúsculas (`frontend`, `backend`, `canvas-pt1`, `jogo-canvas`...). Isso evita problemas em sistemas case-sensitive (Linux/Mac, GitHub Pages) e deixa tudo no mesmo padrão usado no BackEnd (`ex4-cardapio`, `ex5-autenticacao`).
2. **Numerar os exercícios na ordem em que foram feitos**, tanto no FrontEnd quanto no BackEnd (ex: `ex1-hello-world`, `ex2-html-server`, `ex3-http-codes`...). Isso ajuda quem for avaliar o portfólio a entender a evolução do aprendizado.
3. **Adicionar um README curto em cada pasta de exercício**, com o enunciado original e um print/gif do resultado — dá um toque bem mais profissional ao portfólio.
4. **Considerar o uso do framework Express no futuro**, para simplificar o roteamento e a entrega de arquivos estáticos (hoje cada servidor reimplementa isso manualmente com `fs.readFile`).
5. Os arquivos de imagem em `projeto1.html` ainda usam barra invertida (`imagens\circuito1.jpg`), que é a sintaxe de caminho do Windows e não funciona em servidores Linux/Mac nem no GitHub Pages. Como esse arquivo não foi alterado nesta revisão (a pedido), vale a pena corrigir isso manualmente quando possível.

---

## 👤 Autor

Desenvolvido por **Iury** durante o curso técnico de Desenvolvimento de Aplicativos da [ETE FMC](https://www.etefmc.com.br/).
