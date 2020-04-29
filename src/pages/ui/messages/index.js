import React, { Component } from 'react';
import { Card, Button, message } from 'antd'
import './index.less';

class Message extends Component {
    showMessage = (type) => {
        message[type]('react 晋级课程')
    }
    render() {
        return (
            <div className="Message">
                <Card title="全局提示框" className="Message-ls">
                    <Button type="primary" onClick={() => this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.showMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.showMessage('loading')}>Loading</Button>
                </Card>
            </div>
        );
    }
}

export default Message;