import React from 'react';
// global decorators를 설정하기 위해 반드시 필요한 모듈

/**
 * storybook layout settings
 */
export const parameters = {
  layout: 'fullscreen',
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
 */
export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];
