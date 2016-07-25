
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {path: __dirname , filename:'bundle.js'},
	module: {
	loaders:[{
		
		loader:'babel-loader',
		exclude:/node_modeules/,
		query:{
			presets:['es2015','react']
		      }
		}
		]
	}
}