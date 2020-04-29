import React, { Component } from 'react';
import { Card, Button, notification } from 'antd'
import './index.less';

class Notification extends Component {
    hangdleNotification = (type, direction) => {
        if(direction) {
            notification.config({
                placement: direction
            }) 
        }
        notification[type]({
            message: 'ddddd',
            description: 'dfffff'
        })
    }
    render() {
        return (
            <div className="Notification">
                <Card title="通知提醒框" className="Notification-ls">
                    <Button type="primary" onClick={() => this.hangdleNotification('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.hangdleNotification('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.hangdleNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.hangdleNotification('error')}>Error</Button>
                </Card>
                <Card title="控制提醒框方向" className="Notification-ls">
                    <Button type="primary" onClick={() => this.hangdleNotification('success', 'topLeft')}>Success</Button>
                    <Button type="primary" onClick={() => this.hangdleNotification('info', 'topRight')}>Info</Button>
                    <Button type="primary" onClick={() => this.hangdleNotification('warning', 'bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={() => this.hangdleNotification('error', 'bottomRight')}>Error</Button>
                </Card>
            </div>
        );
    }
}

export default Notification;