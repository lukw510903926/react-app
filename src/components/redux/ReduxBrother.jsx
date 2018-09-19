import redux from 'redux'
import React from 'react'
import {Col, Row} from "antd";

class ReduxBrother extends React.Component {

    constructor(props) {
        super(props)
        let msg = 'ReduxBrother msg'
        this.state = {msg}
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