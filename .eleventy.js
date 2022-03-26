
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const path = require("path");
const prettier = require("prettier");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("site/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("site/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("site/favicon.ico");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Move the browser sync snippet from <body> to <head> to avoid conflict with Turbo.
  // Browser sync is only injected for dev build, so this isn't needed for production.
  // https://github.com/BrowserSync/browser-sync/issues/977#issuecomment-236443965
  eleventyConfig.setBrowserSyncConfig({
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match;
        }
      }
    }
  });

  // Improve the file layout of generated HTML output.
  eleventyConfig.addTransform("prettier", function (content, outputPath) {
    const extname = path.extname(outputPath);
    switch (extname) {
      case ".html":
      case ".json":
        // Strip leading period from extension and use as the Prettier parser.
        const parser = extname.replace(/^./, "");
        return prettier.format(content, { parser });
      default:
        return content;
    }
  });

  return {
    // Change the name of the standard Eleventy directories.
    dir: { data: "data", // Global data directory. Inside the input directory.
           includes: "includes", // Inside the input directory.
           layouts: "layouts",
           input: "site",
           output: "public" }
  };
};
