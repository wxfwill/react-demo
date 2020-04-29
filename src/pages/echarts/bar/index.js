import React from 'react';
import {Card} from 'antd';

import echartsTheme from '../echartTheme';
// 整包加载
// import echarts from 'echarts';

// 按需加载
import echarts from 'echarts/lib/echarts'
// 引入饼图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

import ReactEcharts from 'echarts-for-react'

class Bar extends React.Component {
    componentWillMount() {
        echarts.registerTheme('Imooc', echartsTheme)
    }
    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五']
            },
            yAxis:{
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'bar',
                    data: [100, 200, 300, 300, 200]
                }
            ]
        }
        return option;
    }
    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            legend: {
                data: ['OFO', '膜拜', '小兰']
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五']
            },
            yAxis:{
                type: 'value'
            },
            series: [
                {
                    name: 'OFO',
                    type: 'bar',
                    data: [100, 200, 600, 5000, 200]
                },
                {
                    name: '膜拜',
                    type: 'bar',
                    data: [10, 200, 5500, 4300, 7000]
                },
                {
                    name: '小兰',
                    type: 'bar',
                    data: [200, 2000, 6600, 7700, 200]
                }
            ]
        }
        return option;
    }
    render() {
        return(
            <div>
                <Card title="柱形图标1">
                    <ReactEcharts option={this.getOption()} theme="Imooc" style={{height: 500}}/>
                </Card>
                <Card title="柱形图2" style={{marginTop:20}}>
                <ReactEcharts option={this.getOption2()} theme="Imooc" style={{height: 500}}/>
                </Card>
            </div>
        )
    }
}

export default Bar;