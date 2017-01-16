module.exports = {
    entry: './app/app.jsx', // tell webpack where to start
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {},
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
        }]
    }
};