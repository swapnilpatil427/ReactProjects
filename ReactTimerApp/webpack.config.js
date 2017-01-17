var webpack = require('webpack');
module.exports = {
    // tell webpack where to start
    entry: [
        'script!jquery/dist/jquery.min.js', 'script!foundation-sites/dist/foundation.min.js', './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [new webpack.ProvidePlugin({ '$': 'jquery', 'jQuery': 'jquery' })],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: { // Webpack does not understand JSX files so we need loaders
        loaders: [{
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                // Excludes node_modules and bower folder
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    devtool: 'cheap-mpdule-eval-source-map' // Loads source maps for debugging
};