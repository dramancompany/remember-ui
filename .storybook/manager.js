// ./storybook/manager.ts
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light', // this will inherit the base properties of Storybooks'light theme

  // Point color
  colorSecondary: '#FF5414',

  // UI
  appBg: '#E8E6DF',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,0.1)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Pretendard", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#333333',
  barSelectedColor: '#FF5414',
  barBg: '#E8E6DF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: 'Remember UI Component',
  brandUrl: 'https://dramancompany.github.io/remember-ui',
  brandImage:
    'https://s3.ap-northeast-1.amazonaws.com/static.rememberapp.co.kr/logo/remember/remember_ui_logo.png',
});

addons.setConfig({
  theme,
});
