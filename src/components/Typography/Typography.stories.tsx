import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { options, details } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import Typography from ".";
import { TypographyProps } from "./Typography.types";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers } = theme;

export default {
  title: "Components/Generics/Typography",
  component: Typography,
  argTypes: {
    text: {
      description: "Typography children",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "React.ReactNode",
          detail:
            "type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined",
        },
      },
    },
    size: {
      description: "Text size",
      options: options(modifiers.TYPOGRAPHY.sizes),
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "TypographySize",
          detail: details(modifiers.TYPOGRAPHY.sizes),
        },
      },
    },
    color: {
      description: "Text color",
      options: options(modifiers.TYPOGRAPHY.colors),
      control: { type: "inline-radio" },

      table: {
        category: "choices",
        type: {
          summary: "TypographyColor",
          detail: details(modifiers.TYPOGRAPHY.colors),
        },
      },
    },
    responsive: {
      description: "Renders typography responsively, if size is not passed",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "Responsive",
          detail: `type Responsive = {
            min: number;
            max: number;
            isNoWrapperText?: boolean | undefined;
        }`,
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
    ref: {
      description: "Typography ref",
      control: { type: "null" },

      table: {
        category: "logic",
      },
    },
    theme: {
      description: "Typography theme styled-component",
      control: { type: "null" },

      table: {
        category: "logic",
      },
    },
    as: {
      description: "Typography polimorphs styled-component",
      control: { type: "null" },

      table: {
        category: "logic",
      },
    },
    forwardedAs: {
      description: "Typography polimorphs ref styled-component",
      control: { type: "null" },

      table: {
        category: "logic",
      },
    },
  },
  args: {
    text: "Heading",
    size: "large",
    color: "white",
    disabled: false,
    notify: {
      error: "",
      success: "",
      warning: "",
      hint: "",
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
    docs: {
      source: {
        type: "code",
      },
      description: {
        component:
          "Lets define the story for our _Typography_ component, good read.",
      },
    },
    controls: { sort: "requiredFirst" },
  },
  decorators: [defaultDecorator],
} as Meta<TypographyProps>;

export const General: Story<TypographyProps> = (args) => (
  <Typography {...args} />
);

export const Responsive: Story<TypographyProps> = (args) => (
  <Typography {...args} />
);

Responsive.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
Responsive.args = {
  responsive: {
    min: 12,
    max: 150,
  },
  size: undefined,
};
