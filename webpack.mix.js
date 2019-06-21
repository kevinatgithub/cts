const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.disableNotifications();
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

// mix.webpackConfig({
//    devServer: { contentBase: [ path.resolve(__dirname, 'public') ], },
// })

mix.options({
   hmrOptions: {
         host: 'localhost',  // site's host name
   }
});

// // fix css files 404 issue
mix.webpackConfig({
   // add any webpack dev server config here
   devServer: { 
         proxy: {
            host: '10.100.100.12',  // host machine ip 
            port: 8080,
         },
         watchOptions:{
            aggregateTimeout:200,
            poll:1000   //5000
         },

   }
});

Mix.listen('configReady', (webpackConfig) => {
   if (Mix.isUsing('hmr')) {
     // Remove leading '/' from entry keys
     webpackConfig.entry = Object.keys(webpackConfig.entry).reduce((entries, entry) => {
       entries[entry.replace(/^\//, '')] = webpackConfig.entry[entry];
       return entries;
     }, {});
 
     // Remove leading '/' from ExtractTextPlugin instances
     webpackConfig.plugins.forEach((plugin) => {
       if (plugin.constructor.name === 'ExtractTextPlugin') {
         plugin.filename = plugin.filename.replace(/^\//, '');
       }
     });
   }
 });