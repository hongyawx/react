let path = require('path');
let rootPath = __dirname; // 根目录
let app = path.join(rootPath, 'app'); // 应用目录

module.exports = {
    // 是否使用svg图标
    svgIcon: true,
    // 设置网站根目录/webdir/ -> localhost/webdir/page...
    webBase: '/',
    devPort: 8866,
    distPort: 9898,
    root: rootPath,
    app: app,
    // 应用业务目录
    page: path.join(app, 'page'),
    // 生产文件输出目录
    dist: path.join(rootPath, 'dist'),
    // 入口HTML模板
    entryHTML: path.join(app, 'index.html'),
    // 静态资源
    static: path.join(rootPath, 'static'),
    // 组件目录
    component: path.join(app, 'component'),
    // 路由目录
    router: path.join(app, 'router'),
    // 样式目录,整个应用样式导出
    style: path.join(app, 'style'),
    // 风格
    theme: path.join(app, 'style', 'vars.less')
};