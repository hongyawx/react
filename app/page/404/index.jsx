import React, { Component } from 'react';
import { Icon  } from 'antd';

export default class extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bq-404">
                <Icon style={{fontSize: 50}} type="exclamation-circle-o" />
                <h1>　404错误！</h1>
                <div className="bq-404-text">抱歉，你访问的页面不存在</div>
            </div>
        )
    }
}
