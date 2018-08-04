import React from "react";
import { Table } from "antd";

export default class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };

  }

  render() {
    const columns = [
      { title: "姓名", dataIndex: "name", align: "center" },
      { title: "账号", dataIndex: "code", align: "center" },
      { title: "性别", dataIndex: "created", align: "center" }
    ];
    return <div>
      <Table bordered={true} rowKey={record => record.name} columns={columns}
             dataSource={this.state.dataSource}/>
    </div>;
  }
}
