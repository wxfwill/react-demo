import React from "react";
import { Row, Col } from "antd";
import Util from "../../utils/utils";
import axios from "../../axios";
import "./index.less";
import {connect} from 'react-redux'


class Header extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     username: '',
  //     sysTime: null
  //   }
  // }
  state = {};
  componentDidMount() {
    this.setState({
      username: "wxf",
    });
    this.timer = setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime,
      });
    }, 1000);

    this.getWeatherApiDate();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  getWeatherApiDate = () => {
    let city = "深圳";
    axios
      .jsonp({
        url:
          "http://api.map.baidu.com/telematics/v3/weather?location=" +
          encodeURIComponent(city) +
          "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2",
      })
      .then((res) => {
        console.log(233);
        if (res.status === "success") {
          console.log(res);
          let data = res.results[0].weather_data[0];
          this.setState({
            dayPictureUrl: data.dayPictureUrl,
            weather: data.weather,
          });
        }
      });
  };
  render() {
    const menuType = this.props.menuType;
    return (
      <div className="header">
        <Row className="header-top">
          {menuType ? (
            <Col span={6} className="logo-ant">
              <img src="/assets/logo-ant.svg" alt="logo"/>
              <span>IMooc 通用后台管理系统</span>
            </Col>
          ) : (
            ""
          )}

          <Col span={menuType ? 18 : 24}>
            <span>欢迎，{this.state.username}</span>
            <a href="###">退出</a>
            {/* <span>退出</span> */}
          </Col>
        </Row>
        {menuType ? (
          ""
        ) : (
          <Row className="breadcrumd">
            <Col span={4} className="breadcrumd-title">
              {this.props.menuName || '首页'}
            </Col>
            <Col span={20} className="weather">
              <span className="date">{this.state.sysTime}</span>
              <span className="weather-img">
                <img src={this.state.dayPictureUrl} alt="天气图片" />
              </span>
              <span className="weather-detal">{this.state.weather}</span>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
      menuName: state.menuName
  }
};
export default connect(mapStateToProps)(Header);
