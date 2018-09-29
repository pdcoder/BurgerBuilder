'use strict';

const path = require('path');

// This is a custom Jest transformer turning file imports into filenames.
<<<<<<< HEAD
// http://facebook.github.io/jest/docs/tutorial-webpack.html
=======
// http://facebook.github.io/jest/docs/en/webpack.html
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
