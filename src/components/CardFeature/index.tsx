import Image from "next/image";

import { CardFeatureProps } from "./CardFeature.types";
import * as S from "./CardFeature.styles";

function CardFeature({
  imageIcon,
  title,
  description,
  ...props
}: CardFeatureProps) {
  return (
    <S.Wrapper {...props}>
      <S.WrapperImage>
        <Image width={86} height={86} src={imageIcon.src} alt={imageIcon.alt} />
      </S.WrapperImage>

      <S.Title text={title} />

      <S.Description text={description} />
    </S.Wrapper>
  );
}

export default CardFeature;
