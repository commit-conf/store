
/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {

  eleventyConfig.addTemplateFormats("11ty.ts");

  // We can add support for JSX too, at the same time:
  eleventyConfig.addExtension(["11ty.ts", ".ts"], {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        let content = await this.defaultRenderer(data);
        return content;
      };
    },
  });

  // so we can recompile the client js with webpack before
  eleventyConfig.setWatchThrottleWaitTime(1000); // in milliseconds

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy({ "static/*": "." });
  eleventyConfig.addPassthroughCopy({ "static/img": "img" });
  eleventyConfig.addPassthroughCopy({ "static/svg": "svg" });

  //eleventyConfig.addWatchTarget("./src/_includes/**")

  // default: "."
  eleventyConfig.setInputDirectory("src/pages");
  // default: "_includes" (`input` relative)
  eleventyConfig.setIncludesDirectory("../_includes");
  eleventyConfig.setLayoutsDirectory("../_includes/layouts");
  // default: "_data" (`input` relative)
  eleventyConfig.setDataDirectory("../_data");

}
