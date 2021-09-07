import { CardHowWorkProps } from "./CardHowWork.types";

export default {
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
} as CardHowWorkProps;

export const cardBlue = {
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
} as CardHowWorkProps;
