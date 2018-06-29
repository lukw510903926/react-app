import React from "react";
import { Table } from "antd";

export default class Grid extends React.Component {

  constructor(props) {
    super();
    this.state = {
      list: [{ id: 1, name: "name1", age: 20 }, { id: 2, name: "name2", age: 30 }]
    };
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


  render() {

    return <div>
      <table className='ant-table-content'>
        <tbody className='ant-table-tbody'>
        <tr>
          <td>姓名</td>
          <td>年龄</td>
        </tr>
        {
          this.state.list.map((post, index) => {
              return <tr key={index}>
                <td>{post.name}</td>
                <td>{post.age}</td>
              </tr>;
            }
          )
        }
        </tbody>
      </table>
      <Table columns={this.columns} dataSource={this.data} size="small"/>
    </div>;
  }
}
