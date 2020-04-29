import React from 'react';
import {Card} from 'antd';

import echartsTheme from '../themeLight';
// 整包加载
// import echarts from 'echarts';

// 按需加载
import echarts from 'echarts/lib/echarts'
// 引入饼图
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

import ReactEcharts from 'echarts-for-react'

class Pie extends React.Component {
    componentWillMount() {
        echarts.registerTheme('Imooc', echartsTheme)
    }
    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单',
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一', '周二', '周三', '周四', '周五']
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a}<br/>{b}:{c}({d}%)'
            },
            series: [
               {
                name: '订单量',
                type: 'pie',
                data: [
                    {
                        value: 1000,
                        name: '周一'
                    },
                    {
                        value: 500,
                        name: '周二'
                    },
                    {
                        value: 2000,
                        name: '周三'
                    },
                    {
                        value: 1000,
                        name: '周四'
                    },
                    {
                        value: 2000,
                        name: '周五'
                    }
                ]
               }

            ]
        }
        return option;
    }
    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单',
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一', '周二', '周三', '周四', '周五']
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a}<br/>{b}:{c}({d}%)'
            },
            series: [
               {
                name: '订单量',
                type: 'pie',
                radius: ['50%', '80%'],
                data: [
                    {
                        value: 1000,
                        name: '周一'
                    },
                    {
                        value: 500,
                        name: '周二'
                    },
                    {
                        value: 2000,
                        name: '周三'
                    },
                    {
                        value: 1000,
                        name: '周四'
                    },
                    {
                        value: 2000,
                        name: '周五'
                    }
                ]
               }

            ]
        }
        return option;
    }
    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单',
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一', '周二', '周三', '周四', '周五']
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a}<br/>{b}:{c}({d}%)'
            },
            series: [
               {
                name: '订单量',
                type: 'pie',
                data: [
                    {
                        value: 1000,
                        name: '周一'
                    },
                    {
                        value: 500,
                        name: '周二'
                    },
                    {
                        value: 2000,
                        name: '周三'
                    },
                    {
                        value: 1000,
                        name: '周四'
                    },
                    {
                        value: 2000,
                        name: '周五'
                    }
                ].sort((a, b) => {
                    return a.value - b.value;
                }),
                roseType: 'radius',
               }

            ]
        }
        return option;
    }
    render() {
        return(
            <div>
                <Card title="饼图图标1">
                    <ReactEcharts option={this.getOption()} theme="Imooc" style={{height: 500}}/>
                </Card>
                <Card title="饼图图标2" style={{marginTop:20}}>
                <ReactEcharts option={this.getOption2()} theme="Imooc" style={{height: 500}}/>
                </Card>
                <Card title="饼图图标3" style={{marginTop:20}}>
                <ReactEcharts option={this.getOption3()} theme="Imooc" style={{height: 500}}/>
                </Card>
            </div>
        )
    }
}

export default Pie;