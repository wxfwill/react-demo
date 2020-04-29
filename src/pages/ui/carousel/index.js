import React, { Component } from "react";
import { Card, Carousel } from "antd";
import "./index.less";

class Carousel1 extends Component {
  render() {
    return (
      <div className="Carousel">
        <Card className="Carousel-ls" title="文字背景轮播">
          <Carousel autoplay effect="fade">
            <div>
              <h3>1 vue</h3>
            </div>
            <div>
              <h3>2 js</h3>
            </div>
            <div>
              <h3>3 react</h3>
            </div>
            <div>
              <h3>4 ng</h3>
            </div>
          </Carousel>
        </Card>
        <Card className="Carousel-ls" title="图片背景轮播">
          <Carousel autoplay effect="fade">
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt="1"/>
            </div>
            <div>
            <img src="/carousel-img/carousel-2.jpg" alt="2"/>
            </div>
            <div>
            <img src="/carousel-img/carousel-3.jpg" alt="3"/>
            </div>
          </Carousel>
        </Card>
      </div>
    );
  }
}

export default Carousel1;
