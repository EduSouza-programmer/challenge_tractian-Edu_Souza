import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details, options } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import Checkbox from ".";
import { CheckboxProps } from "./Checkbox.types";

const WrapperCenter = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 100vh;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers } = theme;

export default {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  argTypes: {
    onValue: {
      description: "Function dispatch input value",
      action: "isCheck",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "Functions",
          detail: `(property) onValue?: ((isCheck: boolean) => void) | undefined`,
        },
      },
    },
    checked: {
      description: "Checkbox switch check",
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "boolean",
          detail: "true | false",
        },
      },
    },
    label: {
      description: "Checkbox label",
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
    color: {
      description: "Checkbox color",
      options: options(modifiers.CHECKBOX.colors),
      control: { type: "inline-radio" },

      table: {
        category: "choices",
        type: {
          summary: "CheckboxColor",
          detail: details(modifiers.CHECKBOX.colors),
        },
      },
    },
    disabled: {
      description: "Checkbox disabled behavior",
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
    disabled: false,
    color: "primary",
    label: {
      text: "Adventure",
      size: "small",
      htmlFor: "adventure",
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "dark",
    },
    layout: "fullscreen",
    controls: { sort: "requiredFirst" },
    docs: {
      source: {
        type: "code",
      },
      description: {
        component:
          "Lets define the story for our _Checkbox_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<CheckboxProps>;

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const ListModel: Story<CheckboxProps> = (args) => (
  <>
    <Checkbox
      {...args}
      checked
      label={{ text: "Action", htmlFor: "action", size: "small" }}
    />
    <Checkbox
      {...args}
      label={{ text: "Adventure", htmlFor: "adventure", size: "small" }}
    />
    <Checkbox
      {...args}
      label={{ text: "Strategy", htmlFor: "strategy", size: "small" }}
    />
    <Checkbox {...args} />
  </>
);

ListModel.args = {
  label: {
    text: "TRY IT",
    htmlFor: "try",
    size: "small",
  },
};
