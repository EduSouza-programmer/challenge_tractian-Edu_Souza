import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import theme from "@/styles/themes/main.theme";

import CardPerformance from ".";
import { CardPerformanceProps } from "./CardPerformance.types";
import mock from "./CardPerformance.mock";

const WrapperCenter = styled.div`
  display: grid;
  max-width: ${theme.gridLayout.container};
  height: 100vh;
  align-items: center;
  margin: 0 auto;
  padding: 0 ${theme.spacings.small};
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Components/CardPerformance",
  component: CardPerformance,
  argTypes: {
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
        }`,
        },
      },
    },
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
          "Lets define the story for our _CardPerformance_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<CardPerformanceProps>;

export const Mobile: Story<CardPerformanceProps> = (args) => (
  <CardPerformance {...args} />
);

export const Desktop: Story<CardPerformanceProps> = (args) => (
  <CardPerformance {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
