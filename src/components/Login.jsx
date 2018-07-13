import React from "react";
import {Form, Input, Row, Button} from "antd";
import Constants from '../util/Constants'
import LocalStore from '../util/LocalStore'

class Login extends React.Component {

    constructor(props) {
        super(props);
        let from = this.props.location.state ? this.props.location.state.from.pathname : null
        if(from){
            LocalStore.setItem('fromPath',from)
        }
    }

    login = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((error, value) => {
            if (!error) {
                let from = LocalStore.getItem('fromPath') ? LocalStore.getItem('fromPath') : '/home/form'
                this.props.history.replace(from)
                LocalStore.setItem(Constants.LOGIN_USER,value)
            }
        })
    }

    render() {

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            }
        }
        const fieldDecorator = this.props.form.getFieldDecorator
        return (
            <div  className='login-page'>
                <div className='login-container'>
                    <Row justify='center' type='flex' style={{fontSize: '18px', marginBottom: '15px'}}>
                        React 后台登录
                    </Row>
                    <Form onSubmit={this.login}>
                        <Form.Item label='账号'   {...formItemLayout}>
                            {
                                fieldDecorator('username')(<Input/>)
                            }
                        </Form.Item>
                        <Form.Item label='密码'   {...formItemLayout}>
                            {
                                fieldDecorator('password')(<Input type="password"/>)
                            }
                        </Form.Item>
                        <Row justify='center' type='flex'>
                            <Button type='primary' htmlType='submit'>登录</Button>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login);
