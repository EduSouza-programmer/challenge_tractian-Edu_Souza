import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import CardHowWorkSlider from ".";
import { CardHowWorkSliderProps } from "./CardHowWorkSlider.types";
import mock from "./CardHowWorkSlider.mock";

const WrapperCenter = styled.div`
  max-width: 120rem;
  margin: 10rem auto 0;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Components/CardHowWorkSlider",
  component: CardHowWorkSlider,
  argTypes: {
    cardsHowWorks: {
      description: "CardHowWork component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "CardHowWorkProps[]",
          detail: `type CardHowWorkSliderProps = {
            cardsHowWorks: CardHowWorkProps[];
          }

          type CardHowWorkProps = {
            title: string;
            description: string;
            image: Image;
            cardColor?: CardColor | undefined;
          }

          type Image = {
            src: string;
            alt: string;
            dataBlur?: string | undefined;
            position?: "left" | "right" | undefined;
          }

          type CardColor = "blue" | "white"
        `,
        },
      },
    },
  },
  args: {
    ...mock,
  },
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    backgrounds: {
      default: "light",
    },
    layout: "fullscreen",
    controls: { sort: "requiredFirst" },
    docs: {
      source: {
        type: "code",
      },
      description: {
        component:
          "Lets define the story for our _CardHowWorkSlider_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<CardHowWorkSliderProps>;

export const Mobile: Story<CardHowWorkSliderProps> = (args) => (
  <CardHowWorkSlider {...args} />
);

export const Desktop: Story<CardHowWorkSliderProps> = (args) => (
  <CardHowWorkSlider {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
