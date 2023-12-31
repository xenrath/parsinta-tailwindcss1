let mix = require("laravel-mix");
var tailwindcss = require("tailwindcss");

mix
  .js("src/min.js", "dist/js").vue({ version: 2 })
  .sass("src/input.scss", "dist/css")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.js")],
  });
