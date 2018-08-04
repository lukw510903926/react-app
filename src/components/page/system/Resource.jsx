import React from "react";
import { Table } from "antd";

export default class Resource extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };

  }

  render() {
    const columns = [
      { title: "名称", dataIndex: "name", align: "center" },
      { title: "url", dataIndex: "code", align: "center" },
      { title: "父节点", dataIndex: "created", align: "center" }
    ];
    return <div>
      <Table bordered={true} rowKey={record => record.name} columns={columns}
             dataSource={this.state.dataSource}/>
    </div>;
  }
}
