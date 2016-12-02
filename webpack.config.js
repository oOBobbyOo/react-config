var path = require('path');
var webpack = require('webpack');

module.exports  = {
	entry: './app.js',
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		hot: true,
	    inline: true,
	    historyApiFallback: true,
	    port: 3000
	},
	resolve:{
	    extensions:['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
                   presets: ['es2015', 'react']
                }
			},
			{
			    test: /\.css$/,
			    loader: 'style!css'
			},
			{
			    test: /\.scss$/,
			    loader: 'style!css!sass'
			},
			{
			    test: /\.less$/,
			    loader: 'style!css!less'
			},
			{
			    test: /\.(jpe?g|png|gif|svg)$/,
			    loader: 'url-loader?limit=8192&name=[path][hash].[ext]?[hash]'
			},
			{
			    test: /\.(ttf|eot|woff|woff2|svg)\??.*$/,
			    loader: 'url-loader?limit=50000&name=[path][hash].[ext]?[hash]'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	  	new webpack.optimize.UglifyJsPlugin({
	        output: {
	          comments: false,
	        },
	        compress: {
	          warnings: false
	        }
	    }),
      	new webpack.DefinePlugin({
	        'process.env': {
	            NODE_ENV: JSON.stringify('production'),
	        },
	    })
	]
};
