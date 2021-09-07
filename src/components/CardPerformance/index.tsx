import Image from "next/image";

import { CardPerformanceProps } from "./CardPerformance.types";
import * as S from "./CardPerformance.styles";

function CardPerformance({
  image,
  title,
  description,
  ...props
}: CardPerformanceProps) {
  return (
    <S.Wrapper {...props}>
      <S.Content>
        <S.Title text={title} />
        <S.Description text={description} />
      </S.Content>
      <S.WrapperImage image={{ ...image }}>
        <Image
          blurDataURL={image.dataBlur!}
          placeholder="blur"
          width="750"
          height="471"
          src={image.src}
          alt={image.alt}
        />
      </S.WrapperImage>
    </S.Wrapper>
  );
}

export default CardPerformance;
