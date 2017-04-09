import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import {Layout} from 'antd';

import WebSider from './layout/sider';
let styles = {};

const {Header, Footer, Sider, Content} = Layout;

export default class App extends Component {
	render() {
		let {location} = this.props;
		return (
			<div className="bq-layout">
                <div className="bq-layout-header">Header</div>
                <div className="bq-layout-main clearfix">
                    <WebSider location={location}/>
                    <div className="bq-layout-content">{this.props.children}</div>
                </div>
            </div>
		)
	}
}
