let mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

mix.sass('src/input.scss', 'dist')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.js')],
    });