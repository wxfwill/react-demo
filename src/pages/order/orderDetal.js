import React from "react";
import { Card } from "antd";
import "./detail.less";
const arr = [
  {
    lon: "116.274737",
    lat: "40.139759",
    ts: null,
  },
  {
    lon: "116.316562",
    lat: "40.144943",
    ts: null,
  },
  {
    lon: "116.351631",
    lat: "40.129498",
    ts: null,
  },
  {
    lon: "116.390582",
    lat: "40.082481",
    ts: null,
  },
  {
    lon: "116.38742",
    lat: "40.01065",
    ts: null,
  },
  {
    lon: "116.414297",
    lat: "40.01181",
    ts: null,
  },
  {
    lon: "116.696242",
    lat: "39.964035",
    ts: null,
  },
  {
    lon: "116.494498",
    lat: "39.851306",
    ts: null,
  },
  {
    lon: "116.238086",
    lat: "39.848647",
    ts: null,
  },
  {
    lon: "116.189454",
    lat: "39.999418",
    ts: null,
  },
  {
    lon: "116.244646",
    lat: "39.990574",
    ts: null,
  },
  {
    lon: "116.281441",
    lat: "40.008703",
    ts: null,
  },
  {
    lon: "116.271092",
    lat: "40.142201",
    ts: null,
  },
  {
    lon: "116.271092",
    lat: "40.142201",
    ts: null,
  },
];
const area = [];
class Detal extends React.Component {
  componentDidMount() {
    this.renderMap(arr, area);
  }
  renderMap = (result, area) => {
    this.map = new window.BMap.Map("orderDetailMap");
    // this.map.centerAndZoom('北京', 11);
    this.addMapControl();

    this.drawBikeRoute(result);

    // 绘制服务区
    this.drawServiceArea(result);
  };

  // 添加地图控件
  addMapControl = () => {
    let map = this.map;
    map.addControl(
      new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT })
    );
    map.addControl(
      new window.BMap.NavigationControl({
        anchor: window.BMAP_ANCHOR_TOP_RIGHT,
      })
    );
  };

  drawBikeRoute = (postlist) => {
    let startPoint = "";
    let endPoint = "";
    if (postlist.length > 0) {
      let arr = postlist[0];
      let last = postlist[postlist.length - 1];

      // 起始坐标点
      startPoint = new window.BMap.Point(arr.lon, arr.lat);
      let startIcon = new window.BMap.Icon(
        "/assets/start_point.png",
        new window.BMap.Size(72, 84),
        {
          imgageSize: new window.BMap.Size(72, 84),
          anchor: new window.BMap.Size(72, 84),
        }
      );
      let startMarker = new window.BMap.Marker(startPoint, { icon: startIcon });
      this.map.addOverlay(startMarker);
      // 终止坐标点
      endPoint = new window.BMap.Point(last.lon, last.lat);
      let endIcon = new window.BMap.Icon(
        "/assets/end_point.png",
        new window.BMap.Size(72, 84),
        {
          imgageSize: new window.BMap.Size(72, 84),
          anchor: new window.BMap.Size(72, 84),
        }
      );
      let endMarker = new window.BMap.Marker(endPoint, { icon: endIcon });
      this.map.addOverlay(endMarker);
      // 连接路线图
      let trackPoint = [];
      for (let i = 0; i < postlist.length; i++) {
        let point = postlist[i];
        trackPoint.push(new window.BMap.Point(point.lon, point.lat));
      }

      // 绘制折线
      let polyline = new window.BMap.Polyline(trackPoint, {
        strokeColor: "#1869AD",
        strokeWeight: 3,
        fillColor: "#ff8605",
        strokeOpacity: 1,
        fillOpacity: 0.6
      });
    
      this.map.addOverlay(polyline);

      this.map.centerAndZoom(endPoint, 11);
    }
  };

  drawServiceArea = (postlist) => {
    let trackPoint = [];
    for (let i = 0; i < postlist.length; i++) {
      let point = postlist[i];
      trackPoint.push(new window.BMap.Point(point.lon, point.lat));
    }
    // 绘制服务区
    let polygon = new window.BMap.Polygon(trackPoint, {
      strokeColor: "#CE0000",
      strokeWeight: 4,
      strokeOpacity: 1,
      fillColor: "#ff8605",
      fillOpacity: 0.4,
    });

    this.map.addOverlay(polygon);
  };

  render() {
    return (
      <div style={{ width: "100%", padding: "20px" }}>
        <Card>
          <div id="orderDetailMap" className="order-map"></div>
          <div className="detail-items">
            <div className="item-title">基础信息</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">用车模式</div>
                <div className="detail-form-content">555</div>
              </li>
              <li>
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-content">555</div>
              </li>
              <li>
                <div className="detail-form-left">用户信命</div>
                <div className="detail-form-content">555</div>
              </li>
              <li>
                <div className="detail-form-left">手机号码</div>
                <div className="detail-form-content">555</div>
              </li>
            </ul>
          </div>
          <div className="detail-items">
            <div className="item-title">行驶轨迹</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">行驶七点</div>
                <div className="detail-form-content">2323232</div>
              </li>
              <li>
                <div className="detail-form-left">重点</div>
                <div className="detail-form-content">1212121</div>
              </li>
              <li>
                <div className="detail-form-left">哈哈</div>
                <div className="detail-form-content">23232</div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    );
  }
}

export default Detal;
