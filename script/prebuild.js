let cwd = __dirname;
let fs = require('fs');
let path = require('path');
let watch = require('gulp-watch');
let glob = require('glob');
let conf = require(path.resolve(cwd, '../config'));
let pagePath = conf.page;
let stylePath = path.join(conf.app, 'style');
let routerPath = path.join(conf.app, 'router');
let tipText = '// 该文件内容由程序生成\n';
let toUriPath = function(path) {
    return path.replace(/\\/g, '/');
};
let createRouter = function () {
    let search = path.resolve(pagePath, '*/router.js');
    let ret = [];
    let collecter = function () {
        console.log('生成路由文件');
        ret = glob.sync(search);
        ret = ret.map(function (file) {
            return `require("${toUriPath(path.relative(conf.router, file))}").default\n`;
        });
        ret = `${tipText}export default [\n${ret}]`;
        fs.writeFileSync(`${routerPath}/page.ignore.js`, `${ret}`);
    };
    watch(search, function () {
        collecter();
    });
};
let createStyle = function () {
    let search = path.resolve(pagePath, '*/style/index.less');
    let ret = [];
    let collecter = function () {
        console.log('生成样式文件');
        ret = glob.sync(search);
        ret = ret.map(function (file) {
            return `@import "${toUriPath(path.relative(conf.style, file))}";\n`;
        });
        ret = ret.join('');
        fs.writeFileSync(`${stylePath}/page.ignore.less`, `${tipText}${ret}`);
    };
    watch(search, function () {
        collecter();
    });
};
let prebuild = function () {
    createRouter();
    createStyle();
};

prebuild();