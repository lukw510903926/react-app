import React from 'react';
import {Col, Row} from "antd";
import store from "@/store/store";

class ReduxBrother extends React.Component {

    constructor(props) {
        super(props);
        let msg = 'ReduxBrother msg';
        this.state = {msg};
        store.subscribe(() =>
            this.setState({msg: this.state.msg + '  ' + store.getState().dispatchMsg})
        );
    }

    render() {
        return (
            <div>
                <Row style={{marginTop: '20px'}}>
                    <Col offset={8} span={8}>
                        <a>{this.state.msg}</a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ReduxBrother