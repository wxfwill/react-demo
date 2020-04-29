import React, { Component } from "react";
import { Card, Row, Col, Modal } from "antd";
import "./index.less";

class Gallery extends Component {
    state = {
        visible: false
    };
    hangdleOpen =(src) => {
        this.setState({
            visible: true,
            curimg: src
        })
    }
  render() {
    const imgs = [
      ["1.png", "2.png", "3.png", "4.png", "5.png"],
      ["6.png", "7.png", "8.png", "9.png", "10.png"],
      ["11.png", "12.png", "13.png", "14.png", "15.png"],
      ["16.png", "17.png", "18.png", "19.png", "20.png"],
      ["21.png", "22.png", "23.png", "24.png", "25.png"],
    ];

    const imgList = imgs.map((list) =>
      list.map((item) => (
        <Card cover={<img src={"/gallery/" + item} alt="img" onClick={() => this.hangdleOpen(item)} />} style={{marginBottom: 10}} key={item}>
          <Card.Meta title="react" description="love"></Card.Meta>
        </Card>
      ))
    );
    return (
      <div className="Gallery">
        <Row gutter={10}>
          <Col md={5}>{imgList[0]}</Col>
          <Col md={5}>{imgList[1]}</Col>
          <Col md={5}>{imgList[2]}</Col>
          <Col md={5}>{imgList[3]}</Col>
          <Col md={4}>{imgList[4]}</Col>
        </Row>
        <Modal
            width={380}
            height={500}
            title='图片画廊'
            visible={this.state.visible}
            onCancel={() => {
                this.setState({
                    visible: false
                })
            }}
            footer={null}
        >
            {<img src={'/gallery/' + this.state.curimg} alt="img" style={{width: '100%'}}/>}
        </Modal>
      </div>
    );
  }
}

export default Gallery;
