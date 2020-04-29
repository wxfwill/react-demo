import React, { Component } from "react";
import { Card, Tabs } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./index.less";
const { TabPane } = Tabs;

class Tab extends Component {
    state = {
      panes: [],
      activeKey: null
    };
    newTabIndex = 0;
  hangdleChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  };
  onEdit = (targetKey, active) => {
    this[active](targetKey);
  };
  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: "New Tab Pane", key: activeKey });
    this.setState({ panes, activeKey });
  };
  remove = (targetKey) => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };
  componentDidMount() {
    const _panes = [
      {
        title: "tab1",
        content: "tab1",
        key: "1",
      },
      {
        title: "tab2",
        content: "tab2",
        key: "2",
      },
      {
        title: "tab3",
        content: "tab3",
        key: "3",
      },
    ];
    this.setState({
      panes: _panes,
      activeKey: _panes[0].key,
    });
  }
  render() {
    return (
      <div className="Tabs">
        <Card title="tabs页签" className="Tabs-ls">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="tab1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title="带图标的tabs页签" className="Tabs-ls">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane
              tab={
                <span>
                  {" "}
                  <PlusOutlined />
                  tab1
                </span>
              }
              key="1"
            >
              Content of Tab Pane 1
            </TabPane>
            <TabPane
              tab={
                <span>
                  {" "}
                  <PlusOutlined />
                  tab2
                </span>
              }
              key="2"
              disabled
            >
              Content of Tab Pane 2
            </TabPane>
            <TabPane
              tab={
                <span>
                  {" "}
                  <PlusOutlined />
                  tab3
                </span>
              }
              key="3"
            >
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title="动态的tabs页签" className="Tabs-ls">
          <Tabs
            activeKey={this.state.activeKey}
            type="editable-card"
            onChange={this.hangdleChange}
            onEdit={this.onEdit}
          >
            {this.state.panes.map((item) => {
              return <TabPane tab={item.title} key={item.key}></TabPane>;
            })}
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default Tab;
