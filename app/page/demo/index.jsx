import React, { Component } from 'react';
import { render } from 'react-dom';
import SvgIcon from 'COMPONENT/svgIcon';

export default class Article extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="bq-demo">
				<h1 className="style-from-css">demos</h1>
				<h2>svg图标</h2>
				<span><SvgIcon name="alarm" style={{width: 18, height: 18}} />alarm</span>
				<span><SvgIcon name="bell" style={{width: 18, height: 18}} />xbell</span>
				<p>svg文件下载：</p>
				<p><a href="https://icomoon.io/" target="_blank">https://icomoon.io/</a></p>
				<p><a href="http://www.iconfont.cn/" target="_blank">http://www.iconfont.cn/</a></p>
				<h2>图片引用</h2>
				IMG<br />
				<img src={ require('./img/test.jpg') } />
				<img src={ require('./img/car.png') } />
				<br />
				CSS<br />
				<div className="car-img"></div>
				<div className="test-img"></div>
			</div>
		)
	}
}
