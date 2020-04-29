import React from "react";
import "./index.less";
import {connect} from 'react-redux';
import {switchMenu} from '../../redux/action'
import menuList from "./../../config/menuConfig";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu } = Menu;

class NavLeft extends React.Component {
  state = {
    currentKey: "",
  };

  UNSAFE_componentWillMount() {
    const MenuTreeNode = this.renderMenu(menuList);
    let _currentKey = window.location.hash.replace(/#|\?.*$/g, "");
    this.setState({
      currentKey: _currentKey,
      MenuTreeNode,
    });
  }
  // 递归遍历菜单
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };
  handleClick = ({item, key}) => {
    const {dispatch} = this.props;
    console.log('======'+ item.props.title);
    dispatch(switchMenu(item.props.title));
    this.setState({
      currentKey: key
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo" />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark" mode="vertical" selectedKeys={this.state.currentKey} onClick={this.handleClick}>
          {this.state.MenuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default connect()(NavLeft);
