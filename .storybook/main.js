const path = require('path');
module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    '@storybook/addon-contexts/register'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.styl$/,
      use: ["style-loader", "css-loader", "stylus-loader"],
      include: path.resolve(__dirname, "../src")
    });

    // Return the altered config
    return config;
  },

};
