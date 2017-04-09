import React, {Component} from 'react';
import {Table, Popconfirm} from 'antd';

import UserService from './service/user';
import UpdateUser from './updateUser';

export default class User extends Component {
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

	componentDidMount() {
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
	}

	showUpdateUser(editUser) {
		this.setState({
			modal   : true,
			editUser: editUser
		});
	}

	handleDelete = (index) => {
		const data = this.state.data;
		const id = data[index]['id'];
		UserService.del(id).then(() => {
			data.splice(index, 1);
			this.setState({
				data: data
			});
		});
	};

	handleModalChange({user = {}} = {}) {
		this.setState({
			modal: false
		});
		if(user){
			let data = this.state.data;
			data[user.id] = user;
			this.setState({
				data:data
			});
		}
	}

	render() {
		const columns = [{
			title    : '用户名',
			dataIndex: 'username',
			width: '33%',
			key      : 'username',
			render   : text => <a href="#">{text}</a>,
		}, {
			width: '33%',
			title    : '年龄',
			dataIndex: 'age',
			key      : 'age',
			render   : text => <a href="#">{text}</a>,
		}, {
			title : '操作',
			key   : 'action',
			render: (text, record, index) => (
				<span>
		      <a onClick={() => this.showUpdateUser(record)}>编辑</a>
		      <span className="ant-divider"/>
		      <Popconfirm title="确定删除该数据吗?" onConfirm={() => this.handleDelete(index)} okText="确定" cancelText="取消">
		        <a>删除</a>
		      </Popconfirm>
		    </span>
			),
		}];
		return (
			<div>
				<Table columns={columns}
				       rowKey={record => record.registered}
				       dataSource={this.state.data}
				       pagination={this.state.pagination}
				       loading={this.state.loading}
				       onChange={this.handleTableChange}
				/>
				<UpdateUser
					visible={this.state.modal}
					modalChange={this.handleModalChange}
					editUser={this.state.editUser}
					UserService={UserService}
				/>
			</div>
		)
	}
}
