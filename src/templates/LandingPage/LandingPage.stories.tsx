import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import LandingPage from ".";
import { LandingPageProps } from "./LandingPage.types";
import mock from "./LandingPage.mock";

const WrapperCenter = styled.div``;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Page/LandingPage",
  component: LandingPage,
  argTypes: {
    sectionHero: {
      description: "SectionHero component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "SectionHeroProps",
          detail: `type SectionHeroProps = {
            logo: Logo;
            title: string;
            caption: string;
            message: string;
            isAnimation?: boolean | undefined;
         }

          type Logo = {
          src: string;
          alt?: string | undefined;
          }

        `,
        },
      },
    },

    sectionFeatures: {
      description: "sectionFeatures component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "SectionFeaturesProps",
          detail: `type SectionFeaturesProps = {
            description: string;
            cardFeatures: CardFeaturesProps[];
          }

          type CardFeaturesProps = {
          imageIcon: ImageIcon;
          title: string;
          description: string;
          }

          type ImageIcon = {
            src: string;
            alt: string;
          }
        `,
        },
      },
    },

    sectionVideo: {
      description: "SectionVideo component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "SectionVideoProps",
          detail: `type SectionVideoProps = {
            title: string;
            backgroundImage: BackgroundImage;
            embedURL: string;
          }

          type BackgroundImage = {
            src: string;
            alt: string;
            dataBlur?: string | undefined;
        }
        `,
        },
      },
    },

    sectionPerformance: {
      description: "SectionPerformance component",
      control: { type: "object" },

      table: {
        category: "object",
        type: {
          summary: "SectionPerformanceProps",
          detail: `type SectionPerformanceProps = {
            cardPerformances: CardPerformanceProps[];
          }

          type CardPerformanceProps = {
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
          "Lets define the story for our _LandingPage_ component, good read.",
      },
    },
  },
  decorators: [defaultDecorator],
} as Meta<LandingPageProps>;

export const Mobile: Story<LandingPageProps> = (args) => (
  <LandingPage {...args} />
);

export const Desktop: Story<LandingPageProps> = (args) => (
  <LandingPage {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
