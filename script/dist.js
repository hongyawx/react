let path = require('path');
let webpack = require('webpack');
let config = require('../webpack/webpack.prod.conf');
let conf = require('../config');
let prebuild = require('./prebuild');

// 启动一个服务器，预览打包后的页面
let server = function(){
	let express = require('express');
	let app = express();
	let port = conf.distPort;

	app.use('/static', express.static(path.resolve(conf.dist, 'static')));
	app.get('*', function(request, response) {
	    response.sendFile(path.resolve(conf.dist, 'index.html'));
	});
	app.listen(port);
	console.log('server started on port ' + port);
};
let exec = require('child_process').exec;
// 删除dist目录
exec(`rm -rf ${conf.dist}`, function(err, out) {
    console.log(out);
    err && console.log(err);
});

// 调用webpack打包
webpack(config, function(err, stats) {
    console.log(stats.toString({ chunks: false, color: true }));
    server();
});


