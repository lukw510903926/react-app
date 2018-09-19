import React from 'react'
import {Button, Row, Col} from 'antd'

class ReduxComponent extends React.Component {

    constructor(props) {
        super(props)
        let msg = 'ReduxComponent msg'
        this.state = {msg}
    }

    changeValue = () => {
        console.info('click value change')
        let msg = this.state.msg + 'click msg  '
        this.setState({msg})
    }

    render() {
        return (
            <div>
                <Row style={{marginTop: '20px'}}>
                    <Col offset={8} span={8}>
                        <Button type='primary' onClick={() => this.changeValue()}>点击按钮 </Button>
                    </Col>
                </Row>
                <Row >
                    <Col offset={8} span={8}>
                        <a>value : {this.state.msg}</a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ReduxComponent