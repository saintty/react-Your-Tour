const postcssProcessEnv = require("postcss-preset-env");
module.exports = {
  plugins: [
    postcssProcessEnv({
      browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
    }),
    require("cssnano"),
  ],
};
