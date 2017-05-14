module.exports = {
    // Input file(s)
    entry: './app.jsx',
    // Output dir and file(s)
    output: {
        path: __dirname + './',
        filename: 'app.js'
    },
    // Uncomment to output source map
    // devtool: 'inline-source-map',
    module: {
        loaders: [
        {
            // Traget ext (Regex enabled)
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
        ]
    }
};
