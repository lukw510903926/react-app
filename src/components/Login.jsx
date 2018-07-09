import React from "react";
import { Form, Input, Row, Col, Button, AutoComplete } from "antd";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  login = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((error, value) => {
      if (!error) {
        console.info(value);
      }
    });
  };

  render() {
    return <div>
      <Row>
        <Col span='24'>
          React 后台登录
        </Col>
      </Row>
      <Form onSubmit={this.login}>
        <Row>
          <Form.Item>
            <Button type='primary' htmlType='submit'>提交</Button>
          </Form.Item>
        </Row>
      </Form>
    </div>;

  }
}

export default Form.create()(Login);
