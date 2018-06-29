import {Form, DatePicker, Button} from 'antd';
import React from 'react'

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

export default class TimeRelatedForm extends React.Component {

    constructor(props) {
        super()
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8}
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16}
            }
        };
        return (
            <Form>
                <FormItem {...formItemLayout} label="DatePicker">
                    <DatePicker/>
                </FormItem>
                <FormItem {...formItemLayout} label="DatePicker[showTime]">
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                </FormItem>
                <FormItem {...formItemLayout} label="MonthPicker">
                    <MonthPicker/>
                </FormItem>
                <FormItem {...formItemLayout} label="RangePicker">
                    <RangePicker/>
                </FormItem>
                <FormItem {...formItemLayout} label="RangePicker[showTime]">
                    <RangePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                </FormItem>
                <FormItem {...formItemLayout} label="TimePicker">
                    <RangePicker/>
                </FormItem>
                <FormItem
                    wrapperCol={{
                        xs: {span: 24, offset: 0},
                        sm: {span: 16, offset: 8}
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
