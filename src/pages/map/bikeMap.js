import React, { Component } from "react";
import { Card, Form, Select, Button } from "antd";
import axios from "../../axios/";

const route_list = ['116.353101,40.067835', '116.357701,40.053699', '116.374086,40.027626', '116.397801,40.01641'];
const service_list = [{
    "lon": "116.274737",
    "lat": "40.139759",
    "ts": null
  },
  {
    "lon": "116.316562",
    "lat": "40.144943",
    "ts": null
  },
  {
    "lon": "116.351631",
    "lat": "40.129498",
    "ts": null
  },
  {
    "lon": "116.390582",
    "lat": "40.082481",
    "ts": null
  },
  {
    "lon": "116.38742",
    "lat": "40.01065",
    "ts": null
  },
  {
    "lon": "116.414297",
    "lat": "40.01181",
    "ts": null
  },
  {
    "lon": "116.696242",
    "lat": "39.964035",
    "ts": null
  },
  {
    "lon": "116.494498",
    "lat": "39.851306",
    "ts": null
  },
  {
    "lon": "116.238086",
    "lat": "39.848647",
    "ts": null
  },
  {
    "lon": "116.189454",
    "lat": "39.999418",
    "ts": null
  },
  {
    "lon": "116.244646",
    "lat": "39.990574",
    "ts": null
  },
  {
    "lon": "116.281441",
    "lat": "40.008703",
    "ts": null
  },
  {
    "lon": "116.271092",
    "lat": "40.142201",
    "ts": null
  },
  {
    "lon": "116.271092",
    "lat": "40.142201",
    "ts": null
  }
];
const bike_list = ['116.356619,40.017782', '116.437107,39.975331', '116.34972,40.070808', '116.323849,39.964714', '116.404912,40.015129', '116.365243,39.958078'];
class BikeMap extends Component {
  state = {};
  map = "";
  componentDidMount() {
    this.requlist();
  }
  requlist = () => {
    // axios
    //   .ajax({
    //     url: "/bike/list",
    //     data: {
    //       params: {
    //         city: "北京",
    //       },
    //     },
    //   })
    //   .then((res) => {
    //     if (res.code === 0) {
    //       this.setState({
    //         total_count: res.result.total_count,
    //       });
    //       this.renderMap(res);
    //     }
    //   });
      this.renderMap(route_list);
  };
  renderMap = (res) => {
    //   let list = res.result.route_list;
      let list = res;
      this.map = new window.BMap.Map('container');
      let gps1 = list[0].split(',');
      let startPoint = new window.BMap.Point(gps1[0], gps1[1]);
      let gps2 = list[list.length - 1].split(',');
      let endPoint = new window.BMap.Point(gps2[0], gps2[1]);
      this.map.centerAndZoom(endPoint, 11);

      // 起点
      let startPointIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42), {
          imageSize: new window.BMap.Size(36, 42),
          anchor: new window.BMap.Size(18, 42)
      })
      let bikeMarkStart = new window.BMap.Marker(startPoint, {icon: startPointIcon});
      this.map.addOverlay(bikeMarkStart)

      // 终点
      let endPointIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
        imageSize: new window.BMap.Size(36, 42),
        anchor: new window.BMap.Size(18, 42)
    })

    let bikeMarkEnd = new window.BMap.Marker(endPoint, {icon: endPointIcon});
    this.map.addOverlay(bikeMarkEnd);

    // 绘制车辆行驶路线
    let routeList = [];
    list.forEach((item) => {
        let p = item.split(',');
        routeList.push(new window.BMap.Point(p[0], p[1]))
    })
    let poyLine = new window.BMap.Polyline(routeList, {
        strokeColor: '#ef4136',
        strokeWeight: 2,
        strokeOpacity: 1
    })
    this.map.addOverlay(poyLine);

    // 绘制服务区
    let serviceList = service_list;
    let servicePointList = [];
    serviceList.forEach((item) => {
        servicePointList.push(new window.BMap.Point(item.lon, item.lat))
    })
    let poyServiceLine = new window.BMap.Polyline(servicePointList, {
        strokeColor: '#ef4136',
        strokeWeight: 3,
        strokeOpacity: 1
    })
    this.map.addOverlay(poyServiceLine);

    // 添加地图中自行车图标
    let bikeList = bike_list;
    let bikeIcon = new window.BMap.Icon('/assets/bike1.png', new window.BMap.Size(36, 42), {
        imageSize: new window.BMap.Size(36, 42),
        anchor: new window.BMap.Size(18, 42)
    })
    bikeList.forEach((item) => {
        let p = item.split(',');
        let point = new window.BMap.Point(p[0], p[1]);
        let bikeMaker = new window.BMap.Marker(point, {icon: bikeIcon})
        this.map.addOverlay(bikeMaker);
    })

  };
  render() {
    return (
      <div>
        <Card style={{ marginBottom: 10 }}>
          <Form layout="inline" initialValues={{ city: "2" }}>
            <Form.Item label="城市" name="city" style={{ width: "200px" }}>
              <Select placeholder="请输入城市">
                <Select.Option value="0">全部</Select.Option>
                <Select.Option value="1">北京</Select.Option>
                <Select.Option value="2">上海</Select.Option>
                <Select.Option value="3">深圳</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="状态" style={{ width: "200px" }}>
              <Select placeholder="请选择状态">
                <Select.Option value="">全部</Select.Option>
                <Select.Option value="1">未完成</Select.Option>
                <Select.Option value="2">进行中</Select.Option>
                <Select.Option value="3">已完成</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" style={{ marginRight: 20 }}>
                查询
              </Button>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card>
          <div>共{this.state.total_count}辆车</div>
          <div id="container" style={{height: 460}}></div>
        </Card>
      </div>
    );
  }
}

export default BikeMap;
