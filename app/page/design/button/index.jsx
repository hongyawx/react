import React, { Component } from 'react';
import { Button } from 'antd';

export default class DesignButton extends Component{
    render(){
        return (
            <div className="bq-design">
                <h3>默认状态</h3>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <h3>不可点击</h3>
                <Button type="primary" disabled>Primary</Button>
                <Button disabled>Default</Button>
                <Button type="dashed" disabled>Dashed</Button>
                <Button type="danger" disabled>Danger</Button>
            </div>
        )
    }
}