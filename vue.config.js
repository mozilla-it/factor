// vue.config.js
module.exports = {
  // TODO: figure out SVG's in import
  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule('svg');

  //   svgRule.uses.clear();

  //   svgRule
  //     .use('babel-loader')
  //     .loader('babel-loader')
  //     .end()
  //     .use('vue-svg-loader')
  //     .loader('vue-svg-loader');
  // },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['babel-loader', 'vue-svg-loader'],
        },
      ],
    },
  },
};
