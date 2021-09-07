import { Story, Meta } from "@storybook/react/types-6-0";

import { options, details } from "@/utils/storybook/storybook.helpers";
import { mediaQueries } from "@/utils/theme/theme.helpers";

import MediaMatch, { MediaMatchProps } from ".";

export default {
  title: "Components/Generics/MediaMatch",
  component: MediaMatch,
  argTypes: {
    lessThan: {
      description: "Breakpoints media query max-width",
      options: options(mediaQueries),
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "Breakpoint",
          detail: details(mediaQueries),
        },
      },
    },
    greaterThan: {
      description: "Breakpoints media query min-width",
      options: options(mediaQueries),
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "Breakpoint",
          detail: details(mediaQueries),
        },
      },
    },
    ref: {
      description: "Ref element",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "ref",
          detail:
            "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null",
        },
      },
    },
    theme: {
      description: "Styled-component theme",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "DefaultTheme",
        },
      },
    },
    as: {
      description: "Polymorphism styled-components",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "React.ElementType",
        },
      },
    },
    forwardedAs: {
      description: "Polymorphism styled-components",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "React.ElementType",
        },
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<MediaMatchProps>;

export const lessThanExample: Story<MediaMatchProps> = (args) => {
  const { lessThan } = args;
  return (
    <div style={{ color: "#fafafa" }}>
      Try to resize the screen <br /> <br />
      <MediaMatch {...args}>
        Matched!!! <br />
        @media (max-width: <b>{lessThan}</b> ) <br />
        <br />
        <pre>
          {JSON.stringify(
            {
              ...mediaQueries,
            },
            null,
            "\t"
          )}
        </pre>
      </MediaMatch>
    </div>
  );
};

lessThanExample.args = {
  lessThan: "769",
};
lessThanExample.argTypes = {
  greaterThan: {
    control: { type: "null" },
  },
};

export const greaterThanExample: Story<MediaMatchProps> = (args) => {
  const { greaterThan } = args;
  return (
    <div style={{ color: "#fafafa" }}>
      Try to resize the screen <br /> <br />
      <MediaMatch {...args}>
        Matched!!! <br />
        @media (min-width: <b>{greaterThan}</b> ) <br />
        <br />
        <pre>
          {JSON.stringify(
            {
              ...mediaQueries,
            },
            null,
            "\t"
          )}
        </pre>
      </MediaMatch>
    </div>
  );
};

greaterThanExample.argTypes = {
  lessThan: {
    control: { type: "null" },
  },
};
greaterThanExample.args = {
  greaterThan: "769",
};
