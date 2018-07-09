import React from "react";
import {Table, Button, Input} from "antd";

export default class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.tableRef = React.createRef()
    }

    columns = [{
        title: "Name",
        dataIndex: "name"
    }, {
        title: "Age",
        dataIndex: "age"
    }, {
        title: "Address",
        dataIndex: "address"
    }];
    data = [{
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park"
    }, {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park"
    }, {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park"
    }];

    focusTextInput = () => {
        this.setState({
            textAreaContent: JSON.stringify(this.tableRef.current.props)
        })
    }

    render() {

        return <div>
            <Button type="primary" onClick={() => this.focusTextInput()}>获取table属性</Button>
            <Input.TextArea style={{marginTop: 5, marginBottom: 5}} rows={4} placeholder='textarea内容'
                            value={this.state.textAreaContent}/>
            <Table ref={this.tableRef} columns={this.columns} dataSource={this.data} size="small"/>
        </div>;
    }
}
