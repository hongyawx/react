let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('../webpack/webpack.dev.conf');
let conf = require('../config');
let compiler = webpack(config);
let app = new WebpackDevServer(compiler, {
    hot: true,
    contentBase: conf.root,
    historyApiFallback: true
});
let port = conf.devPort;
let url = `http://localhost:${port}`;

app.listen(port, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }
});
console.log(`listen at ${url}`);