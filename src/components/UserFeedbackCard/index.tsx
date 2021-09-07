import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";

import { UserFeedbackCardProps } from "./UserFeedbackCard.types";
import * as S from "./UserFeedbackCard.styles";

function UserFeedbackCard({
  user,
  isAnimation = false,
  ...props
}: UserFeedbackCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isIntesaction = useIntersectionObserver(
    wrapperRef,
    { threshold: 0.3 },
    false
  );

  /*  const randowDelay = useCallback((max: number, min: number) => {
    return String(Number(Math.random() * (max - min) + min).toFixed(1));
  }, []); */

  return (
    <S.Wrapper
      delay=""
      ref={wrapperRef}
      isAnimation={isAnimation && isIntesaction}
      {...props}
    >
      <S.Message text={user.message} />
      <S.User {...user} />
    </S.Wrapper>
  );
}

export default UserFeedbackCard;
