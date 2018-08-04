import React from "react";
import { Table } from "antd";

export default class Role extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };

  }

  render() {
    const columns = [
      { title: "名称", dataIndex: "name", align: "center" },
      { title: "英文名称", dataIndex: "code", align: "center" },
      { title: "创建时间", dataIndex: "created", align: "center" }
    ];
    return <div>
      <Table bordered={true} rowKey={record => record.name} columns={columns}
             dataSource={this.state.dataSource}/>
    </div>;
  }
}
