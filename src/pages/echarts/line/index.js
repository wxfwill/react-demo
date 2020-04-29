import React from 'react';
import {Card} from 'antd';

import echartsTheme from '../echartTheme';
// 整包加载
// import echarts from 'echarts';

// 按需加载
import echarts from 'echarts/lib/echarts'
// 引入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

import ReactEcharts from 'echarts-for-react'

class Line extends React.Component {
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
                data:  ['周一', '周二', '周三', '周四', '周五']
            },
            yAxis: {
                type: 'value'
            },
            series: [
               {
                name: '订单量',
                type: 'line',
                data: [100, 20, 30, 60, 200]
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
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['ofo订单量','膜拜订单量']
            },
            xAxis: {
                data:  ['周一', '周二', '周三', '周四', '周五']
            },
            yAxis: {
                type: 'value'
            },
            series: [
               {
                name: 'ofo订单量',
                type: 'line',
                data: [100, 200, 3030, 60000, 8000]
               },
               {
                name: '膜拜订单量',
                type: 'line',
                data: [300, 2000, 3000, 80000, 100000]
               }
            ]
        }
        return option;
    }
    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:  ['周一', '周二', '周三', '周四', '周五']
            },
            yAxis: {
                type: 'value'
            },
            series: [
               {
                name: '订单量',
                type: 'line',
                data: [100, 20, 30, 60, 200],
                areaStyle: {}
               }

            ]
        }
        return option;
    }
    render() {
        return(
            <div>
                <Card title="折线图标1">
                    <ReactEcharts option={this.getOption()} theme="Imooc" style={{height: 500}}/>
                </Card>
                <Card title="折线图标2" style={{marginTop:20}}>
                <ReactEcharts option={this.getOption2()} theme="Imooc" style={{height: 500}}/>
                </Card>
                <Card title="折线图标3" style={{marginTop:20}}>
                <ReactEcharts option={this.getOption3()} theme="Imooc" style={{height: 500}}/>
                </Card>
            </div>
        )
    }
}

export default Line;