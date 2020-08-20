const path = require('path');

module.exports = {
  entry: './source/app/index.js',
  output: {
    path: path.resolve('/home/cbet0mup/Рабочий стол/node_API/source/', 'dist'),
    filename: 'bundle.js'
  }
};