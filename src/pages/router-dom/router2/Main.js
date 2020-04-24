import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <div>this is main page</div>
        <Link to="/main/a">测试嵌套路由</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
