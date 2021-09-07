import { SectionFeedbackProps } from "./SectionFeedback.types";

export default {
  title: "O que os nossos clientes dizem:",

  userFeedbackCards: [
    {
      user: {
        image: {
          src: "./img/userFeedback/eduarda.png",
          alt: "",
          dataBlur: "./img/userFeedback/eduarda.png",
        },
        size: "small",
        borderColor: "blue",
        name: "Eduarda Buaíz",
        color: "blue",
        professional: {
          office: "Diretora Geral",
          industry: "Indústria Alimentícia",
        },
        message:
          "O dispositivo traz mais confiabilidade ao processo, agilizando a análise de informações e evitando paradas na produção, o que impacta positivamente a produtividade.",
      },
    },
    {
      user: {
        image: {
          src: "./img/userFeedback/rene.png",
          alt: "",
          dataBlur: "./img/userFeedback/rene.png",
        },
        size: "small",
        borderColor: "blue",
        name: "Renê Santos",
        color: "blue",
        professional: {
          office: "Técnico Mecânico",
          industry: "Indústria Cervejeira",
        },
        message:
          "Uma criança pode instalar o sensor da Tractian, e a plataforma é tão fácil de usar quanto uma rede social. Todo sistema é muito simples e confiável.",
      },
    },
    {
      user: {
        image: {
          src: "./img/userFeedback/pedro.png",
          alt: "",
          dataBlur: "./img/userFeedback/pedro.png",
        },
        size: "small",
        borderColor: "blue",
        name: "Pedro Piovesan",
        color: "blue",
        professional: {
          office: "Coordenador de Indústria",
          industry: "Indústria de Fixadores",
        },
        message:
          "A solução disponibilizada pela Tractian é de simples utilização, fácil compreensão e de extrema importância para toda a nossa equipe de manutenção. Com ela conseguimos tomar decisões mais assertivas e reduzimos drasticamente nosso tempo de resposta.",
      },
    },
    {
      user: {
        image: {
          src: "./img/userFeedback/gustavo.png",
          alt: "",
          dataBlur: "./img/userFeedback/gustavo.png",
        },
        size: "small",
        borderColor: "blue",
        name: "Gustavo Ribeiro",
        color: "blue",
        professional: {
          office: "Diretor Industrial",
          industry: "Indústria Gerenciamento de Resíduos",
        },
        message:
          "A solução disponibilizada pela Tractian é de simples utilização, fácil compreensão e de extrema importância para toda a nossa equipe de manutenção. Com ela conseguimos tomar decisões mais assertivas e reduzimos drasticamente nosso tempo de resposta.",
      },
    },
    {
      user: {
        image: {
          src: "./img/userFeedback/avatar_1.jpg",
          alt: "",
          dataBlur: "./img/userFeedback/avatar_1.jpg",
        },
        size: "small",
        borderColor: "blue",
        name: "Fernando Lemos",
        color: "blue",
        professional: {
          office: "Técnico Industrial",
          industry: "Indústria Automotiva",
        },
        message:
          "Equipamento fácil de instalar e manuseio excelente, fiquei muito impressionado pela enorme automatização que conseguimos em nossos equipamentos.",
      },
    },
    {
      user: {
        image: {
          src: "./img/userFeedback/eduardo_souza.png",
          alt: "",
          dataBlur: "./img/userFeedback/eduardo_souza.png",
        },
        size: "small",
        borderColor: "blue",
        name: "Eduardo Souza",
        color: "blue",
        professional: {
          office: "Web develop",
          industry: "Tractian",
        },
        message:
          "Foi enriquecedor esse desafio, fiquei impressionado com a proposta da Tractian, sou também técnico eletrista e migrei de profissão a dois anos atrás, mas confesso que fiquei curioso com a tecnologia. Espero muito poder fazer parte da equipe. Obrigado pela oportunidade!",
      },
    },
  ],
} as SectionFeedbackProps;
