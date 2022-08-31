import React from 'react';
// global decorators를 설정하기 위해 반드시 필요한 react 모듈 import

/**
 * storybook layout settings
 */
export const parameters = {
  layout: 'padded',
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#f3f2ef' },
      { name: 'dark', value: '#333333' },
      { name: 'white', value: '#fff' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    showPanel: true,
    panelPosition: 'right',
    showNav: true,
    isFullscreen: false,
    isToolshown: true,
    storySort: {
      method: 'alphabetical',
      // Order Docs Overview and Docs Overview/Intro story first
      order: ['Docs Overview', ['Intro']],
    },
  },
  knobs: {
    disable: true,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/**
 * global decorators
 * @see https://vitejs.dev/guide/features.html#jsx
 * vite 설정으로 인해 JSX syntax를 사용하려면 .jsx 확장자를 사용해야한다.
 */
export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];
