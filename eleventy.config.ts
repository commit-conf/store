import {renderToStaticMarkup} from "react-dom/server";

// maybe you want to take a look to https://bennypowers.dev/posts/typescript-11ty-config/
/** @param { (import("@11ty/eleventy/src/UserConfig").default) } eleventyConfig  */
export default function (eleventyConfig) {

  eleventyConfig.addTemplateFormats("11ty.ts,11ty.tsx");

  // We can add support for JSX too, at the same time:
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
		key: "11ty.js",
		compile: function () {
			return async function (data) {
        const {page, ...rest} = data;
        const {rawInput, ...pageData} = page;
        // 11ty has a bug when rerendering the page, because rawInput has a circle dependency an it's not serializable
        // They serialize it I do not know where, but it will fail to rerender changes on src/pages if we dont remove it
        // Ey, but it's only on rerender, the first time it works. Sooooo this is a holy crap
        // I know, I know, this is a hack, but it works
        // maybe we want to use our own watcher to stop the server and rerun it. We also have problemas with 11ty caching the imports
        // https://www.11ty.dev/docs/programmatic/
				const content = await this.defaultRenderer({page: pageData, ...rest});
        return '<!DOCTYPE html>' + renderToStaticMarkup(content);
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

  //eleventyConfig.addWatchTarget("./src/_includes/**/*.{11ty.tsx,11ty.ts}");

  // default: "."
  eleventyConfig.setInputDirectory("src/pages");
  // default: "_includes" (`input` relative)
  eleventyConfig.setIncludesDirectory("../_includes");
  eleventyConfig.setLayoutsDirectory("../_includes/layouts");
  // default: "_data" (`input` relative)
  eleventyConfig.setDataDirectory("../_data");

}
