module.exports = {
    entry: {
        app:"./src/app.js",
        login:"./src/login/index.js"
    },
    output: {
        path: __dirname,
        filename: "[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};