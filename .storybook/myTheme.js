import { create } from '@storybook/theming';

export default create({
  colorPrimary: 'hotpink',
  colorSecondary: '#3B6580',

  // UI
  appBg: '#30333c',
  appContentBg: '#181A1B',
  appBorderColor: '#3B6580',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#eeeaea',
  textInverseColor: '#44f019',

  // Toolbar default and active colors
  barTextColor: '#eeeaea',
  barSelectedColor: '#297caf',
  barBg: '#06092B',

  // Form colors
  inputBg: '#1B1D1E',
  inputBorder: '#3B6580',
  inputTextColor: '#eeeaea',
  inputBorderRadius: 4,
  textMutedColor: '#389adb',

  base: 'dark',
  brandTitle: 'TRACTIAN - storybook',
  brandUrl:
    'https://res.cloudinary.com/dppr8dksd/image/upload/v1630335521/logo_storybook_nyk2ug.svg',
  brandImage:
    'https://res.cloudinary.com/dppr8dksd/image/upload/v1630335521/logo_storybook_nyk2ug.svg',
});
