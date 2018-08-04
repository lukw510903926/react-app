import React from "react";
import { Route, Redirect, Switch, HashRouter as Router, withRouter } from "react-router-dom";
import routes from "./route";
import Constants from "../util/Constants";
import LocalStore from "../util/LocalStore";

class ReactRoute extends React.Component {

  constructor(props) {
    super(props);
    let routeMap = {};
    routes.forEach(route => {
      if (route.children) {
        route.children.forEach(entity => {
          routeMap[entity.key] = entity;
        });
      } else {
        routeMap[route.key] = route;
      }
    });
    this.state = {
      routeMap: routeMap
    };
  }

  /**
   * 判断是否登录
   */
  componentDidUpdate() {
    let currentPath = this.props.location.pathname;
    let route = this.state.routeMap[currentPath];
    document.title = route ? route.title : "react后台管理系统";
  }

  getRoutes(hasLogin) {

    let items = [];
    routes.forEach(entity => {
      if (entity.children) {
        items.push(...entity.children);
      } else {
        items.push(entity);
      }
    });
    return items.map(route => <Route {...route} component={
      props => (route.auth && !hasLogin ?
        (<Redirect {...props} to={{ pathname: "/login", state: { from: props.location } }}/>) :
        (<route.name {...props}/>))
    }/>);
    // routes.map(route => <Route {...route} exact component={ () => !route.auth ? <route.name /> : <Redirect to={'/login'}/> }/>)
  }

  render() {
    let hasLogin = !!LocalStore.getItem(Constants.LOGIN_USER);
    return (
      <Router>
        <Switch>
          <Route exact path="/home" render={() => <Redirect to="/home/form"/>}/>
          {this.getRoutes(hasLogin)}
          <Redirect from='*' to='/home/404'/>
        </Switch>
      </Router>
    );
  }
}

export default withRouter(ReactRoute);
