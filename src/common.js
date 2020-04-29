import React from "react";
import { Row } from "antd";
import "./style/reset.css";
import "./style/common.less";
import Header from "./compotents/Header";

class Common extends React.Component {
  render() {
    return (
      <div>
        <Row className="simple-page">
          <Header menuType="second"/>
        </Row>
        <Row className="content">{this.props.children}</Row>
      </div>
    );
  }
}

export default Common;
