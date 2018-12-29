const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	node: false,
	mode: 'production',
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    plugins: [
    ],
    entry: {
        'ractive-droplist': path.resolve(__dirname, './src/ractive-droplist.ractive.html'),
        'ractive-droplist.min': path.resolve(__dirname, './src/ractive-droplist.ractive.html')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'RactiveDroplist',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    externals: {
    	ractive: {
    		commonjs: 'ractive',
    		commonjs2: 'ractive',
    		amd: 'ractive',
    		root: 'Ractive'
    	},
		'popper.js': {
            commonjs: 'popper.js',
            commonjs2: 'popper.js',
            amd: 'popper.js',
            root: 'Popper'
        },
        'ractive-decorators-popper': {
            commonjs: 'ractive-decorators-popper',
            commonjs2: 'ractive-decorators-popper',
            amd: 'ractive-decorators-popper',
            root: 'RactiveDecoratorsPopper'
        }
    },
    module: {
        rules: [
            {
                test: /\.ractive\.html$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: ['@babel/preset-env']
                        }                        
                    },
                    {
                        loader: 'ractive-bin-loader'
                    }                    
                ]
            }
        ]
    }
}