import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details, options } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import Icon from ".";
import { IconProps } from "./Icon.types";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers, models } = theme;

export default {
  title: "Components/Generics/Icon",
  component: Icon,
  argTypes: {
    listOfChoices: {
      type: { required: true },
      description: "A list of icon to choose",
      options: options(models.icon.list),
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "Icons",
          detail: details(models.icon.list),
        },
      },
    },
    size: {
      description: "Choose the icon size",
      options: options(modifiers.ICON.sizes),
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "IconSize",
          detail: details(modifiers.ICON.sizes),
        },
      },
    },
    color: {
      description: "Choose the icon size",
      options: options(modifiers.ICON.colors),
      control: { type: "inline-radio" },

      table: {
        category: "choices",
        type: {
          summary: "IconColor",
          detail: details(modifiers.ICON.colors),
        },
      },
    },
    position: {
      description: "Icon position",
      options: options(modifiers.ICON.positions),
      control: { type: "inline-radio" },

      table: {
        category: "choices",
        type: {
          summary: "Position",
          detail: details(modifiers.ICON.positions),
        },
      },
    },
    notify: {
      description: "Nofifys icon",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "Notify",
          detail: `type Notify = {
            error?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
        }`,
        },
      },
    },
    disabled: {
      description: "Disabled behavior",
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "boolean",
          detail: "true | false",
        },
      },
    },
    "aria-label": {
      description: "For assistive technologies",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: "'aria-label'?: string | undefined;",
        },
      },
    },
  },
  args: {
    listOfChoices: "AddShoppingCart",
    size: "large",
    color: "white",
    notify: {
      error: "",
      success: "",
      warning: "",
    },
    disabled: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "dark",
    },
    layout: "fullscreen",
    docs: {
      source: {
        type: "code",
      },
      description: {
        component: "Lets define the story for our _Icon_ component, good read.",
      },
    },
    controls: { sort: "requiredFirst" },
  },
  decorators: [defaultDecorator],
} as Meta<IconProps>;

export const Default: Story<IconProps> = (args) => <Icon {...args} />;
