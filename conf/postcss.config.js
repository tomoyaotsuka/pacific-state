module.exports = {
  plugins: [
    require("autoprefixer")({
      grid: true,
      browsers: [
        "last 2 versions",
        "ie >= 11",
        "iOS >= 10.0",
        "Android >= 5.0"
      ]
    })
  ]
}
