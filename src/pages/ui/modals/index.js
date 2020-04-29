import React from "react";
import { Modal, Button, Card } from "antd";
import "./index.less";

class Models extends React.Component {
  state = {
    showmodel1: false,
    showmodel2: false,
    showmodel3: false,
    showmodel4: false,
  };
  handleopen = (type) => {
    this.setState({
      [type]: true,
    });
  };
  handleConfirm = (type) => {
    Modal[type]({
        title: '确认',
        content: '的户口京东到家',
        onOk() {
            console.log('ok');
        },
        onCancel() {
            console.log('cancel');
        }
    })
  };
  render() {
    return (
      <div className="modals-wrap">
        <Card className="model" title="基础模态框">
          <Button type="primary" onClick={() => this.handleopen("showmodel1")}>
            open
          </Button>
          <Button type="primary" onClick={() => this.handleopen("showmodel2")}>
            自定义页脚
          </Button>
          <Button type="primary" onClick={() => this.handleopen("showmodel3")}>
            顶部20px弹框
          </Button>
          <Button type="primary" onClick={() => this.handleopen("showmodel4")}>
            水平垂直居中
          </Button>
        </Card>
        <Card className="model" title="信息确认框">
          <Button type="primary" onClick={() => this.handleConfirm("confirm")}>
          confirm
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("info")}>
          info
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("success")}>
          success
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("warning")}>
          Warning
          </Button>
        </Card>
        <Modal
          title="react"
          visible={this.state.showmodel1}
          onCancel={() => {
            // return (
            this.setState({
              showmodel1: false,
            });
            // )
          }}
        >
          <p>欢饮学习</p>
        </Modal>
        <Modal
          title="react"
          visible={this.state.showmodel2}
          okText="好的"
          cancelText="算了"
          onCancel={() => {
            this.setState({
              showmodel2: false,
            });
          }}
        >
          <p>哈哈哈哈</p>
        </Modal>
        <Modal
          title="react"
          style={{top: 20}}
          visible={this.state.showmodel3}
          onCancel={() => {
            this.setState({
              showmodel3: false,
            });
          }}
        >
          <p>modal3333</p>
        </Modal>
        <Modal
          title="react"
          visible={this.state.showmodel4}
          wrapClassName="vertical-center-modal"
          onCancel={() => {
            this.setState({
              showmodel4: false,
            });
          }}
        >
          <p>水平垂直居中</p>
        </Modal>
      </div>
    );
  }
}

export default Models;
