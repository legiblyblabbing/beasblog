module.exports = function(eleventyConfig) {
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        // Optional, default is "---"
        excerpt_separator: "<!-- excerpt -->"
    });
    eleventyConfig.setTemplateFormats([
        "html",
        "md",
        "njk",
        "yml",
        "jpg",
        "png",
    ]);
};