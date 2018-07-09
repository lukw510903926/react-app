import React, { Component } from "react";
import { Layout } from "antd";
import LeftMenu from "./components/LeftMenu";
import { HashRouter as Router } from "react-router-dom";
import { Row, Col } from "antd";
import ReactRoute from "./route/route";
import About from "./components/About";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      minHeight: props.height || -1,
      width: props.width || -1
    };
    this.handleVar = this.getChildData.bind(this);
    console.info(this.handleVar);
  }

  vue = {
    title: "表头",
    info: "属性展开表达式"
  };


  componentDidMount() {
    this.updateSize();
    window.addEventListener("resize", () => this.updateSize());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateSize());
  }

  updateSize() {
    try {
      //console.info(ReactDOM.findDOMNode(this).parentNode);
      // let {  width,  height } = this.props;
      //如果props没有指定height和width就自适应
      var minHeight = document.body.clientHeight - 64;
      var width = document.body.clientWidth;
      this.setState({
        width,
        minHeight
      });
    } catch (ignore) {
      console.error(ignore);
    }
  }

  /**
   * 获取子组件数据
   * @param values 子组件传递的数据
   */
  getChildData(values) {
    console.info(values);
  }

  render() {
    let info = { paddingRight: 20, textAlign: "right" };
    let user = { name: "name", age: 20 };
    return (
      <Layout>
        <Layout.Header>
          <Row style={{ fontSize: 18 }}>
            <Col span={20}> 后台管理系统 </Col>
            <Col style={info} span={4}> 超级管理员 </Col>
          </Row>
        </Layout.Header>
        <Router>
          <Layout>
            <Layout.Sider style={{ minHeight: this.state.minHeight }}>
              <LeftMenu/>
            </Layout.Sider>
            <Layout>
              <Layout.Content span={24}>
                <ReactRoute {...user} toParentHandle={this.getChildData.bind(this)}/>
              </Layout.Content>
              <Layout.Footer {...this.vue}>
                <About/>
              </Layout.Footer>
            </Layout>
          </Layout>
        </Router>
      </Layout>
    );
  }
}
