import React from "react";
import { Table, Row, Button, Input } from "antd";
import { Link } from "react-router-dom";
// import FetchHttp from '../../http/FetchHttp'
// import AxiosHttp from '../../http/AxiosHttp'

export default class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    this.getData();
    // this.fetchData()
    // FetchHttp.getRequest('http://localhost:8010/consumer/type/list', (data) => console.info(data))
    // FetchHttp.postRequest('http://localhost:8010/consumer/type/list',{name : 'fetch_name'}, (data) => console.info(data))
    // AxiosHttp.postRequest('http://localhost:8010/consumer/type/list',{name : 'fetch_name'}).then(response =>console.info(response.data),error =>console.info(error));
    // AxiosHttp.getRequest('http://localhost:8010/consumer/type/list').then(response =>console.info(response.data),error =>console.info(error));
  }

  getData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({ name: "产品名称" + i, code: "code" + i, price: "20" + i });
    }
    this.setState({
      dataSource: data
    });
  };
  focusTextInput = () => {
    this.setState({
      textAreaContent: JSON.stringify(this.tableRef.current.props)
    });
  };

  render() {
    const columns = [
      { title: "产品名称", dataIndex: "name", align: "center" },
      { title: "产品编码", dataIndex: "code", align: "center" },
      { title: "价格", dataIndex: "price", align: "center" }
    ];
    return <div>
      <Input.TextArea style={{ marginTop: 5, marginBottom: 5 }} rows={4} placeholder='textarea内容'
                      value={this.state.textAreaContent}/>
      <Row justify='end' type='flex' className='panel'>
        <Button type="primary" className='ant-btn addButton' onClick={() => this.focusTextInput()}>获取table属性</Button>
        <Link to="/home/product" className='ant-btn addButton'>新增</Link>
      </Row>
      <Table bordered={true} rowKey={record => record.name} columns={columns}
             ref={this.tableRef} dataSource={this.state.dataSource}/>
    </div>;
  }
}
