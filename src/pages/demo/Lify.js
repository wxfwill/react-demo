import React, { Component } from "react";
import Child from './Child'
import {Button, Input} from 'antd'
import './index.less'

class Lify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
      this.setState({
          count: this.state.count + 1
      })
  }
  componentWillMount() {
    console.log('父组件 will mount');
  }
  componentDidMount() {
    console.log('父组件 did mount');
  }
  render() {
    return (
      <div className="wrap">
        <p>react</p>
        <button onClick={this.handleClick}>点击</button>
        <div>
        <Input />
        <Button type="primary">antd 按钮</Button>
        </div>
        <p>{this.state.count}</p>
        <Child name={this.state.count} />
      </div>
    );
  }
}

export default Lify;
