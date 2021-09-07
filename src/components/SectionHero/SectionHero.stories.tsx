import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import SectionHero from ".";
import { SectionHeroProps } from "./SectionHero.types";
import mock from "./SectionHero.mock";

const WrapperCenter = styled.div``;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Sections/SectionHero",
  component: SectionHero,
  argTypes: {
    logo: {
      description: "Tractian logo",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "Logo",
          detail: `type Logo = {
            src: string;
            alt?: string;
          };`,
        },
      },
    },
    title: {
      description: "Hero title",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) title: string`,
        },
      },
    },
    caption: {
      description: "Hero caption",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) caption: string`,
        },
      },
    },
    message: {
      description: "Hero message",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `(property) message: string`,
        },
      },
    },

    isAnimation: {
      description: "Animation control",
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "boolean",
          detail: `true | false`,
        },
      },
    },
  },
  args: {
    ...mock,
    isAnimation: true,
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
          "Lets define the story for our _SectionHero_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<SectionHeroProps>;

export const Mobile: Story<SectionHeroProps> = (args) => (
  <SectionHero {...args} />
);

export const Desktop: Story<SectionHeroProps> = (args) => (
  <SectionHero {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
