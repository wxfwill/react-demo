import React, { Component } from "react";
import { Card, Spin, Alert } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./index.less";

class Loading extends Component {
  render() {
    const icon = <LoadingOutlined style={{ fontSize: 24 }} />;
    return (
      <div className="Spin-wrap">
        <Card title="Spin用法" className="Spin">
          <Spin size="small"></Spin>
          <Spin style={{ margin: "0 20px" }}></Spin>
          <Spin size="large"></Spin>

          <Spin indicator={icon} style={{ marginLeft: 20 }}></Spin>
        </Card>
        <Card title="内容遮罩" className="Spin">
          <Alert message="react" description="dkljhfkjfkjf" type="info"></Alert>
          <Spin>
            <Alert
              message="react"
              description="dkljhfkjfkjf"
              type="warning"
            ></Alert>
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="react"
              description="dkljhfkjfkjf"
              type="warning"
            ></Alert>
          </Spin>
          <Spin indicator={icon}>
            <Alert
              message="react"
              description="dkljhfkjfkjf"
              type="warning"
            ></Alert>
          </Spin>
        </Card>
      </div>
    );
  }
}

export default Loading;
