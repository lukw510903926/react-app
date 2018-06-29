import {Menu, Icon} from "antd";
import React from "react";
import Grid from "./Grid";
import Form from "./Form";
import {Layout} from "antd";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const Item = Menu.Item
const {Footer, Sider, Content} = Layout;

class LeftMenu extends React.Component {

    constructor(props) {
        super(props);
        console.info(props);
        this.state = {
            width: props.width || -1,
            height: props.height || -1
        };
    }

    rootSubmenuKeys = ["sub1", "sub2", "sub4"];
    state = {
        openKeys: ["sub1"]
    };
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    };


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
            let {
                width,
                height
            } = this.props;
            //如果props没有指定height和width就自适应
            height = document.body.clientHeight - 64;
            width = document.body.clientWidth;
            this.setState({
                width,
                height
            });
        } catch (ignore) {
        }
    }

    vue = {
        title: '表头',
        info: '属性展开表达式'
    }

    rootSubmenuKeys = ["sub1", "sub2", "sub4"];
    state = {
        openKeys: ["sub1"]
    };
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({
                openKeys
            });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    };

    render() {
        let info = {paddingRight: 20, textAlign: "right"}
        let user = {name: 'name', age: 20}
        return (
            <Router>
                <Layout>
                    <Sider style={{height: this.state.height}}>
                        <Menu mode="inline" theme="dark" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
                            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>组件</span></span>}>
                                <Item key="1"><Route><Link to="table">表格</Link></Route></Item>
                                <Item key="2"><Route><Link to="/form">表单</Link></Route></Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Item key="7">Option 7</Item>
                                    <Item key="8">Option 8</Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4"
                                     title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
                                <Item key="9">Option 9</Item>
                                <Item key="10">Option 10</Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content span={24}>
                            <Route exact path="/" component={Grid}/>
                            <Route path="/about" component={Form}/>
                            <Route path="/topics" component={Grid}/>
                            <Route path="/form" component={Form}/>
                            <Route path="/table" component={Grid}/>
                        </Content>
                        <Footer style={{textAlign: "center"}} {...user} {...this.vue}>Footer</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default LeftMenu;
