import { Menu, Icon } from "antd";
import React from "react";
import routes from "../route/route";
import { Link, withRouter } from "react-router-dom";

class LeftMenu extends React.Component {

  constructor(props) {
    super(props);
    let submenuKeys = routes.map(entity => entity.key);
    let openKeys = [submenuKeys[0]];
    this.state = {
      openKeys,
      submenuKeys
    };
  }

  onOpenChange = (openKey) => {
    const latestOpenKey = openKey.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.state.submenuKeys.includes(latestOpenKey)) {
      this.setState({ openKeys: openKey });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  getMenuItem() {

    let menu = [];
    routes.forEach(entity => {
      if (entity.children) {
        menu.push(<Menu.SubMenu key={entity.key} title={<span><Icon type={entity.type}/>{entity.title}</span>}>
          {
            entity.children.map(item => item.isMenu ? <Menu.Item key={item.key}><Link to={item.path}>{item.title}</Link></Menu.Item> : null)
          }
        </Menu.SubMenu>);
      } else {
        menu.push(<Menu.Item key={entity.key}><Link to={entity.path}>{entity.title}</Link></Menu.Item>)
      }
    });
    return menu;
  }

  render() {
    let selectedKeys = this.props.location.pathname;
    return (
      <Menu mode="inline" theme="dark" selectedKeys={[selectedKeys]} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
        {this.getMenuItem()}
      </Menu>
    );
  }
}

export default withRouter(LeftMenu);
