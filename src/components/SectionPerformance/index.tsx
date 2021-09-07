import CardPerformance from "@/components/CardPerformance";

import { SectionPerformanceProps } from "./SectionPerformance.types";
import * as S from "./SectionPerformance.styles";

function SectionPerformance({
  cardPerformances,
  ...props
}: SectionPerformanceProps) {
  return (
    <S.Wrapper {...props}>
      <S.Title
        text={
          <>
            Mantenha a sua equipe e seus ativos com o{" "}
            <strong>melhor desempenho</strong>
          </>
        }
      />
      <S.Subtitle text="Descomplicamos a manutenção preditiva evitando vários problemas:" />
      <S.WrapperCards>
        {cardPerformances?.map((card) => (
          <CardPerformance key={card.title} {...card} />
        ))}
      </S.WrapperCards>
    </S.Wrapper>
  );
}

export default SectionPerformance;
