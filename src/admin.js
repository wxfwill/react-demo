import React from 'react'
import { Row, Col } from 'antd'
import './style/reset.css'
import './style/common.less'
import Header from './compotents/Header'
import Footer from './compotents/Footer'
import NavLeft from './compotents/NavLeft'
// import Home from './pages/home'

// import 'antd/dist/antd.css'


class Admin extends React.Component {
    render() {
        return(
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col span={20} className="main">
                    <Header />
                    <Row className="content">
                        {/* <Home /> */}
                        {this.props.children}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        )
    }
}

export default Admin;