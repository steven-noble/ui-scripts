const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../hooks/**/*.stories.mdx",
    "../hooks/**/*.stories.@(js|jsx|ts|tsx)",
    "../functions/**/*.stories.mdx",
    "../functions/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.mdx",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
    "../layouts/**/*.stories.mdx",
    "../layouts/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        {
          loader: "style-loader", // creates style nodes from JS strings
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
        },
        {
          loader: "sass-loader", // compiles Sass to CSS
        },
      ],
    });
    return config;
  },
  // refs: {
  //   react: {
  //     title: "Graphicscove",
  //     url: "http://localhost:50339/",
  //   },
  // },
};
