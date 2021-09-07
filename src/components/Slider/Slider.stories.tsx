import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import Slider, { SliderProps, SliderSettings } from ".";

export default {
  title: "Components/Generics/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    controls: { hideNoControlsWarning: true },
  },
} as Meta<SliderProps>;

const horizontalSettings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background-color: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

const WrapperStoryHorizontal = styled.div`
  width: 70rem;
  margin: 0 auto;
`;

const WrapperStoryVertical = styled.div`
  width: 70rem;
  height: 70rem;
  margin: 0 auto;
`;

export const Horizontal: Story<SliderProps> = () => (
  <WrapperStoryHorizontal>
    <Slider settings={horizontalSettings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
      <Slide>6</Slide>
      <Slide>7</Slide>
      <Slide>8</Slide>
    </Slider>
  </WrapperStoryHorizontal>
);

const verticalSettings: SliderSettings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 2,
};

export const Vertical: Story<SliderProps> = () => (
  <WrapperStoryVertical>
    <Slider settings={verticalSettings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
      <Slide>6</Slide>
      <Slide>7</Slide>
      <Slide>8</Slide>
    </Slider>
  </WrapperStoryVertical>
);
