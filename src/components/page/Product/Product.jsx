import React from 'react'
import {Form} from 'antd'

class Product extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        let FieldDecorator = this.props.form.getFieldDecorator
        return <div>
            <Form>
                <Form.Item></Form.Item>
            </Form>
        </div>
    }
}

export  default Form.create()(Product)
