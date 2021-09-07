import Image from "next/image";

import { SectionFooterProps } from "./SectionFooter.types";
import * as S from "./SectionFooter.styles";

function SectionFooter({
  title,
  subtitle,
  message,
  image,
  ...props
}: SectionFooterProps) {
  return (
    <S.Wrapper {...props}>
      <S.Container>
        <S.Content>
          <S.Group>
            <S.Title text={title} />
            <S.Subtitle text={subtitle} />
            <S.Message text={message} />
          </S.Group>

          <S.WrapperImage>
            <Image
              blurDataURL={image.dataBlur!}
              placeholder="blur"
              width="530"
              height="310"
              src={image.src}
              alt={image.alt}
            />
          </S.WrapperImage>
        </S.Content>
        <S.WrapperInput>
          <S.TextField />
          <S.Button href="https://github.com/EduSouza-programmer" />
        </S.WrapperInput>
        <S.Developer
          text={
            <>
              Desenvolvido com &hearts;&nbsp;&nbsp;
              <S.Link href="https://github.com/EduSouza-programmer" /> .
            </>
          }
        />
      </S.Container>
    </S.Wrapper>
  );
}

export default SectionFooter;
