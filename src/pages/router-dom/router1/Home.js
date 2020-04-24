import React, { Component } from "react";
import { HashRouter, Route, Link, Switch} from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Topics from "./Topics";

class Home extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ui>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/topics">topics</Link>
            </li>
          </ui>
          <hr />
          <Switch>
            <Route exact={true} path="/" component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Home;
