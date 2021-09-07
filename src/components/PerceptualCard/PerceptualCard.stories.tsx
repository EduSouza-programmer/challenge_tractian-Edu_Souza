import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import PerceptualCard from ".";
import { PerceptualCardProps } from "./PerceptualCard.types";
import mock from "./PerceptualCard.mock";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Components/PerceptualCard",
  component: PerceptualCard,
  argTypes: {
    perceptual: {
      description: "Perceptual card",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) perceptual: string`,
        },
      },
    },
    message: {
      description: "Message card",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) message: string`,
        },
      },
    },
  },
  args: {
    ...mock,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
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
          "Lets define the story for our _PerceptualCard_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<PerceptualCardProps>;

export const Default: Story<PerceptualCardProps> = (args) => (
  <PerceptualCard {...args} />
);
