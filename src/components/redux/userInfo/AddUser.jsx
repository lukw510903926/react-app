import React from 'react'
import {Row, Col, Button,Input } from 'antd'
import {connect} from 'react-redux'
import {addUser} from '@/store/actions'

class AddUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: Date.now(),
            age: Math.floor(Math.random()*(10)+10)
        };
        this.changeUsername = this.changeUsername.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.addUserInfo = this.addUserInfo.bind(this)
    }

    changeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    changeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    };

    addUserInfo = () => {
        console.info(this.props)
        this.props.addUser({...this.state,created:new Date().getMilliseconds()})
        this.setState({
            username: Date.now(),
            age: Math.floor(Math.random()*(10)+10)
        })
    };

    render() {
        return (
            <div>
                <Row gutter={5}>
                    <Col offset={4} span={8}>
                        <Input addonBefore='姓名' name='username' onChange={this.changeUsername} value={this.state.username}/>
                    </Col>
                    <Col span={6}>
                        <Input addonBefore='年龄' name='age' onChange={this.changeAge} value={this.state.age}/>
                    </Col>
                    <Col span={2}>
                        <Button type='primary' onClick={this.addUserInfo}>提交</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(
    null, {addUser}
)(AddUser)