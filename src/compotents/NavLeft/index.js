import React from "react";
import "./index.less";
import menuList from "./../../config/menuConfig";
import {NavLink} from 'react-router-dom';
import { Menu } from "antd";

const { SubMenu } = Menu;

class NavLeft extends React.Component {

  UNSAFE_componentWillMount() {
    const MenuTreeNode = this.renderMenu(menuList);
    this.setState({
      MenuTreeNode
    })
  }
  // 递归遍历菜单
  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
    return <Menu.Item title={item.title} key={item.key}>
            <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo" />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark" mode="vertical">
          {this.state.MenuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;
