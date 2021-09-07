import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details, options } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import Cta from ".";
import { CtaProps } from "./CTA.types";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers, models } = theme;

export default {
  title: "Components/Generics/Cta",
  component: Cta,
  argTypes: {
    size: {
      description: "Choose the size of the Cta",
      options: options(modifiers.CTA.sizes),
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "ButtonSize",
          detail: details(modifiers.CTA.sizes),
        },
      },
    },

    color: {
      description: "Choose the color of the Cta",
      options: options(modifiers.CTA.colors),
      control: { type: "inline-radio" },

      table: {
        category: "choices",
        type: {
          summary: "ButtonColor",
          detail: details(modifiers.CTA.colors),
        },
      },
    },

    fullWidth: {
      description: "Behavior to achieve maximum width",
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
      description: "Uses the typography component to define the Cta label",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "TypographyProps",
          detail: `type TypographyProps = {
            text: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;

            size?: ${details(modifiers.TYPOGRAPHY.sizes)};

            color?: ${details(modifiers.TYPOGRAPHY.colors)};

            responsive?: Responsive;
          };
        type Responsive = {
          min: number;
          max: number;
          isNoWrapperText?: boolean | undefined;
      }`,
        },
      },
    },
    appearance: {
      description: "Choose the appearance of the cta",
      options: options(modifiers.CTA.appearances),
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "Appearance",
          detail: details(modifiers.CTA.appearances),
        },
      },
    },
    icon: {
      description: "Choose the icon for the label",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "IconProps",
          detail: `type IconProps = {
            listOfChoices: ${details(models.icon.list)};

            size?: ${details(modifiers.ICON.sizes)};

            color?: ${details(modifiers.ICON.colors)};

            position?: ${details(modifiers.ICON.positions)}
          };
        `,
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
    as: {
      description: "Polimorphism styled-component",
      options: ["a", "button"],
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "React.ElementType",
          detail: `(property) as?: ElementType<any> | undefined`,
        },
      },
    },
    href: {
      description: "Href when use link",
      control: { type: "text" },

      table: {
        category: "text",
        type: {
          summary: "string",
          detail: `href?: string | undefined;`,
        },
      },
    },
  },
  args: {
    href: "",
    size: "large",
    fullWidth: false,
    color: "primary",
    disabled: false,
    label: {
      size: "small",
      text: "Buy now",
      color: "white",
      notify: {
        error: "",
        hint: "",
        success: "",
        warning: "",
      },
    },
    appearance: "button",
    as: "button",
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
        component: "Lets define the story for our _Cta_ component, good read.",
      },
    },
    controls: { sort: "requiredFirst" },
  },
  decorators: [defaultDecorator],
} as Meta<CtaProps>;

export const Default: Story<CtaProps> = (args) => <Cta {...args} />;

export const WithIcon: Story<CtaProps> = (args) => <Cta {...args} />;

WithIcon.args = {
  icon: {
    listOfChoices: "AddShoppingCart",
    color: "white",
    size: "xsmall",
    position: "left",
  },
};

export const Polimorfism: Story<CtaProps> = (args) => <Cta {...args} />;

Polimorfism.args = {
  as: "a",
  href: "/link",

  icon: {
    listOfChoices: "Favorite",
    color: "white",
    size: "xsmall",
    position: "left",
  },
};
