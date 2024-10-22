const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const buildDirname = ".build";
const buildDir = path.join(__dirname, buildDirname);

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("ts");
  // 11ty doesn't support TypeScript out of the box, so we need to add a custom loader and build to a temporary directory
  eleventyConfig.addExtension("ts", {
    outputFileExtension: "html",
    compile: async function (inputContent, inputPath) {
      const relativePath = path.relative(__dirname, inputPath);
      const outputPath = path
        .join(buildDir, relativePath)
        .replace(/\.ts$/, ".js");

      // Ensure the temporary directory and necessary subdirectories exist
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Compile the TypeScript file to a temporary location
      try {
        execSync(`tsc ${inputPath} --outDir ${buildDir}`);
      } catch (error) {
        console.error("Error compiling TypeScript:", error);
        throw error;
      }

      // Move the compiled file to the correct location if necessary
      const buildFile = path.join(
        buildDir,
        path.basename(inputPath).replace(/\.ts$/, ".js")
      );
      if (fs.existsSync(buildFile) && buildFile !== outputPath) {
        try {
          fs.renameSync(buildFile, outputPath);
        } catch (error) {
          console.error("Error moving compiled file:", error);
          throw error;
        }
      }

      // Log paths for debugging
      console.log("Input Path:", inputPath);
      console.log("Output Path:", outputPath);

      // Check if the compiled file exists
      if (!fs.existsSync(outputPath)) {
        console.error("Compiled file does not exist:", outputPath);
        throw new Error(`Compiled file does not exist: ${outputPath}`);
      }

      // Load the compiled JavaScript file
      try {
        const { data, default: render } = require(outputPath);
        return async (pageData) => {
          const mergedData = { ...pageData, ...data };
          const layoutTsPath = path.join(
            __dirname,
            "src",
            "_includes",
            "layouts",
            `${mergedData.layout}.ts`
          );
          const layoutJsPath = path.join(
            buildDir,
            "src",
            "_includes",
            "layouts",
            `${mergedData.layout}.js`
          );

          // Compile the layout file if it doesn't exist
          if (!fs.existsSync(layoutJsPath)) {
            const layoutOutputDir = path.dirname(layoutJsPath);
            if (!fs.existsSync(layoutOutputDir)) {
              fs.mkdirSync(layoutOutputDir, { recursive: true });
            }
            execSync(`tsc ${layoutTsPath} --outDir ${buildDir}`);
          }

          const { default: layoutRender } = require(layoutJsPath);
          mergedData.content = render(mergedData);
          return layoutRender(mergedData);
        };
      } catch (error) {
        console.error("Error loading compiled module:", error);
        throw error;
      }
    },
  });

  /**
  eleventyConfig.on("eleventy.before", async () => {
  });
  */

  // copy static assets to the output directory+
  eleventyConfig.addPassthroughCopy({
    [`${buildDirname}/src/_data/*.css`]: "css",
  });

  // I want to rebuild on external changes to .build/src/_data files
  eleventyConfig.addWatchTarget(`${buildDir}/src/_data/*`);

  return {
    dir: {
      input: "src",
      data: "../.build/src/_data",
    },
  };
};
