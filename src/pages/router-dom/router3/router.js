import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import About from "../router1/About";
import Topics from "../router1/Topics";
import Info from "./Info";
import Home from "./Home";
import Nomatch from "./Nomatch";

class IRouter extends Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route
              path="/main"
              render={() => (
                <Main>
                  <Route path="/main/:mainid" component={Info}></Route>
                </Main>
              )}
            ></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
            <Route component={Nomatch}></Route>
          </Switch>
        </Home>
      </Router>
    );
  }
}

export default IRouter;
