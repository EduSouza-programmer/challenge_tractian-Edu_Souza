import { CardHowWorkSliderProps } from "./CardHowWorkSlider.types";

export default {
  cardsHowWorks: [
    {
      title: "1. Nós enviamos os sensores",

      description:
        "Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e nem falar com a TI.",

      image: {
        src: "/img/cardHowWork/enviamos-sensores.png",
        alt: "Uma sensor, pequena caixa preta com a logo marca Tractian",
        dataBlur: "/img/cardHowWork/enviamos-sensores.png",
        position: "left",
      },
      cardColor: "white",
    },
    {
      title: "2. Cole em suas máquinas",

      description:
        "Nosso sensor é colado na máquina como um bandaid. Ele é responsável por transmitir os dados de vibração e temperatura do equipamento para a plataforma.",

      image: {
        src: "/img/cardHowWork/cole-na-maquina.png",
        alt: "Desenho de um motor industrial com o sensor Tractian",
        dataBlur: "/img/cardHowWork/cole-na-maquina.png",
        position: "right",
      },
      cardColor: "blue",
    },
    {
      title: "3. Receba Insights valiosos",

      description:
        "Nosso sistema centraliza informações precisas sobre suas máquinas, com insights e análises, como saúde do equipamento, detecção de anomalias e variação de espectros.",

      image: {
        src: "/img/cardHowWork/receba-insights.png",
        alt: "Desenho de um motor industrial com o sensor Tractian",
        dataBlur: "/img/cardHowWork/receba-insights.png",
        position: "left",
      },
      cardColor: "white",
    },
    {
      title: "4. Sensor inteligente para máquinas mais confiáveis.",

      description:
        "Conectamos seus ativos aos nossos sensores IoT que conseguem medir com precisão a temperatura, vibração, horímetro e consumo de energia estimado.",

      image: {
        src: "/img/cardHowWork/sensor-inteligente.png",
        alt: "Desenho do sensor Tractian com três motores industriais e um homem segurando um tablet",
        dataBlur: "/img/cardHowWork/sensor-inteligente.png",
        position: "right",
      },
      cardColor: "blue",
    },
  ],
} as CardHowWorkSliderProps;
