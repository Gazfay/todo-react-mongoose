var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./../webpack.config');

function initWebpack(app) {

  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, 
    { 
      publicPath: config.output.publicPath,
      hot: true,
      historyApiFallback: true
    })
  );

  app.use(webpackHotMiddleware(compiler));

}

module.exports = initWebpack;