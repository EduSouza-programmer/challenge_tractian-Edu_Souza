import { SectionFeedbackProps } from "./SectionFeedback.types";
import * as S from "./SectionFeedback.styles";

function SectionFeedback({
  title,
  userFeedbackCards,
  ...props
}: SectionFeedbackProps) {
  return (
    <S.Wrapper {...props}>
      <S.Title text={title} />
      <S.WrapperComments>
        {userFeedbackCards.map((card) => (
          <S.SocialComments key={card.user.name} isAnimation {...card} />
        ))}
      </S.WrapperComments>
    </S.Wrapper>
  );
}

export default SectionFeedback;
