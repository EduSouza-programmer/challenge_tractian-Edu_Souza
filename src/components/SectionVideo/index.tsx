import Image from "next/image";

import { SectionVideoProps } from "./SectionVideo.types";
import * as S from "./SectionVideo.styles";

function SectionVideo({
  title,
  backgroundImage,
  embedURL,
  ...props
}: SectionVideoProps) {
  return (
    <S.Wrapper {...props}>
      <Image
        layout="fill"
        objectFit="cover"
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        blurDataURL={backgroundImage.dataBlur!}
        placeholder="blur"
      />

      <S.Container>
        <S.Title text={title} />
        <S.WrapperVideo>
          <S.IFrame
            src={`${embedURL}?autoplay=1&mute=1&loop=5&playlist=_6NLhkPMo9w&modestbranding=1&autohide=1&showinfo=0&controls=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </S.WrapperVideo>
      </S.Container>
    </S.Wrapper>
  );
}

export default SectionVideo;
