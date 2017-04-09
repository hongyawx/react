import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router'

export default class Wuxu extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data      : [],
            pagination: {
                pageSize: 6
            },
            loading   : false,
            modal     : false,
            editUser  : {}
        };
        this.handleModalChange = this.handleModalChange.bind(this);
    }

/*    componentDidMount() {
        this.fetch();
    }

    fetch() {
        this.setState({
            loading: true
        });
        UserService.query().then((data) => {
            this.setState({
                data   : data,
                loading: false
            });
        });
    }*/


	render() {
		return (
			<div>
				<h1>wuxu hello </h1>
			</div>
		)
	}
}
