import { SectionHowWorkProps } from "./SectionHowWork.types";
import * as S from "./SectionHowWork.styles";

function SectionHowWork({
  title,
  subtitle,
  cardsHowWorks,
  perceptualCards,
  ...props
}: SectionHowWorkProps) {
  return (
    <S.Wrapper {...props}>
      <S.Title text={title} />
      <S.Slider cardsHowWorks={cardsHowWorks} />
      <S.Subtitle text={subtitle} />

      <S.Content>
        {perceptualCards.map((card) => (
          <S.PerceptualCard key={card.message} {...card} />
        ))}
      </S.Content>
    </S.Wrapper>
  );
}

export default SectionHowWork;
