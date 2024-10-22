// Autoprefix css rules
const autoprefixer = require("autoprefixer");

// minimize CSS
const cssnano = require("cssnano");

// Purge unused CSS
const purgecss = require("@fullhuman/postcss-purgecss");

// for browser support list, see browserslist in package.json
module.exports = {
  plugins: [
    // Remove unused CSS
    purgecss({
      content: ["./src/**/*.njk", "./src/**/*.ts"],
      variables: true,
    }),
    autoprefixer,
    cssnano({
      preset: [
        "default",
        {
          discardComments: { removeAll: true }, // Remove all comments
          mergeRules: true, // Merge CSS rules
          normalizeWhitespace: true, // Reduce whitespace in CSS
          mergeIdents: true, // Reduce CSS selectors
          reduceIdents: false, // Don't change CSS selector names
        },
      ],
    }),
  ],
};
