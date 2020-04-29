import React from 'react';
import {Button, Card} from 'antd';

class Order extends React.Component {

    openOrderDetal = () => {
        let item = {id: 3};
        window.open(`/#/common/order/detal/${item.id}`, '_blank');
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.openOrderDetal}>订单详情</Button>
                <Card title="订单列表">
                    订单列表
                </Card>
            </div>
        )
    }
}

export default Order;