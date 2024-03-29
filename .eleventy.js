const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const filters = require("./filters/");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("well-known");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: true,
    port: 8080,

    watch: ["_site/assets/**/*.css"],
    showAllHosts: true,

    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },

    encoding: "utf-8",
    showVersion: false,
  });

  eleventyConfig.addPassthroughCopy("assets/svg");
  eleventyConfig.addPassthroughCopy("assets/script");
  eleventyConfig.addPassthroughCopy("assets/image");

  eleventyConfig.addFilter("currentYear", filters.currentYear);

  eleventyConfig.addCollection("blog_en", function (collection) {
    return collection.getFilteredByGlob("en/blog/*.md");
  });

  eleventyConfig.addCollection("weekly_en", function (collection) {
    return collection.getFilteredByGlob("en/blog/week*.md");
  });

  eleventyConfig.addCollection("blog_tr", function (collection) {
    return collection.getFilteredByGlob("./tr/blog/*.md");
  });

  eleventyConfig.addCollection("weekly_tr", function (collection) {
    return collection.getFilteredByGlob("tr/blog/week*.md");
  });

  eleventyConfig.addTransform("sitemap-remove-extension", function (content, outputPath) {
    if (outputPath === "_site/sitemap.xml")
      return content.replaceAll('.html', '');

    return content;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  }
};
