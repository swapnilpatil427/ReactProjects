module.exports = {
    entry: './app/app.jsx', // tell webpack where to start
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather/Weather.jsx',
            WeatherForm: 'app/components/Weather/WeatherForm.jsx',
            WeatherMessage: 'app/components/Weather/WeatherMessage.jsx',
            openweathermap: 'app/api/OpenWeatherMap.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx'
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
        }]
    },
    devtool: 'cheap-mpdule-eval-source-map' // Loads source maps for debugging
};