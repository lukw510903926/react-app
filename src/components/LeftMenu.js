import {Menu, Icon} from "antd";
import React from "react";
import routes from "../route/route";
import {Link, withRouter} from "react-router-dom";

class LeftMenu extends React.Component {

    constructor(props) {
        super(props);
        let rootSubmenuKeys = routes.map(entity => entity.key);
        let openKeys = [rootSubmenuKeys[0]];
        this.state = {
            openKeys,
            rootSubmenuKeys
        };
    }

    onOpenChange = (openKey) => {
        const latestOpenKey = openKey.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.includes(latestOpenKey)) {
            this.setState({openKeys: openKey});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    };

    getMenuItem() {

        let menuItems = [];
        routes.forEach(entity => {
            if (entity.children) {
                menuItems.push(<Menu.SubMenu key={entity.key} title={<span><Icon type={entity.type}/>{entity.title}</span>}>
                    {
                        entity.children.map(item => {
                            if (item.menuItem) {
                                return <Menu.Item key={item.key}><Link to={item.path}>{item.title}</Link></Menu.Item>;
                            }
                        })
                    }
                </Menu.SubMenu>);
            } else if (entity.menuItem) {
                return <Menu.Item key={entity.key}><Link to={entity.path}>{entity.title}</Link></Menu.Item>;
            }
        });
        return menuItems;
    }

    render() {
        return (
            <Menu mode="inline" theme="dark" selectedKeys={[this.props.location.pathname]} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
                {this.getMenuItem()}
            </Menu>
        );
    }
}

export default withRouter(LeftMenu);
