import mock from "@/components/CardHowWorkSlider/CardHowWorkSlider.mock";
import { SectionHowWorkProps } from "./SectionHowWork.types";

export default {
  title: "Como funciona?",
  subtitle: "Suas máquinas mais seguras.",
  cardsHowWorks: mock.cardsHowWorks,
  perceptualCards: [
    {
      perceptual: "90%",
      message: "De assertividade dos Insights gerados pela plataforma.",
    },
    {
      perceptual: "45%",
      message: "Aumento de confiabilidade das máquinas com Sistema Tractian.",
    },
    {
      perceptual: "30%",
      message: "Redução das ocorrências de última hora na manutenção.",
    },
  ],
} as SectionHowWorkProps;
