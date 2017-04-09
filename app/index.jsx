import React from 'react'
import ReactDOM from 'react-dom'
import { Router, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import router from 'APP/router'
import config from '../config';

import 'APP/style';

const history = useRouterHistory(createHistory)({
	basename: config.webBase
});
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <Router history={ history } children={router} />,
    MOUNT_NODE
);

/*
	* SVG图标
	* PAGE下的svg文件最终会合并成一个文件，通过ajax加载到页面中
	* 如果图标文件过多，考虑到各功能模块加载
	* 使用：
	* 	1.加载COMPONENT/svg-icon组件
	*	2.<SvgIcon name="svg文件名称" style={样式} />
*/
if(config.svgIcon){
	let __svg__ = { path: './PAGE/**/*.svg', name: 'img/svg/[hash].svg' };
	require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
}
