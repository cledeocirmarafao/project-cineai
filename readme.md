# 🎥 CineAI — Seu assistente na busca pelo filme perfeito

O CineAI é uma aplicação web interativa que utiliza Inteligência Artificial integrada a um fluxo automatizado no n8n, combinado com a API do TMDB, para recomendar filmes e séries com base no estado emocional ou intenção do usuário. A aplicação foi desenvolvida e inspirada com base no [BotFlix](https://github.com/Dev-em-Dobro/botflix-pro-redesign), aplicação desenvolvida pela instituição de ensino FullStack [Devemdobro - DevQuest](https://www.devemdobro.com/).

## 🚀 Funcionalidades & Interatividades

🔍 1. Busca inteligente por humor (Mood Search)

- O usuário digita um sentimento, contexto ou desejo no textarea.
- O sistema envia esse texto para um webhook n8n que processa o prompt com IA.
- A IA interpreta o humor e retorna recomendações contextualizadas.
- A resposta final exibe filmes ou séries da base do TMDB.

▶️ 2. Pesquisa via botão

- O botão "Buscar Filme Perfeito" dispara a busca.
- Durante o processo:
  - O botão é desativado para evitar múltiplos envios
  - O texto muda para "Buscando, aguarde..."
  - Ao finalizar, o botão volta ao estado normal

⌨ 3. Pesquisa via tecla Enter

- Pressionar Enter (sem Shift) dentro do textarea envia a busca rapidamente.- - Shift + Enter pula linha normalmente, sem disparar a pesquisa.
- Isso melhora a experiência para usuários que preferem digitar sem usar o mouse.

📤 4. Envio do prompt para IA

- A requisição é feita com POST para o webhook n8n:
- body: JSON.stringify({ userPrompt: mood })
- A IA recebe o texto, interpreta e filtra os melhores filmes para o usuário.

🖼 5. Exibição dinâmica dos resultados
-A seção de resultados fica oculta até a busca ser concluída.

- Quando a API retorna dados válidos, a UI é ativada com a classe .show.
- Os filmes são renderizados dinamicamente com .map() e inseridos no DOM como HTML.

⭐ 6. Informações exibidas de cada filme

- Cada recomendação contém:
- Poster do filme
- Título
- Sinopse/Overview
- Data de lançamento
- Avaliação em estrelas

## 🧠 Fluxo de dados da aplicação

```
Usuário → Digita mood no textarea
    ↓
App.js → Envia para webhook n8n via POST
    ↓
n8n → IA interpreta humor + consulta API TMDB
    ↓
TMDB → Retorna lista de filmes
    ↓
CineAI → Renderiza os resultados dinamicamente na UI
```

## 📌 Possíveis melhorias futuras (roadmap)

| Feature                                       | Status          |
| --------------------------------------------- | --------------- |
| Sistema de favoritos                          | ⏳ Planejado    |
| Histórico de buscas                           | ⏳ Planejado    |
| Recomendação contínua com IA                  | ⏳ Planejado    |
| Cache local para evitar requisições repetidas | ⏳ Planejado    |
| Filtro por gênero/ano/rating                  | ⏳ Planejado    |
| Versão 3D do assistente                       | ⏳ Ideia futura |

## 🛠️ Tecnologias utilizadas

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50" alt="HTML5 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50" alt="CSS3 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50" alt="JavaScript logo" />

## 🔧 Ferramentas utilizadas

![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)
![VS Code](https://img.shields.io/badge/VSCode-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

- **Font Awesome**
- **Fetch API**
- **API de mídia: TMDB (pôsteres, sinopses, avaliações)**
- **Automação & IA: n8n (webhook como processador inteligente)**

### 🔗 API Utilizada

[TMDB - The Movie Data Base](https://developer.themoviedb.org/docs/getting-started)

## 🖼️ Layouts

| 💻 Desktop | 📲 Mobile | 
|------------|------------|
|![Preview Desktop](./src/images/cineai-desktop.gif) | ![Preview Mobile](./src/images/cineai-mobile.gif) |

---

> 🌐 [Deploy do Projeto](#) 

[![Link](https://img.shields.io/badge/🔗-Acesse%20aqui-blue?style=for-the-badge)](https://cledeocirmarafao.github.io/project-cineai/)

> 🖥️ [Hospedagem](#)

![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 💻 Como Rodar o Projeto Localmente

```bash
# Clone o repositório
git clone https://github.com/cledeocirmarafao/project-cineai.git

# Acesse a pasta do projeto
cd project-cineai

# Abra o VSCODE
code .

# Abra no navegador
open index.html   # Mac/Linux
start index.html  # Windows

# Se preferir, instale o *Live Server* para visualizar o projeto no navegador
```
---

### ✨ Autor

**Cledeocir Marafão** — ``Desenvolvedor Frontend``

### 📬 Contato

<div align="center">

> Se quiser conversar sobre o projeto ou tecnologia, entre em contato comigo:

  <a href="https://github.com/cledeocirmarafao" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white" alt="Icone do github" />
  </a>
  <a href="https://www.linkedin.com/in/cledeocir-maraf%C3%A3o-267768193/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Icone do linkedin"/>
  </a>
</div>

---

## 🤝 Contribuições

Contribuições são sempre bem‑vindas!
Sinta‑se à vontade para abrir **Issues** e **Pull Requests**.

---