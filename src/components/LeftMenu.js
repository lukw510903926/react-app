import { Menu, Icon } from "antd";
import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ReactRoute from "./route/route";

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
const { Footer, Sider, Content } = Layout;

class LeftMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: props.width || -1,
      height: props.height || -1,
      openKeys: ["sub1"]
    };
  }

  rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  onOpenChange = (openKeys) => {
    console.info(this.state)
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
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
    title: "表头",
    info: "属性展开表达式"
  };

  render() {

    let user = { name: "name", age: 20 };
    return (
      <Router>
        <Layout>
          <Sider style={{ height: this.state.height }}>
            <Menu mode="inline" theme="dark" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
              <SubMenu key="sub1" title={<span><Icon type="mail"/><span>组件</span></span>}>
                <Item key="1"><Link to="table">表格</Link></Item>
                <Item key="2"><Link to="/form">表单</Link></Item>
                <SubMenu key="sub3" title="Submenu">
                  <Item key="7">Option 7</Item>
                  <Item key="8">Option 8</Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
                <Item key="9">Option 9</Item>
                <Item key="10">Option 10</Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content span={24}>
              <ReactRoute/>
            </Content>
            <Footer style={{ textAlign: "center" }} {...user} {...this.vue}>Footer</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default LeftMenu;
