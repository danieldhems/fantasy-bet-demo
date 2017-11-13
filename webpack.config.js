var path = require('path');

var APP_DIR = __dirname + '/app';
var BUILD_DIR = __dirname + '/dist';

module.exports = {
    context: __dirname,
    entry: {
        app: [APP_DIR + "/index"],
    },
    output: {
        path: BUILD_DIR,
        publicPath: '/assets/',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            app: path.join(__dirname, '/app'),
            components: path.join(__dirname, '/app/components'),
            actions: path.join(__dirname, '/app/actions'),
            reducers: path.join(__dirname, '/app/reducers')
        }
    },
    module: {
        loaders : [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['react', 'es2015']
                }
            }
        ]
    }
};
