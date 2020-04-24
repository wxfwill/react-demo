import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <div>this is main page</div>
        <Link to="/main/test-id">测试嵌套路由1</Link>
        <Link to="/main/456">测试嵌套路由2</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
