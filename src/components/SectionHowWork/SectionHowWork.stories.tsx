import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import SectionHowWork from ".";
import { SectionHowWorkProps } from "./SectionHowWork.types";
import mock from "./SectionHowWork.mock";

const WrapperCenter = styled.div``;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Sections/SectionHowWork",
  component: SectionHowWork,
  argTypes: {
    title: {
      description: "Section title",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) title: string`,
        },
      },
    },
    subtitle: {
      description: "Section subtitle",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) subtitle: string`,
        },
      },
    },
    cardsHowWorks: {
      description: "CardsHowWorks component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "CardHowWorkProps[]",
          detail: `type CardHowWorkProps = {
            title: string;
            description: string;
            image: Image;
            cardColor?: CardColor | undefined;
          }

          type CardColor = "blue" | "white"

          type Image = {
            src: string;
            alt: string;
            dataBlur?: string | undefined;
            position?: "left" | "right" | undefined;
        }
        `,
        },
      },
    },

    perceptualCards: {
      description: "PerceptualCards component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "PerceptualCardProps[]",
          detail: `type PerceptualCardProps = {
            perceptual: string;
            message: string;
          } `,
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
          "Lets define the story for our _SectionHowWork_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<SectionHowWorkProps>;

export const Mobile: Story<SectionHowWorkProps> = (args) => (
  <SectionHowWork {...args} />
);

export const Desktop: Story<SectionHowWorkProps> = (args) => (
  <SectionHowWork {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
