import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details, options } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import TextField from ".";
import { TextFieldProps } from "./TextField.types";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 27rem;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers, models } = theme;

export default {
  title: "Components/Forms/TextField",
  component: TextField,
  argTypes: {
    onValue: {
      description: "Function dispatch input value",
      action: "changes",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "onValue",
          detail: `onValue: ((value?: InputValue | undefined) => void) | undefined`,
        },
      },
    },
    size: {
      description: "Choose the textfield size",
      options: options(modifiers.TEXTFIELD.sizes),
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "TextFieldSize",
          detail: details(modifiers.TEXTFIELD.sizes),
        },
      },
    },
    color: {
      description: "Choose the textfield color",
      options: options(modifiers.TEXTFIELD.colors),
      control: { type: "inline-radio" },

      table: {
        category: "choices",
        type: {
          summary: "TextFieldColor",
          detail: details(modifiers.TEXTFIELD.colors),
        },
      },
    },
    label: {
      description: "Texfield label, typography component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "TypographyProps",
          detail: `(alias) type TypographyProps<T = Attributes> = {
            text: React.ReactNode;

            size?: ${details(modifiers.TYPOGRAPHY.sizes)};

            color?: ${details(modifiers.TYPOGRAPHY.colors)};

            responsive?: {
              min: number;
              max: number;
              isNoWrapperText?: boolean;
            };

            htmlFor: string;
            as?: ElementType<...> | undefined;
            forwardedAs?: ElementType<...> | undefined;`,
        },
      },
    },
    icon: {
      description: "Choose the textfield icon",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "IconProps",
          detail: `(alias) type IconProps<T = unknown> = {
            listOfChoices: ${details(models.icon.list)};

            size?: ${details(modifiers.ICON.sizes)};

            color?: ${details(modifiers.ICON.colors)}

            position?: "left" | "right" | undefined;

            className?: string | undefined;
        } & T`,
        },
      },
    },
    notify: {
      description: "Notify behavior",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "Notify",
          detail: `type Notify = {
            success?: string | undefined;
            error?: string | undefined;
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
  },
  args: {
    size: "medium",
    color: "primary",
    label: { text: "Name", color: "black", htmlFor: "Name", size: "xsmall" },
    disabled: false,
    notify: {
      error: "",
      warning: "",
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "light",
    },
    layout: "fullscreen",
    docs: {
      source: {
        type: "code",
      },
      description: {
        component:
          "Lets define the story for our _TextField_ component, good read.",
      },
    },
    controls: { sort: "requiredFirst" },
  },
  decorators: [defaultDecorator],
} as Meta<TextFieldProps>;

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const WithIcon: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
);

WithIcon.args = {
  label: { text: "Email", color: "black", htmlFor: "Email", size: "xsmall" },
  icon: {
    listOfChoices: "Email",
    position: "left",
    size: "small",
  },
  placeholder: "john.cage@gmail.com",
};

export const Error: Story<TextFieldProps> = (args) => <TextField {...args} />;

Error.args = {
  label: { text: "Email", color: "black", htmlFor: "Email", size: "xsmall" },
  icon: {
    listOfChoices: "Email",
    position: "left",
    size: "small",
  },
  placeholder: "john.cage@gmail.com",
  notify: {
    error: "Ops... something is wrong",
    warning: "",
  },
};
