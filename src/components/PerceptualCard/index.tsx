import { PerceptualCardProps } from "./PerceptualCard.types";
import * as S from "./PerceptualCard.styles";

function PerceptualCard({
  perceptual,
  message,
  ...props
}: PerceptualCardProps) {
  return (
    <S.Wrapper {...props}>
      <S.Perceptual text={perceptual} />
      <S.Message text={message} />
    </S.Wrapper>
  );
}

export default PerceptualCard;
