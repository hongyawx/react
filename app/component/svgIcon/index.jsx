import React, { Component } from 'react';
import classnames from 'classnames'
import './style'
 
export default class SvgIcon extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		let {name, style, className} = this.props;
		return (
			<svg className={classnames("bq-svg-ico", className)} style={style}>
				<use xlinkHref={`#icon-${name}`} />
			</svg>
		)
	}
}
