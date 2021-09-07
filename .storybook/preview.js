import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import ThemeProvider from '@/components/ThemeProvider';

// para resolver Imagem next no storybook
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customViewports = {
  figmaMobile: {
    name: 'Figma Mobile',
    styles: {
      width: '414px',
      height: '750px',
    },
    type: 'mobile',
  },
  desktop: 'responsive',
};

export const parameters = {
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  backgrounds: {
    default: 'custom-light',
    values: [
      {
        name: 'light',
        value: '#fbfbfb',
      },
      {
        name: 'dark',
        value: '#333333',
      },
      {
        name: 'custom-light',
        value: '#FAFAFA',
      },
      {
        name: 'custom-dark',
        value: '#06092B',
      },
    ],
  },

  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Components'],
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider >
      <Story />
    </ThemeProvider>
  ),
];
