import { SectionPerformanceProps } from "./SectionPerformance.types";

export default {
  cardPerformances: [
    {
      title: "Sem gateway, sem enrolação",
      description:
        "Nossos sensores enviam dados do seu equipamento através de rede 2g/3g pensando na facilidade de implementação.",
      image: {
        src: "./img/cardPerformance/sensor-de-vibracao-plug-play.png",
        alt: "Um motor industrial de centrifugação de cor azul",
        dataBlur: "./img/cardPerformance/sensor-de-vibracao-plug-play.png",
        position: "left",
      },
    },
    {
      title: "Plataforma que trabalha por você",
      description:
        "Insights automáticos, detecção de folgas mecânica, desalinhamento, desacoplamento e modelos de IA exclusivos da Tractian para cada tipo de máquina.",
      image: {
        src: "./img/cardPerformance/features-header.png",
        alt: "Um motor industrial de cor azul com um tablet ao lado",
        dataBlur: "./img/cardPerformance/features-header.png",
        position: "right",
      },
    },
    {
      title: "Ordens de serviços automatizadas",
      description:
        " Com o horímetro dos nossos sensores, nossa plataforma gera ordens de serviços automáticas com base em horas de funcionamento.",
      image: {
        src: "./img/cardPerformance/gestao-de-ativo-ordem-de-servico-automatizada-celular.png",
        alt: "Um motor industrial de cor azul com um celular ao lado",
        dataBlur:
          "./img/cardPerformance/gestao-de-ativo-ordem-de-servico-automatizada-celular.png",
        position: "left",
      },
    },
  ],
} as SectionPerformanceProps;
