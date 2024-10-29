const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer");
const BundleAnalyzerPlugin = WebpackBundleAnalyzer.BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const { DefinePlugin } = webpack;

const prod = process.env.NODE_ENV === "production";
console.log(`Running in ${prod ? "production" : "development"} mode`);
console.log(`NODE ENV: ${process.env.NODE_ENV}`);
module.exports = function () {
  const config = {
    // fail if there are errors in production
    bail: prod,

    devtool: !prod && "cheap-module-source-map",

    // error if a single entrypoint gets too big
    performance: {
      hints: "warning",
      maxEntrypointSize: prod ? 200_000 : 1_000_000,
      maxAssetSize: prod ? 150_000 : 500_000,
    },

    entry: {
      main: "./src/_js/main.ts",
    },

    output: {
      path: path.resolve("js/"),
      filename: "[name].[contenthash:8].js",

      // Add /* filename */ comments to generated require()s in the output.
      pathinfo: !prod,

      // Point sourcemap entries to original disk location
      devtoolModuleFilenameTemplate: prod
        ? undefined
        : (info) => path.resolve(info.absoluteResourcePath),
    },
    resolve: {
      mainFields: ["module", "main"],
      extensions: [".ts", ".js"],
    },

    watchOptions: {
      ignored: /node_modules/,
    },

    optimization: {
      minimize: prod,

      // This is only used in production mode
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              // We want terser to parse ecma 8 code. However, we don't want it
              // to apply any minification steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              // https://github.com/facebook/create-react-app/pull/4234
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
              // Disabled because of an issue with Terser breaking valid code:
              // https://github.com/facebook/create-react-app/issues/5250
              // Pending further investigation:
              // https://github.com/terser-js/terser/issues/120
              inline: 2,
            },
            // Added for profiling in devtools
            keep_classnames: !prod,
            keep_fnames: !prod,
            output: {
              ecma: 5,
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true,
            },
          },
        }),
      ],

      // Keep the runtime chunk separated to enable long term caching
      // https://twitter.com/wSokra/status/969679223278505985
      // https://github.com/facebook/create-react-app/issues/5358
      runtimeChunk: "multiple",
      splitChunks: {
        // create chunks for files included async and static
        chunks: "all",

        // better defaults for HTTP/2
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
      },
    },
    module: {
      rules: [
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        {
          oneOf: [
            // Process application JS with Babel.
            {
              test: /\.(mjs|js|ts)$/,
              loader: require.resolve("babel-loader"),
              options: {
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                // See #6846 for context on why cacheCompression is disabled
                cacheCompression: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /i18nTest/,
      }),
      new DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
      new LodashModuleReplacementPlugin(),

      // TypeScript type checking
      new ForkTsCheckerWebpackPlugin({
        async: !prod,
        typescript: {
          enabled: true,
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
      }),

      // write js.json with the chunks composition, to be read from eleventy to create the script tags
      {
        apply(compiler) {
          compiler.hooks.afterEmit.tap("AfterEmitPlugin", (compilation) => {
            const stats = compilation.getStats().toJson({ publicPath: true });
            const result = {js: {}};
            Object.entries(stats.entrypoints).forEach(([key, values]) => {
              result.js[key] = (values as any).assets
                .filter((asset) => /\.(js|ts)$/.exec(asset.name))
                .map((asset) => `/js/${asset.name}`);
            });
            const assetsFile = "src/_data/assets.json";
            // check if src/_data/assets.json exist
            if (fs.existsSync(assetsFile)) {
              let fileAsJson = JSON.parse(
                fs.readFileSync(assetsFile, "utf8")
              );
              fileAsJson = Object.assign(fileAsJson, result);
              fs.writeFileSync(assetsFile, JSON.stringify(fileAsJson, null, 2));
            } else {
              fs.writeFileSync(assetsFile, JSON.stringify(result, null, 2));
            }
          });
        },
      },
    ],
  };

  // show the composition of the bundles
  if (typeof process.env.stats != "undefined") {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerPort: 3232,
      })
    );
  }

  return config;
};
