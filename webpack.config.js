const config = {
   entry: './main.js',
   output: {
         filename: 'index.js',
      },
   devServer: {
         inline: true,
         port: 3000
      },
   module: {
         rules: [
             {
              test: /\.css$/,
              use: [
                {
                  loader: "style-loader"
                },
                {
                  loader: "css-loader",
                  options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: "[name]_[local]_[hash:base64]",
                    sourceMap: true,
                    minimize: true
                  }
                }
              ]
            },
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
   query: {
               "presets": ["es2015", "stage-0"]
            }
         }
      ]
   }
}

module.exports = config;
