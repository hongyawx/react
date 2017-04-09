import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {Router, Route, Link, IndexLink} from 'react-router';
import menu from './service/menu';

const getMenus = function (menuArr, parentPath = '/') {
    return menuArr.map(item => {
        if (item.child) {
            return (
                <Menu.SubMenu key={item.key} title={<Link to={parentPath + item.key}>{item.icon ?
                    <Icon type={item.icon}/> : ''}{item.name}</Link>}>
                    {getMenus(item.child, `${parentPath}${item.key}/`)}
                </Menu.SubMenu>
            )
        }
        if (item.key === 'home') {
            return (
                <Menu.Item key={item.key}>
                    <IndexLink to="/">
                        {item.icon ? <Icon type={item.icon}/> : ''}
                        {item.name}
                    </IndexLink>
                </Menu.Item>
            )
        }
        return (
            <Menu.Item key={item.key}>
                <Link to={parentPath + item.key}>
                    {item.icon ? <Icon type={item.icon}/> : ''}
                    {item.name}
                </Link>
            </Menu.Item>
        )
    })
};
export default class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            openKeys: [],
        }
    }

    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState({
            current: e.key
        });
    }
    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({
            openKeys: nextOpenKeys
        });
    }
    getAncestorKeys = (key) => {
        const map = {
            navigation2: ['navigation'],
        };
        return map[key] || [];
    }

    render() {
        return (
            <Menu
                className="bq-layout-sider-menu"
                mode="inline"
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                onOpenChange={this.onOpenChange}
                onClick={this.handleClick}
            >
                { getMenus(menu) }
            </Menu>
        );
    }
}