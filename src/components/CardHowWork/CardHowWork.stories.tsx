import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import CardHowWork from ".";
import { CardHowWorkProps } from "./CardHowWork.types";
import mock, { cardBlue } from "./CardHowWork.mock";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  max-width: 130rem;
  height: 100vh;
  margin: 0 auto;
`;

const Content = styled.div`
  height: fit-content;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Content>
      <Story />
    </Content>
  </WrapperCenter>
);

export default {
  title: "Components/CardHowWork",
  component: CardHowWork,
  argTypes: {
    title: {
      description: "Card title",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) title: string`,
        },
      },
    },
    description: {
      description: "Card description",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) description: string`,
        },
      },
    },

    image: {
      description: "Card image",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "Image",
          detail: `type Image = {
            src: string;
            alt: string;
            dataBlur?: string | undefined;
            position?: left | right;
        }`,
        },
      },
    },

    cardColor: {
      description: "Card color",
      control: { type: "inline-radio" },

      table: {
        category: "choices",
        type: {
          summary: "CardColor",
          detail: `type CardColor = "blue" | "white"`,
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
          "Lets define the story for our _CardHowWork_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<CardHowWorkProps>;

export const Mobile: Story<CardHowWorkProps> = (args) => (
  <CardHowWork {...args} />
);

export const Desktop: Story<CardHowWorkProps> = (args) => (
  <CardHowWork {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const CardBlue: Story<CardHowWorkProps> = (args) => (
  <CardHowWork {...args} />
);

CardBlue.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

CardBlue.args = { ...cardBlue };
