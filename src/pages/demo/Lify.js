import React, { Component } from "react";
import Child from './Child'

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
      <div>
        <p>react</p>
        <button onClick={this.handleClick}>点击</button>
        
        <p>{this.state.count}</p>
        <Child name={this.state.count} />
      </div>
    );
  }
}

export default Lify;
