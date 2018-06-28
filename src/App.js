import React, {Component} from "react";
import {Layout} from "antd";
import LeftMenu from "./components/LeftMenu";
import Grid from "./components/Table";
import {Row, Col} from "antd";
import {Table, Icon, Divider} from 'antd';

const {Header, Footer, Sider, Content} = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        console.info(props);
        this.state = {
            width: props.width || -1,
            height: props.height || -1
        };
    }

    componentDidMount() {
        this.updateSize();
        window.addEventListener("resize", () => this.updateSize());
    }

    componentWillUnmount() {
        window.removeEventListener("resize", () => this.updateSize());
    }

    updateSize() {
        try {
            //console.info(ReactDOM.findDOMNode(this).parentNode);
            let {width, height} = this.props;
            //如果props没有指定height和width就自适应
            height = document.body.clientHeight - 64;
            width = document.body.clientWidth;
            this.setState({width, height});
        } catch (ignore) {
        }
    }

    vue = {
        title: '表头',
        info: '属性展开表达式'
    }

    render() {
        let header = {
            fontSize: 18
        };
        let info = {
            paddingRight: 20,
            textAlign: "right"
        };
        let user = {
            name: 'name',
            age: 20
        }

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                  <a href="javascript:;">Action 一 {record.name}</a>
                  <Divider type="vertical"/>
                  <a href="javascript:;">Delete</a>
                  <Divider type="vertical"/>
                  <a href="javascript:;" className="ant-dropdown-link">
                    More actions <Icon type="down"/>
                  </a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];

        return (
            <div>
                <Layout>
                    <Header>
                        <Row style={header}>
                            <Col span={20}> 后台管理系统 </Col>
                            <Col style={info} span={4}> 超级管理员 </Col>
                        </Row>
                    </Header>
                    <Layout>
                        <Sider style={{height: this.state.height}}>
                            <LeftMenu/>
                        </Sider>
                        <Layout>
                            <Content span={24}>Content
                                <Grid/>
                                <Table columns={columns} dataSource={data}/>
                            </Content>
                            <Footer style={{textAlign: "center"}} {...user} {...this.vue}>Footer</Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }

}

export default App;
