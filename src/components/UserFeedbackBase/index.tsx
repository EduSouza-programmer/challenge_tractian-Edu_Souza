import Image from "next/image";

import { UserFeedbackBaseProps } from "./UserFeedbackBase.types";
import * as S from "./UserFeedbackBase.styles";

function UserFeedbackBase({
  image,
  size = "small",
  borderColor = "white",
  name,
  professional: region,
  color = "white",
  ...props
}: UserFeedbackBaseProps) {
  return (
    <S.Wrapper size={size} {...props}>
      <S.WrapperImage borderColor={borderColor}>
        <Image
          placeholder="blur"
          blurDataURL={image?.dataBlur || ""}
          src={image ? image.src : "/img/users/no-avatar.jpg"}
          alt={image?.alt}
          layout="fill"
          objectFit="cover"
        />
      </S.WrapperImage>
      <S.Content>
        <S.UserName color={color} size={size} text={name || "desconhecido"} />

        {!!region && (
          <S.Professional
            color={color}
            text={
              <>
                {region.office} &bull; {region.industry}
              </>
            }
          />
        )}
      </S.Content>
    </S.Wrapper>
  );
}

export default UserFeedbackBase;
