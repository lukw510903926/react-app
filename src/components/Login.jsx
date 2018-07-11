import React from "react";
import {Form, Input, Row, Button} from "antd";

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    login = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((error, value) => {
            if (!error) {
                console.info(value)
                this.props.history.push('/home/form')
            }
        });
    };

    render() {

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const fieldDecorator = this.props.form.getFieldDecorator
        return (
            <div style={{height: '960px'}} className='login-page'>
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
        );
    }
}

export default Form.create()(Login);
