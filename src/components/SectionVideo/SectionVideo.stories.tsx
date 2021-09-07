import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import SectionVideo from ".";
import { SectionVideoProps } from "./SectionVideo.types";
import mock from "./SectionVideo.mock";

const WrapperCenter = styled.div``;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Sections/SectionVideo",
  component: SectionVideo,
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
    backgroundImage: {
      description: "Section background",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "BackgroundImage",
          detail: `type BackgroundImage = {
            src: string;
            alt: string;
            dataBlur?: string | undefined;
        }`,
        },
      },
    },
    embedURL: {
      description: "Video URL",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) embedURL: string`,
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
          "Lets define the story for our _SectionVideo_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<SectionVideoProps>;

export const Mobile: Story<SectionVideoProps> = (args) => (
  <SectionVideo {...args} />
);

export const Desktop: Story<SectionVideoProps> = (args) => (
  <SectionVideo {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
