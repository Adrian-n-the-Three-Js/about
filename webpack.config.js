var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
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
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
      },
      // { test: /\.svg$/, loader: 'svg-inline-loader' },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist',
  }
};

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   module: {
//     loaders: [
//       {
//         test: /\.jsx$/,
//         include: SRC_DIR,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-react', '@babel/preset-env']
//         }
//       }
//     ]
//   },
//    output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   }
// };