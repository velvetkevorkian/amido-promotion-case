module.exports = function(config) {
  config.addPassthroughCopy('assets')
  config.addPassthroughCopy('pages/robots.txt')

  return {
    dir: {
      input: "pages",
      output: "dist"
    }
  }
};
