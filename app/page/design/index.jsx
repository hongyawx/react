import React, { Component } from 'react';

export default class Design extends Component{
    render(){
        return (
            <div className="bq-design">
                <img src={require('./img/design.jpg')} style={{width: 800}} alt=""/>
            </div>
        )
    }
}