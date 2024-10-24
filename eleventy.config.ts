import "tsx/esm";

/**  @param { (import("@11ty/eleventy/src/UserConfig").default) } eleventyConfig  */
export default function (eleventyConfig) {

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

  /**
   * Combine data in the Eleventy data cascade, rather than overwriting it
   * @see {@link https://www.11ty.dev/docs/data-deep-merge/ Data deep merge in 11ty}
   */
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "src/pages",       // default: "."
      includes: '../_includes',   // default: "_includes" (`input` relative)
      layouts: '../_includes/layouts',
		  data: "../_data",           // default: "_data" (`input` relative)
    },
  }
}
