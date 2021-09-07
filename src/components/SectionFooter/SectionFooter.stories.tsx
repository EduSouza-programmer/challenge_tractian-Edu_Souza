import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import SectionFooter from ".";
import { SectionFooterProps } from "./SectionFooter.types";
import mock from "./SectionFooter.mock";

const WrapperCenter = styled.div``;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Sections/SectionFooter",
  component: SectionFooter,
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
    message: {
      description: "Section message",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) message: string`,
        },
      },
    },
    image: {
      description: "Section image",
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
          "Lets define the story for our _SectionFooter_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<SectionFooterProps>;

export const Mobile: Story<SectionFooterProps> = (args) => (
  <SectionFooter {...args} />
);

export const Desktop: Story<SectionFooterProps> = (args) => (
  <SectionFooter {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
