import loja_suplementos from "../assets/img/loja_suplementos.png";
import sorteador_numeros from "../assets/img/sorteador_numeros.png";
import clone_disney_plus from "../assets/img/clone_disney_plus.png";
import clone_planeta_macacos from "../assets/img/clone_planeta_macacos.png";
import evento_ebac from "../assets/img/evento_ebac.png";
import lp_dbzsz from "../assets/img/lp_dbzsz.png";
import lista_tarefas from "../assets/img/lista_tarefas.png";
import calculadora_imc from "../assets/img/calculadora_imc.png";
import lista_contatos from "../assets/img/lista_contatos.png";
import efood from "../assets/img/efood.png";
import calculadora_aritimetica from "../assets/img/calculadora_aritimetica.png";
import portifolio_react from "../assets/img/portifolio_react.png";
import loja_redux from "../assets/img/loja_redux.png";
import ebac_sports from "../assets/img/ebac_sports.png";
import lista_tarefas_redux from "../assets/img/lista_tarefas_redux.png";
import eplay from "../assets/img/eplay.png";

const allProjects = [
  {
    id: 16,
    name: "e-food",
    img: efood,
    linkGitHub: "https://github.com/TheJackIsOnFire/e-food.git",
    linkPage: "https://e-food-ebon.vercel.app/",
    technologies:
      "Hooks, React, JSX, CSS3, HTML5, Redux, JavaScript, TypeScript, Vite, Redux toolkit query, Eslint, Prittier",
    text: "Este é o projeto final do curso de Front-End, que integra todo o conhecimento adquirido ao longo do curso, desde os fundamentos de HTML, CSS e JavaScript até as configurações mais avançadas do VS Code, como EditorConfig, Prettier e ESLint. O projeto também abrange as boas práticas de programação, organização do código e o uso de tecnologias mais avançadas, como Vite, TypeScript, React, Redux, Redux Toolkit Query, entre outras. O objetivo do projeto foi desenvolver uma plataforma de delivery que gerenciasse todo o processo de compra, integração e envio de informações para o back-end, proporcionando uma experiência completa e funcional.",
  },

  {
    id: 15,
    name: "eplay",
    img: eplay,
    linkGitHub: "https://github.com/TheJackIsOnFire/eplay.git",
    linkPage: "https://eplay-rouge-ten.vercel.app/",
    technologies:
      "Hooks, React, JSX, CSS3, HTML5, Redux, JavaScript, TypeScript, Create React App, Redux toolkit query, Eslint, Prittier",
    text: "Este projeto foi o modelo para o meu projeto final e usa todas as tecnologias ensinadas no curso de Front-End.",
  },

  {
    id: 14,
    name: "Lista de contatos",
    img: lista_contatos,
    linkGitHub: "https://github.com/TheJackIsOnFire/Lista_de_contatos.git",
    linkPage: "https://lista-de-contatos-wine-eight.vercel.app/",
    technologies:
      "Redux, React, JSX, CSS3, HTML5, TypeScript, JavaScript, Vite, Redux toolkit query, Eslint, Prittier",
    text: "O objetivo deste projeto era criar uma lista de contados usando as tecnologias: Vite, React, TypeScript, Redux e o Redux toolkit query.",
  },

  {
    id: 13,
    name: "Lista de tarefas",
    img: lista_tarefas_redux,
    linkGitHub: "https://github.com/TheJackIsOnFire/minhas-tarefas.git",
    linkPage: "https://minhas-tarefas-sepia.vercel.app/",
    technologies:
      "Create React App, React, CSS3, HTML5, TypeScript, Redux, Redux toolkit query",
    text: "Esse exercício tinha como objetivo o uso avançado do Redux e do Redux toolkit query além outras tecnologias.",
  },

  {
    id: 12,
    name: "Ebac Sports - Redux",
    img: ebac_sports,
    linkGitHub: "https://github.com/TheJackIsOnFire/ebac_sports.git",
    linkPage: "https://ebac-sports-roan.vercel.app/",
    technologies: "Create React App, React, CSS3, HTML5, TypeScript, Redux",
    text: "Esse exercício tinha como objetivo aprimorar a manipulação de estados e o controle da resposta da API.",
  },

  {
    id: 11,
    name: "Loja - Redux",
    img: loja_redux,
    linkGitHub: "https://github.com/TheJackIsOnFire/redux-guide.git",
    linkPage: "https://redux-guide-azure.vercel.app/",
    technologies: "Create React App, React, CSS3, HTML5, JavaScript, Redux",
    text: "Neste exercício eu tive meus primeiros contatos com o Redux e a manipulação de estado.",
  },

  {
    id: 10,
    name: "Portifólio React",
    img: portifolio_react,
    linkGitHub: "https://github.com/TheJackIsOnFire/portfolio_react.git",
    linkPage: "https://portfolio-react-woad-delta.vercel.app/",
    technologies:
      "React, CSS3, HTML5, Vite, TypeScript, JavaScript, Eslint, Prittier",
    text: "O objetivo deste projeto era criar um protótipo de portifólio que pudesse alternar entre um tema claro e outro escuro.",
  },

  {
    id: 9,
    name: "Calculadora de IMC",
    img: calculadora_imc,
    linkGitHub: "https://github.com/TheJackIsOnFire/imc_calculator.git",
    linkPage: "https://imc-calculator-seven-eta.vercel.app/",
    technologies: "React, JSX, CSS3, HTML5, Vite",
    text: "O objetivo deste projeto era criar uma calculadora de IMC usando o Vite e o React.",
  },

  {
    id: 8,
    name: "Calculadora aritmética",
    img: calculadora_aritimetica,
    linkGitHub:
      "https://github.com/TheJackIsOnFire/vue-calculadora-aritmetica.git",
    linkPage: "https://vue-calculadora-aritmetica.vercel.app/",
    technologies: "Vue, CSS3, HTML5, JavaScript, Vite",
    text: "O objetivo deste projeto era criar uma calculadora aritmética usando os conhecimentos adquiridos pelo aluno.",
  },

  {
    id: 7,
    name: "Lista de tarefas",
    img: lista_tarefas,
    linkGitHub: "https://github.com/TheJackIsOnFire/todo-vue.git",
    linkPage: "https://todo-vue-rho-pied.vercel.app/",
    technologies: "Vue, CSS3, HTML5 JavaScript, Vite",
    text: "O objetivo deste projeto era criar uma lista de tarefas usando o Vue e o JavaScript.",
  },

  {
    id: 6,
    name: "Landing Page: DBZ Sparking Zero",
    img: lp_dbzsz,
    linkGitHub: "https://github.com/TheJackIsOnFire/landing_page_dbsz.git",
    linkPage: "https://landing-page-dbsz.vercel.app/",
    technologies: "React, CSS3, HTML5",
    text: "O objetivo deste projeto era criar uma landing page com o tema que o aluno escolhesse usando os conhecimentos aprendidos sobre timestamp do JS e animações.",
  },

  {
    id: 5,
    name: "Evento da Ebac",
    img: evento_ebac,
    linkGitHub: "https://github.com/TheJackIsOnFire/ebac_tech_talks.git",
    linkPage: "https://ebac-tech-talks-inky-eight.vercel.app/",
    technologies: "JavaScript, CSS3, HTML5, SCSS",
    text: "O objetivo deste projeto era aprimorar os conhecimentos no timestamp do JavaScript e aprender a usar algumas animações.",
  },

  {
    id: 4,
    name: "Clone: Planeta dos macacos do Star+",
    img: clone_planeta_macacos,
    linkGitHub:
      "https://github.com/TheJackIsOnFire/planeta_dos_macacos_clone.git",
    linkPage: "https://planeta-dos-macacos-clone.vercel.app/",
    technologies: "JavaScript, HTML5, CSS3, SCSS",
    text: "O objetivo deste projeto era criar um clone da página que o aluno escolhesse usando os conhecimentos de CSS, HTML e JavaScript.",
  },

  {
    id: 3,
    name: "Clone Disney Plus",
    img: clone_disney_plus,
    linkGitHub: "https://github.com/TheJackIsOnFire/clone_disneyplus.git",
    linkPage: "https://clone-disney-plus-lovat-one.vercel.app/",
    technologies: "JavaScript, CSS3, HTML5",
    text: "O objetivo deste projeto era criar um clone da página inicial do Disney Plus usando os conhecimentos de CSS, HTML e JavaScript.",
  },

  {
    id: 2,
    name: "Sorteador de números",
    img: sorteador_numeros,
    linkGitHub: "https://github.com/TheJackIsOnFire/sorteador_grunt.git",
    linkPage: "https://sorteador-grunt-jack.vercel.app/",
    technologies: "JavaScript, CSS3, HTML5",
    text: "O objetivo deste projeto era criar um sorteador usando o Grunt e o JavaScript.",
  },

  {
    id: 1,
    name: "Loja de suplementos",
    img: loja_suplementos,
    linkGitHub: "https://github.com/TheJackIsOnFire/J-Fire-Supplements",
    linkPage: "https://j-fire-supplements.vercel.app/",
    technologies: "CSS3, HTML5",
    text: "Primeiro projeto Front-End.",
  },
];

export default allProjects;
