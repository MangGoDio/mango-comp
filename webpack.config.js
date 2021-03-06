const webpack = require('webpack')

module.exports = {
    entry: [
        './src/app.js',
    ],
    output: {
        path: __dirname,
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'stage-0', 'react'] }
            }],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader?modules&camelCase&importLoaders=1&localIdentName=[local][hash:base64:5]',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')()
                            ];
                        }
                    }
                },
                'sass-loader'
            ]
        }
        ]
    }
}