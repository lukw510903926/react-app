import { Menu, Icon } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

export default class LeftMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openKeys: ["sub1"],
      selectedKeys: ["2"]
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
      <Menu mode="inline" theme="dark" defaultSelectedKeys={this.state.selectedKeys} openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}>
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
    );
  }
}

