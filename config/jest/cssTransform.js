'use strict';

// This is a custom Jest transformer turning style imports into empty objects.
<<<<<<< HEAD
// http://facebook.github.io/jest/docs/tutorial-webpack.html
=======
// http://facebook.github.io/jest/docs/en/webpack.html
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186

module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};
