import { SectionFeaturesProps } from "./SectionFeatures.types";
import * as S from "./SectionFeatures.styles";

function SectionFeatures({
  description,
  cardFeatures,
  ...props
}: SectionFeaturesProps) {
  return (
    <S.Wrapper {...props}>
      <S.Title
        text={
          <>
            Por que escolher a <strong>Tractian</strong>?
          </>
        }
      />
      <S.Description text={description} />

      <S.WrapperFeatures>
        {cardFeatures.map((card) => (
          <S.CardFeature key={card.title} {...card} />
        ))}
      </S.WrapperFeatures>
    </S.Wrapper>
  );
}

export default SectionFeatures;
