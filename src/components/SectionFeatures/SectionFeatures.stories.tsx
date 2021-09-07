import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import SectionFeatures from ".";
import { SectionFeaturesProps } from "./SectionFeatures.types";
import mock from "./SectionFeatures.mock";

const WrapperCenter = styled.div``;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Sections/SectionFeatures",
  component: SectionFeatures,
  argTypes: {
    description: {
      description: "Section description",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) description: string`,
        },
      },
    },
    cardFeatures: {
      description: "cardFeatures component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "CardFeaturesProps[]",
          detail: `(alias) type CardFeaturesProps = {
            imageIcon: ImageIcon;
            title: string;
            description: string;
         }

         type ImageIcon = {
          src: string;
          alt: string;
          }

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
          "Lets define the story for our _SectionFeatures_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<SectionFeaturesProps>;

export const Mobile: Story<SectionFeaturesProps> = (args) => (
  <SectionFeatures {...args} />
);

export const Desktop: Story<SectionFeaturesProps> = (args) => (
  <SectionFeatures {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
