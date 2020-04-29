import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Home from './pages/home/index'
import Admin from "./admin";
import Button from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import NoMatch from "./pages/nomatch";
import Notification from "./pages/ui/notification";
import Tabs from "./pages/ui/tabs";
import Message from "./pages/ui/messages";
import Gallery from "./pages/ui/gallery";
import Carousel from "./pages/ui/carousel";
import LoginForm from "./pages/form/login";
import Register from "./pages/form/register";
import BaseTable from "./pages/table/baseTable"
import BickMap from './pages/map/bikeMap'
import Bar from './pages/echarts/bar/index';
import Pie from './pages/echarts/pie/index';
import RichText from './pages/rich'
import City from "./pages/city";
import Line from './pages/echarts/line'
import Order from "./pages/order/index";
import OrderDtail from './pages/order/orderDetal'
import Common from "./common";
import Permission from './pages/permission'
// import { message } from "antd";
class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route
            path="/common"
            render={() => {
              return (
                <Common>
                  <Route
                    path="/common/order/detal/:orderId"
                    component={OrderDtail}
                  ></Route>
                </Common>
              );
            }}
          ></Route>
          <Route
            path="/"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/ui/buttons" component={Button}></Route>
                  <Route path="/ui/modals" component={Modals}></Route>
                  <Route path="/ui/loadings" component={Loadings}></Route>
                  <Route
                    path="/ui/notification"
                    component={Notification}
                  ></Route>
                  <Route path="/ui/messages" component={Message}></Route>
                  <Route path="/ui/tabs" component={Tabs}></Route>
                  <Route path="/ui/gallery" component={Gallery}></Route>
                  <Route path="/ui/carousel" component={Carousel}></Route>
                  <Route path="/form/login" component={LoginForm}></Route>
                  <Route path="/form/reg" component={Register}></Route>
                  <Route path="/table/basic" component={BaseTable}></Route>
                  <Route path="/bikeMap" component={BickMap}></Route>
                  <Route path="/charts/bar" component={Bar}></Route>
                  <Route path="/charts/pie" component={Pie}></Route>
                  <Route path="/charts/line" component={Line}></Route>
                  <Route path="/rich" component={RichText}></Route>
                  
                  <Route path="/city" component={City}></Route>
                  <Route path="/order" component={Order}></Route>
                  <Route path="/permission" component={Permission}></Route>
                  <Redirect to='/home'></Redirect>
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            )}
          ></Route>
        </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default IRouter;
