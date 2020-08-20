const path = require('path');

module.exports = {
  entry: './source/app/index.js',
  output: {
    path: path.resolve(__dirname + 'source/', 'dist'),
    filename: 'bundle.js'
  }
};