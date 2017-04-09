export default [{
    key: 'home',
    name: '首页',
    icon: 'laptop',
}, {
    key: 'user',
    name: '用户管理',
    icon: 'user',
}, {
    key: 'demo',
    name: 'demo',
    icon: 'camera-o',
    // clickable: false,
    child: [{
        key: 'webpack',
        name: 'webpack',
    }, {
        key: 'react',
        name: 'react',
    }, {
        key: 'ES6',
        name: 'ES6',
    }]
}, {
    key: 'design',
    name: '设计规范',
    icon: 'setting',
    child: [{
        key: 'button',
        name: '按钮',
    },{
        key: 'input',
        name: '输入框',
    },{
        key: 'table',
        name: '表格',
    }]
}, {
    key: 'wuxu',
    name: '吴旭2',
    icon: 'setting',
}]
