import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import SectionPerformance from ".";
import { SectionPerformanceProps } from "./SectionPerformance.types";
import mock from "./SectionPerformance.mock";

const WrapperCenter = styled.div``;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Sections/SectionPerformance",
  component: SectionPerformance,
  argTypes: {
    cardPerformances: {
      description: "CardPerformance component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "CardPerformanceProps[]",
          detail: `(alias) type CardPerformanceProps = {
            image: Image;
            title: string;
            description: string;
        }

        type Image = {
          src: string;
          alt: string;
          dataBlur?: string | undefined;
          position?: Position | undefined;
         }

        `,
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
          "Lets define the story for our _SectionPerformance_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<SectionPerformanceProps>;

export const Mobile: Story<SectionPerformanceProps> = (args) => (
  <SectionPerformance {...args} />
);

export const Desktop: Story<SectionPerformanceProps> = (args) => (
  <SectionPerformance {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
