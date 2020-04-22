import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    componentWillMount() {
        console.log('will mount')
    }
    componentDidMount() {
        console.log('did mount')
    }
    componentWillReceiveProps(newProps) {
        console.log('will props'+ newProps);
    }
    shouldComponentUpdate() { // 调用 setState 来触发
        console.log('should update')
        return true;
    }
    componentWillUpdate() {
        console.log('will updata')
    }
    componentDidUpdate() {
        console.log('did update')
    }
    render() {
        return (
            <div>
                <p>测试子组件生命周期11</p>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Child;