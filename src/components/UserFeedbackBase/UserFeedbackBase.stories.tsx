import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details, options } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import UserFeedbackBase from ".";
import { UserFeedbackBaseProps } from "./UserFeedbackBase.types";
import mock, { example1, example2 } from "./UserFeedbackBase.mock";

const WrapperCenter = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers } = theme;

export default {
  title: "Components/UserFeedbackBase",
  component: UserFeedbackBase,
  argTypes: {
    image: {
      description: "User photo and alternative text",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "Image",
          detail: `type Image = {
            src: string;
            alt?: string;
            dataBlur?: string;
          };`,
        },
      },
    },

    size: {
      description: "Size the component",
      options: options(modifiers.USERFEEDBACKBASE.sizes),
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "Size",
          detail: details(modifiers.USERFEEDBACKBASE.sizes),
        },
      },
    },

    borderColor: {
      description: "Border color the image",
      options: options(modifiers.USERFEEDBACKBASE.borderColors),
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "BorderColor",
          detail: details(modifiers.USERFEEDBACKBASE.borderColors),
        },
      },
    },

    name: {
      description: "User name",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
          detail: `(property) name?: string | undefined`,
        },
      },
    },
    professional: {
      description: "User's professional",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "Professional",
          detail: `type Region = {
            office: string;
            industry: string;
        }`,
        },
      },
    },

    color: {
      description: "Text color",
      options: options(modifiers.USERFEEDBACKBASE.colors),
      control: { type: "inline-radio" },

      table: {
        category: "choices",
        type: {
          summary: "Color",
          detail: details(modifiers.USERFEEDBACKBASE.colors),
        },
      },
    },
  },
  args: { ...mock },
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
          "Lets define the story for our _UserFeedback_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<UserFeedbackBaseProps>;

export const Default: Story<UserFeedbackBaseProps> = (args) => (
  <UserFeedbackBase {...args} />
);

export const Example1: Story<UserFeedbackBaseProps> = (args) => (
  <UserFeedbackBase {...args} />
);

Example1.args = { ...example1 };

export const Example2: Story<UserFeedbackBaseProps> = (args) => (
  <UserFeedbackBase {...args} />
);

Example2.parameters = {
  backgrounds: {
    default: "light",
  },
};

Example2.args = {
  ...example2,
};
