import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details, options } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import Radio from ".";
import { RadioProps } from "./Radio.types";

const WrapperCenter = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 100vh;
`;

const MarginBottom = styled.div`
  margin-bottom: 0.8rem;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers } = theme;

export default {
  title: "Components/Forms/Radio",
  component: Radio,
  argTypes: {
    onValue: {
      description: "Function to get radio value",
      action: "checked",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "function",
          detail: `(property) onValue?: ((value: RadioValue) => void) | undefined`,
        },
      },
    },
    label: {
      description: "Radio label",
      control: { type: "object" },

      table: {
        category: "text",
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
      description: "Function to get radio value",
      options: options(modifiers.RADIO.colors),
      control: { type: "inline-radio" },

      table: {
        category: "choices",
        type: {
          summary: "RadioColor",
          detail: details(modifiers.RADIO.colors),
        },
      },
    },
    disabled: {
      description: "Radio behavior disabled",
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "boolean",
          detail: "true | false",
        },
      },
    },
    name: {
      description: "Radio input name",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "string",
          detail: `name?: string | undefined;`,
        },
      },
    },
    value: {
      description: "Radio input value",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "string",
          detail: `value?: string | undefined;`,
        },
      },
    },
  },
  args: {
    disabled: false,
    color: "primary",
    value: "adventure",
    name: "radio",
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
          "Lets define the story for our _Radio_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<RadioProps>;

export const Default: Story<RadioProps> = (args) => (
  <>
    <MarginBottom>
      <Radio {...args} />
    </MarginBottom>
    <MarginBottom>
      <Radio
        {...args}
        checked
        value="action"
        name="radio"
        label={{ text: "Action", size: "small", htmlFor: "action" }}
      />
    </MarginBottom>
    <Radio
      {...args}
      value="strategy"
      name="radio"
      label={{ text: "Strategy", size: "small", htmlFor: "strategy" }}
    />
  </>
);
