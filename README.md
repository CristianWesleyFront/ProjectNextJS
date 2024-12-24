<div align="center" id="top"> 
  <img src="https://github.com/CristianWesleyFront/ProjectNextJS/blob/main/public/readme/dashboard.gif" alt="Project Dashboard" />
  <a href="https://project-next-7vp3n4wto-cristianwesleyfronts-projects.vercel.app/">Demo</a>
</div>

<h1 align="center">Project Dashboard</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/CristianWesleyFront/ProjectNextJS?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/CristianWesleyFront/ProjectNextJS?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/CristianWesleyFront/ProjectNextJS?color=56BEB8">

</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Project Dashboard 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a>   |   
  <a href="#sparkles-features">Features</a>   |  
  <a href="#rocket-technologies">Technologies</a>   |  
  <a href="#white_check_mark-requirements">Requirements</a>   |  
  <a href="#checkered_flag-starting">Starting</a>   |  
  <a href="#memo-license">License</a>   |  
  <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">Author</a>
</p>

<br>

## 🎯 About

Criar um dashboard interativo utilizando Next.js, shadcn (Radix UI com TailwindCSS), e TailwindCSS, com foco em responsividade, acessibilidade e boas práticas de desenvolvimento frontend.

Important: Escolhi desenvolver o sistema interio em inglês para melhor padronização. Infelizmente não foi possivel implementar o prisma no final por divergencia com o deploy na vercel então a aplicação está com estado local porém com uma carga de dados para melhor visualização das informações e funcionalidades. 

## ✨ Features

* Página Inicial (Home)
  - Um resumo dos projetos ativos e concluídos. ✔️
  - Gráficos simples mostrando progresso (por exemplo, usando uma biblioteca de gráficos como recharts ou chart.js). ✔️
  - Links para acessar páginas detalhadas. ✔️

- Página de Projetos
  - Lista de projetos com:
    - Nome do projeto. ✔️
    - Status (ativo, atrasado, concluído).✔️
    - Barra de progresso (usando componentes estilizados do shadcn).✔️
    - Um botão para criar um novo projeto (abre um modal).✔️
  - Modal de Criação de Projetos
    - Campos obrigatórios:
      - Nome do projeto.✔️
      - Data de início e fim.✔️
      - Descrição.✔️
      - Responsável (pode ser um dropdown com opções pré-definidas).✔️
      - Validação de formulários (ex.: usar react-hook-form com feedback visual).✔️
- Página de Detalhes do Projeto
  - Exibir detalhes do projeto, como:

    - Tarefas associadas (componente de lista).✔️
    - Comentários (usando caixas de texto e um botão para adicionar).✔️
    - Opção para marcar tarefas como concluídas (feedback visual imediato).✔️


## ✨ Extra Features

- Dashboard:
  - Filtro por data dos projetos (Canto superior direito)
  - Download de tabela de projetos em XLSX (Canto superior direito)
  - Cards com informações gerais dos projetos (Meio da tela de dashboard)
  - **Mudança de theme da aplicação para Dark, light e system default (Header canto superior direto ao lado do avatar de usuário)**
- Projects:
  - Filtros por nome , status, responsavel e ordenação em todas as colunas
  - Opção para view columns da tabela (Canto superior direito)
  - Paginação da tabela interativa
  - Download de tabela de projetos em XLSX (Canto superior direito)
  - Opção de copy project id, view, delete e edit em Actions
- **Deploy na Vercel, acesse o DEMO(https://project-next-7vp3n4wto-cristianwesleyfronts-projects.vercel.app/)**

## 🚀 Technologies

Ferramentas utilizadas no projeto

- [React 19](https://pt-br.reactjs.org/)
- [Nextjs 15](https://nextjs.org/)
- [Tailwind 3.4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [next-auth 4](https://next-auth.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Deploy Vercel](https://vercel.com/)

## ✅ Requirements

Before starting 🏁, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## 🏁 Starting

```bash
# Clone this project
$ git clone https://github.com/CristianWesleyFront/ProjectNextJS

# Access
$ cd ProjectNextJS

# Install dependencies
$ npm install --legacy-peer-deps

# Run the project
$ npm run dev

# The server will initialize in the <http://localhost:3000>
```

## 📝 License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with ❤️ by `<a href="https://github.com/CristianWesleyFront" target="_blank">`Cristian Correia `</a>`

&#xa0;

`<a href="#top">`Back to top `</a>`
