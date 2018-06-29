import React, {Component} from "react";
import {Layout} from "antd";
import LeftMenu from "./components/LeftMenu";
import {Row, Col} from "antd";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: props.width || -1,
            height: props.height || -1
        };
    }
    render() {
        let info = {paddingRight: 20,textAlign: "right"}
        return (
            <div>
                <Layout>
                    <Layout.Header>
                        <Row style={{fontSize:18}}>
                            <Col span={20}> 后台管理系统 </Col>
                            <Col style={info} span={4}> 超级管理员 </Col>
                        </Row>
                    </Layout.Header>
                    <LeftMenu/>
                </Layout>
            </div>
        );
    }

}

export default App;
