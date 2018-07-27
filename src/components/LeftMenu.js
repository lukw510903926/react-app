import { Menu, Icon } from "antd";
import React from "react";
import routes from "../route/route";
import { Link, withRouter } from "react-router-dom";

class LeftMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openKeys: ["sub1"],
      rootSubmenuKeys: ["sub1", "sub2", "sub4"]
    };
  }

  onOpenChange = (openKey) => {
    const latestOpenKey = openKey.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.state.rootSubmenuKeys.includes(latestOpenKey)) {
      this.setState({ openKeys: openKey });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  getMenuItem() {
    let menuItems = [];
    routes.forEach(entity => {
      if (entity.menuItem) {
        menuItems.push(<Menu.Item key={entity.key}><Link to={entity.path}>{entity.title}</Link></Menu.Item>);
      }
    });
    return menuItems;
  }

  render() {
    return (
      <Menu mode="inline" theme="dark" selectedKeys={[this.props.location.pathname]}
            openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
        <Menu.SubMenu key="sub1" title={<span><Icon type="setting"/>组件</span>}>
          {this.getMenuItem()}
        </ Menu.SubMenu>
      </Menu>
    );
  }
}

export default withRouter(LeftMenu);
