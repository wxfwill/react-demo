import React, { Component } from 'react';
import {Button, Card, Radio} from 'antd';
import { SearchOutlined, EditOutlined, FormOutlined, DeleteOutlined, CloudDownloadOutlined, LoadingOutlined, RightOutlined, LeftOutlined} from '@ant-design/icons';

import './index.less';

class Buttom extends Component {
    state = {
        loading: true,
        size: 'default'
    }
    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }
    handleChangeSize = (e) => {
        console.log(e.target.value);
        this.setState({
            size: e.target.value
        })
    }
    render() {
        return (
            <div className="btn-wrap">
                <Card title='基础按钮' className="btn-card">
                    <Button type="primary">Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title='图形按钮' className="btn-card">
                    <Button icon={<FormOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}>>编辑</Button>
                    <Button icon={<DeleteOutlined />}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined />}></Button>
                    <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
                    <Button icon={<CloudDownloadOutlined />}>下载</Button>
                </Card>
                <Card title='loading按钮' className="btn-card">
                    <Button icon={ this.state.loading ? <LoadingOutlined /> : null}>确定</Button>
                    <Button type="primary" icon={ this.state.loading ? <LoadingOutlined /> : ' '} shape="circle"></Button>
                    <Button icon={ this.state.loading ? <LoadingOutlined /> : null}>点击加载</Button>
                    <Button icon={ this.state.loading ? <LoadingOutlined /> : ' '} shape="circle"></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title='按钮组'>
                    <Button.Group>
                        <Button type="primary" icon={<LeftOutlined />}>返回</Button>
                        <Button type="primary">前进{<RightOutlined />}</Button>
                    </Button.Group>
                </Card>
                <Card title='按钮尺寸' className="btn-card">
                    <Radio.Group value={this.state.size} onChange={this.handleChangeSize}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                </Card>
            </div>
        );
    }
}

export default Buttom;