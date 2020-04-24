import React, { Component } from "react";
import { Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div>
          <ui>
            <li>
              <Link to="/main">Home1</Link>
            </li>
            <li>
              <Link to="/about">about2</Link>
            </li>
            <li>
              <Link to="/topics">topics3</Link>
            </li>
          </ui>
          <hr />
          {this.props.children}
        </div>
    );
  }
}

export default Home;
