import { SectionFeaturesProps } from "./SectionFeatures.types";

export default {
  description:
    "Queremos que todos os profissionais de manutenção tenham acesso ao monitoramento online de equipamentos, e a uma plataforma “braço direito” que analisa, fornece insights valiosos, otimiza rotinas e permite tomada de decisões de forma prática e eficaz.",

  cardFeatures: [
    {
      imageIcon: {
        src: "./img/iconCards/icon-maintence-plataform.svg",
        alt: "Desenho de um tela de monitor com uma chave inglesa",
      },
      title: "Manutenção Preditiva",
      description:
        "Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.",
    },

    {
      imageIcon: {
        src: "./img/iconCards/icon-maintence-horimeter.svg",
        alt: "",
      },
      title: "Automação de OS",
      description:
        "Automatize a geração de ordens de serviço com base em horas ou em dias e melhore a sua preventiva.",
    },
    {
      imageIcon: {
        src: "./img/iconCards/icon-maintence-online.svg",
        alt: "",
      },
      title: "Monitoramento Online",
      description:
        "Sensor Tractian coleta dados de vibração, temperatura, horímetro e consumo de energia em tempo real.",
    },
    {
      imageIcon: {
        src: "./img/iconCards/icon-maintence-pump.svg",
        alt: "",
      },
      title: "Setup Instantâneo",
      description:
        "Solução Plug & Play, sem necessidade de gateways ou roteadores, comunicação via 2G/3G independente.",
    },
  ],
} as SectionFeaturesProps;
