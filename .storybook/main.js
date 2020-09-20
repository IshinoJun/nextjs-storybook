const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
  ],
  webpackFinal: async(config, {configType}) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [SRC_PATH],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [['react-app', { flow: false, typescript: true }]],
            }
          },
          { loader: require.resolve('react-docgen-typescript-loader') }
        ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
};