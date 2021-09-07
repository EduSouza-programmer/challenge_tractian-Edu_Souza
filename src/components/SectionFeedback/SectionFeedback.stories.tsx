import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import { details } from "@/utils/storybook/storybook.helpers";
import theme from "@/styles/themes/main.theme";

import SectionFeedback from ".";
import { SectionFeedbackProps } from "./SectionFeedback.types";
import mock from "./SectionFeedback.mock";

const WrapperCenter = styled.div``;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

const { modifiers } = theme;

export default {
  title: "Sections/SectionFeedback",
  component: SectionFeedback,
  argTypes: {
    userFeedbackCards: {
      description: "UserFeedbackCards component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "UserFeedbackCardProps[]",
          detail: `type UserFeedbackCardProps = {
            user: UserFeedbackBaseProps<Message>;
            isAnimation?: boolean | undefined;
          }

            type Message = {
            message: string;
          }

          type UserFeedbackBaseProps<T = unknown> = {
            image?: Image | undefined;
            size?: Size | undefined;
            borderColor?: BorderColor | undefined;
            name?: string | undefined;
            professional?: Professional | undefined;
            color?: Color | undefined;
         }

         type Image = {
          src: string;
          alt?: string | undefined;
          dataBlur?: string | undefined;
        }

         type Size = ${details(modifiers.USERFEEDBACKBASE.sizes)};

         type BorderColor = ${details(modifiers.USERFEEDBACKBASE.borderColors)};

         type Professional = {
          office: string;
          industry: string;
        }

        type Color = ${details(modifiers.USERFEEDBACKBASE.colors)};

        `,
        },
      },
    },
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
          "Lets define the story for our _SocialFeedbackSession_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<SectionFeedbackProps>;

export const Mobile: Story<SectionFeedbackProps> = (args) => (
  <SectionFeedback {...args} />
);

export const Desktop: Story<SectionFeedbackProps> = (args) => (
  <SectionFeedback {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
