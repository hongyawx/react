import React, { Component } from 'react';
 
export default class Reactjs extends Component{
	constructor(props) {
		super(props);
		this.state = {
			v: 123
		}
	}
	handleChange(e){
		this.setState({
			v: e.target.value
		});
	}

	render() {
		return (
			<div>
				<h2>view->model数据绑定</h2>
				<input ref="nameInput" onChange={(e)=>this.handleChange(e)} defaultValue={this.state.v}/>
				<p>{`V:${this.state.v}`}</p>
			</div>
		)
	}
}
