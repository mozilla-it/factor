const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
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
  css: {
    // extract CSS in components into a single CSS file (only in production)
    // can also be an object of options to pass to extract-text-webpack-plugin
    extract: {
      filename: 'styles.css',
    },

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    // modules: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {
      scss: {
        css: 'css-loader',
        scss: 'css-loader | sass-loader',
      },
    },
  },
  configureWebpack: {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'sass-loader',
          options: {
            sourceMap: false,
            sassOptions: {
              includePaths: ['./src/templates/'],
              indentedSyntax: true,
            },
          },
        },
        // {
        //   test: /\.scss$/,
        //   use: [
        //     'style-loader',
        //     MiniCssExtractPlugin.loader,
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         minimize: true,
        //         sourceMap: true,
        //       },
        //     },
        //     {
        //       loader: 'sass-loader',
        //     },
        //   ],
        // },
        // {
        //   test: /\.vue$/,
        //   use: [
        //     {
        //       loader: 'vue-loader',
        //     },
        //   ],
        // },
        {
          test: /\.svg$/,
          use: ['babel-loader', 'vue-svg-loader'],
        },
      ],
    },
    entry: {
      'template-block': './src/templates/FactorBlockTemplate/index.vue',
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: 'css/[name].css',
    //   }),
    // ],
  },
};
