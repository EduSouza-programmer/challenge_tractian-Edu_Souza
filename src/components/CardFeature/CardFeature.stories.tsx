import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import theme from "@/styles/themes/main.theme";

import CardFeature from ".";
import { CardFeatureProps } from "./CardFeature.types";
import mock from "./CardFeature.mock";

const WrapperCenter = styled.div`
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacings.xsmall};
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
  title: "Components/CardFeature",
  component: CardFeature,
  argTypes: {
    imageIcon: {
      description: "Icon the card features",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "ImageIcon",
          detail: `type ImageIcon = {
            src: string;
            alt: string;
        }`,
        },
      },
    },
    title: {
      description: "title the card features",
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
      description: "description the card features",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) description: string`,
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
          "Lets define the story for our _CardFeatures_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<CardFeatureProps>;

export const Default: Story<CardFeatureProps> = (args) => (
  <div style={{ height: "fit-content" }}>
    <CardFeature {...args} />
  </div>
);
