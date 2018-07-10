import { Menu, Icon } from "antd";
import React from "react";
import { Link, withRouter } from "react-router-dom";

class LeftMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openKeys: ["sub1"]
    };
  }

  rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {

    return (
      <Menu mode="inline" theme="dark" selectedKeys={[this.props.location.pathname]}
            openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
        < Menu.SubMenu key="sub1" title={<span><Icon type="setting"/><span>组件</span></span>}>
          <Menu.Item key="/table"><Link to="table">表格</Link></Menu.Item>
          <Menu.Item key="/form"><Link to="/form">表单</Link></Menu.Item>
          <Menu.Item key="/productlist"><Link to="productlist">产品列表</Link></Menu.Item>
        </ Menu.SubMenu>
        < Menu.SubMenu key="sub4" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </ Menu.SubMenu>
      </Menu>
    );
  }
}

export default withRouter(LeftMenu);
