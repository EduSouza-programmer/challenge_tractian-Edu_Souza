import SlickSlider, { Settings } from "react-slick";

import * as S from "./Slider.styles";

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
  className?: string;
};

function Slider({ children, settings, className }: SliderProps) {
  return (
    <S.Wrapper className={className}>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  );
}

export default Slider;
