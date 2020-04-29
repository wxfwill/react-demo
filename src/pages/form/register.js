import React from "react";
import {
  Card,
  Form,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  message,
  InputNumber,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;
class Register extends React.Component {
  onFinish = (values) => {
    console.log(values);
    message.success("通过验证了");
  };
  onFinishFailed = () => {
    message.error("验证失败了");
  };
  render() {
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4,
      },
      wrapperCol: {
        xs: 24,
        sm: 12,
      },
    };
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4,
        },
      },
    };
    return (
      <div style={{ width: "100%" }}>
        <Card title="注册表单">
          <Form
            layout="horizontal"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            initialValues={{
              sax: "2",
              age: "18",
              state: "2",
              intiival: ["3", "4"],
              isMerrid: true,
              brithday: moment("2018-08-08"),
              adress: "测试地址",
              isReade: true,
            }}
          >
            <FormItem
              {...formItemLayout}
              label="用户名"
              name="username"
              rules={[{ required: true, message: "必填" }]}
            >
              <Input placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密码"
              name="password"
              rules={[{ required: true, message: "必填" }]}
            >
              <Input placeholder="请输入密码" type="password"></Input>
            </FormItem>
            <FormItem {...formItemLayout} name="sax" label="性别">
              <Radio.Group>
                <Radio value="1">男</Radio>
                <Radio value="2">女</Radio>
              </Radio.Group>
            </FormItem>
            <FormItem {...formItemLayout} name="age" label="年龄">
              <InputNumber></InputNumber>
            </FormItem>
            <FormItem {...formItemLayout} label="当前状态" name="state">
              <Select>
                <Option value="1">闲鱼一天</Option>
                <Option value="2">百度FE</Option>
                <Option value="3">北大才子</Option>
                <Option value="4">参与者</Option>
                <Option value="5">前端</Option>
              </Select>
            </FormItem>
            <FormItem {...formItemLayout} label="兴趣爱好" name="intiival">
              <Select mode="multiple">
                <Option value="1">闲鱼一天</Option>
                <Option value="2">百度FE</Option>
                <Option value="3">北大才子</Option>
                <Option value="4">参与者</Option>
                <Option value="5">前端</Option>
              </Select>
            </FormItem>
            <FormItem
              {...formItemLayout}
              name="isMerrid"
              label="是否已婚"
              valuePropName="checked"
            >
              <Switch></Switch>
            </FormItem>
            <FormItem {...formItemLayout} name="brithday" label="生日">
              <DatePicker showTime format="YYYY-MM-DD hh:mm:ss"></DatePicker>
            </FormItem>
            <FormItem {...formItemLayout} name="adress" label="联系地址">
              <TextArea autoSize={{ minRows: 6, maxRows: 10 }}></TextArea>
            </FormItem>
            <FormItem {...formItemLayout} name="time" label="早起时间">
              <TimePicker></TimePicker>
            </FormItem>
            <FormItem {...formItemLayout} name="useImg" label="图像">
              <Upload
                listType="picture-card"
                onChange={this.handleChange}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              >
                <PlusOutlined />
              </Upload>
            </FormItem>
            <FormItem {...offsetLayout} valuePropName="checked" name="isReade">
              <Checkbox>
                我已经阅读过<a href="###">磨课协议</a>
              </Checkbox>
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Register;
