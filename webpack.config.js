var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      // {
      //   test: /\.svg$/,
      //   use: [{
      //     loader: 'react-svg-loader',
      //   }],
      // },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
      //   loader: 'file-loader',
      // },
      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack', 'url-loader'],
      // },
      // // {
      // //   test: /\.(svg|png|jpg|gif)$/,
      // //   use: {
      // //     loader: "file-loader",
      // //     options: {
      // //       name: "[name].[hash].[ext]",
      // //       outputPath: "imgs"
      // //     }
      // //   }
      // // },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  }
};
