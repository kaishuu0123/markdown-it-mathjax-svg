import path from 'path'

const config = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'markdown-it-mathjax-svg.js',
    libraryTarget: 'umd',
    library: 'MarkdownItMathJaxSVG',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // optimization: {
	// 	// We no not want to minimize our code.
	// 	minimize: false
	// },
  devtool: 'source-map'
}

export default config
