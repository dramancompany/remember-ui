const path = require('path');

module.exports = {
  /**
   * src 내부 컴포넌트를 스토리북 내에서 사용할 수 있도록 설정
   */
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  staticDirs: ['../public'],
};
