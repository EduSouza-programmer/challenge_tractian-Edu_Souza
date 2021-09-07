import Image from "next/image";

/* import ImageHero from "./ImageHero/index"; */

import { SectionHeroProps } from "./SectionHero.types";
import * as S from "./SectionHero.styles";

function SectionHero({
  logo,
  image,
  caption,
  title,
  message,
  isAnimation,
  ...props
}: SectionHeroProps) {
  return (
    <S.Wrapper {...props}>
      <S.Container title={title}>
        <S.WrapperLogo isAnimation={isAnimation}>
          <Image
            layout="fill"
            src={logo.src}
            alt={logo.alt}
            blurDataURL={logo.dataBlur!}
            placeholder="blur"
          />
        </S.WrapperLogo>
        <S.Main>
          <S.WrapperImageHero>
            <Image
              blurDataURL={image.dataBlur!}
              placeholder="blur"
              width="1000"
              height="1000"
              src={image.src}
              alt={image.alt}
            />
            {/* <ImageHero isAnimation={isAnimation} /> */}
          </S.WrapperImageHero>

          <S.WrapperContent>
            <S.Title text={title} />
            <S.Caption text={caption} />
            <S.Message text={message} />
            <S.Button href="https://github.com/EduSouza-programmer" />
          </S.WrapperContent>
        </S.Main>
      </S.Container>
    </S.Wrapper>
  );
}

export default SectionHero;
