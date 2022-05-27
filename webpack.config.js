var path = require("path");

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, './src'),
    entry: {
        main: './main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dst'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};