import React from 'react'
import {Table, Button,Row} from 'antd'
import { Link } from "react-router-dom";

export default class ProductList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        const data = []
        for (let i = 0; i < 10; i++) {
            data.push({name: '产品名称' + i, code: 'code' + i, price: '20' + i})
        }
        this.setState({
            dataSource: data
        })
    }

    render() {
        const columns = [
            {title: '产品名称', dataIndex: 'name', align: 'center'},
            {title: '产品编码', dataIndex: 'code', align: 'center'},
            {title: '价格', dataIndex: 'price', align: 'center'}
        ]
        return <div>
            <Row justify='end' type='flex' className='panel'>
                <Link to="/product" className='ant-btn addButton'>新增</Link>
            </Row>
            <Table bordered={true} rowKey={record => record.name} columns={columns}
                   dataSource={this.state.dataSource}/>
        </div>
    }
}
