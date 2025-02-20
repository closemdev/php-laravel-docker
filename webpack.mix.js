const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/dist/assets/js')
   .vue()
   .sass('resources/sass/app.scss', 'public/dist/assets/css')
   .postCss('resources/css/app.css', 'public/dist/assets/css', [
       require('tailwindcss'),
   ])
   .version();

