import React, { Component } from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const FormItem = Form.Item;
class Login extends Component {
  state = {
    checked: true,
    disabled: false,
  };
  onChange = (e) => {
    console.log("checked = ", e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="登录行内表单" style={{ marginBottom: 20 }}>
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem>
              <Input placeholder="情书密码"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" style={{ marginBottom: 20 }}>
          <Form
            layout="horizontal"
            style={{ width: 300 }}
            initialValues={{ password: "1236", username: "wxf",remember: true }}
            onFinish={this.onFinish}
          >
            <FormItem
              name="username"
              rules={[{ required: true, message: "必填的额" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入用户名"
              ></Input>
            </FormItem>
            <FormItem
              name="password"
              rules={[{ required: true, message: "必填的额" }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="情书密码"
              ></Input>
            </FormItem>
            <FormItem 
            name="remember"
            valuePropName="checked"
            >

                <Checkbox>
                  记住密码
                </Checkbox>
            </FormItem>
            <FormItem colon={false}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
}

export default Login;
