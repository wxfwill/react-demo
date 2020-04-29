import React from 'react';
import {Card, Table} from 'antd'
import axios from '../../axios/index'

class BaseTable extends React.Component {
    state = {
        dataSource2: []
    };
    componentDidMount() {
        const dataSource = [
            {
                id: 1,
                userName: 'ss',
                sax: 1,
                state: 2,
                interest: 3,
                birthday: '2020',
                address: 'ewrrrr'
            },
            {
                id: 1,
                userName: 'ss',
                sax: 1,
                state: 2,
                interest: 3,
                birthday: '2020',
                address: 'ewrrrr'
            },
            {
                id: 1,
                userName: 'ss',
                sax: 1,
                state: 2,
                interest: 3,
                birthday: '2020',
                address: 'ewrrrr'
            }
        ];
        this.setState({
            dataSource: dataSource.map((item) => {
                item.key = item.id
                return item;
            })
        })
        this.requst();
    }
    requst = () => {
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            console.log(res);
            if(res.code === 0) {
                this.setState({
                    dataSource2:  res.result.map((item) => {
                        item.key = item.id
                        return item;
                    })
                })
            }
        })
    }
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sax',
                render(sax) {
                    return sax === '1' ? '男' : '女';
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    return {
                        '1': '进行中',
                        '2': '开始',
                        '3': '完成',
                        '4': '已结束',
                        '5': '结束'
                    }[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            }
        ]
        return (
            <div style={{width:'100%'}}>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    ></Table>
                </Card>
                <Card title="动态数据表格" style={{marginTop: 10}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    ></Table>
                </Card>
            </div>
        )
    }
}

export default BaseTable;