import CardHowWork from "@/components/CardHowWork";

import { CardHowWorkSliderProps, Settings } from "./CardHowWorkSlider.types";
import * as S from "./CardHowWorkSlider.styles";

const settings: Settings = {
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,

  vertical: false,
  verticalSwiping: false,
};

function CardHowWorkSlider({
  cardsHowWorks,
  ...props
}: CardHowWorkSliderProps) {
  return (
    <S.Slider settings={settings} {...props}>
      {cardsHowWorks.map((card) => (
        <CardHowWork key={card.title} {...card} />
      ))}
    </S.Slider>
  );
}

export default CardHowWorkSlider;
