import React, {Component} from "react";
import {Layout} from "antd";
import LeftMenu from "./components/LeftMenu";
import {BrowserRouter as Router} from "react-router-dom";
import {Row, Col} from "antd";
import ReactRoute from "./route/route";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: props.width || -1,
            height: props.height || -1
        };
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
            let {
                width,
                height
            } = this.props;
            //如果props没有指定height和width就自适应
            height = document.body.clientHeight - 64;
            width = document.body.clientWidth;
            this.setState({
                width,
                height
            });
        } catch (ignore) {
        }
    }

    render() {
        let info = {paddingRight: 20, textAlign: "right"}
        let user = {name: "name", age: 20};
        return (
            <div>
                <Layout>
                    <Layout.Header>
                        <Row style={{fontSize: 18}}>
                            <Col span={20}> 后台管理系统 </Col>
                            <Col style={info} span={4}> 超级管理员 </Col>
                        </Row>
                    </Layout.Header>
                    <Router>
                        <Layout>
                            <Layout.Sider style={{height: this.state.height}}>
                                <LeftMenu/>
                            </Layout.Sider>
                            <Layout>
                                <Layout.Content span={24}>
                                    <ReactRoute {...user}/>
                                </Layout.Content>
                                <Layout.Footer style={{textAlign: "center"}} {...user} {...this.vue}>Footer</Layout.Footer>
                            </Layout>
                        </Layout>
                    </Router>
                </Layout>
            </div>
        );
    }

}
