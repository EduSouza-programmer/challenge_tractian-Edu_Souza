import Image from "next/image";

import { CardHowWorkProps } from "./CardHowWork.types";
import * as S from "./CardHowWork.styles";

function CardHowWork({
  title,
  image,
  description,
  cardColor = "white",
  ...props
}: CardHowWorkProps) {
  return (
    <S.Wrapper {...props} cardColor={cardColor}>
      <S.Container>
        <S.WrapperImage>
          <Image
            blurDataURL={image.dataBlur!}
            placeholder="blur"
            width="400"
            height="400"
            src={image.src}
            alt={image.alt}
          />
        </S.WrapperImage>
        <S.Content image={{ ...image }}>
          <S.Title text={title} />
          <S.Description text={description} />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
}

export default CardHowWork;
