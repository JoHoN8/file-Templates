const path = require('path');

module.exports = function(env) {

	return {
		entry: {
			file1: './src/scripts/app.js',
			file2: './src/scripts/app.js',
			file3: './src/scripts/app.js'
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, "./dist/scripts")
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
					//allows for import of styles (import css from 'file.css');
				},
				{
					test: /\.js$|\.jsx$/,
					//exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							"presets": [
							[
								"es2015", {
								"modules": false
								}
							],
							"stage-0"
							]
						}
					}
				},
				{
					test: /\.(png|woff|woff2|eot|ttf|svg)$/,
					use: [ 'style-loader', 'file-loader' ]
				}
			]
		},
		plugins: [],
		//externals is for scripts are a already on page, ie jquery etc.....
		externals: {
			jquery: "jQuery"
		}
		//devtool: 'source-map'
		};
}

