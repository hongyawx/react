import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;
const CollectionCreateForm = Form.create()(
	(props) => {
		const {visible, onCancel, onCreate, form, editUser} = props;
		const {getFieldDecorator} = form;
		console.log(editUser);
		return (
			<Modal
				visible={visible}
				title="Create a new collection"
				okText="确定"
				onCancel={onCancel}
				onOk={onCreate}
			>
				<Form layout="vertical">
					{getFieldDecorator('id', {
						initialValue: editUser.id
					})(<Input type="hidden"/>)}

					<FormItem label="用户名">
						{getFieldDecorator('username', {
							initialValue: editUser.username,
							rules       : [{required: true, message: '请填写用户名'}],
						})(
							<Input />
						)}
					</FormItem>
					<FormItem label="年龄">
						{getFieldDecorator('age', {
							initialValue: editUser.age
						})(<Input />)}
					</FormItem>
				</Form>
			</Modal>
		);
	}
);

class UpdateUser extends React.Component {
	state = {
		visible: false,
	};
	handleCancel = () => {
		this.props.modalChange();
	};
	handleCreate = () => {
		const form = this.form;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}

			this.props.UserService.update(values).then((user) => {
				this.props.modalChange({
					user: user
				});
				form.resetFields();
			});

		});
	};
	saveFormRef = (form) => {
		this.form = form;
	};

	render() {
		return (
			<div>
				<CollectionCreateForm
					ref={this.saveFormRef}
					{...this.props}
					onCancel={this.handleCancel}
					onCreate={this.handleCreate}
				/>
			</div>
		);
	}
}


export default UpdateUser;