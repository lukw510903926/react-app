import React from "react";
import {Route, Redirect, Switch, HashRouter as Router, withRouter} from "react-router-dom";
import routes from "./route";
import Constants from '../util/Constants'
import LocalStore from "../util/LocalStore";

class ReactRoute extends React.Component {

    constructor(props) {
        super(props)
        let routeMap = {}
        routes.forEach(route => routeMap[route.key] = route)
        this.state = {
            routeMap: routeMap
        }
    }

    /**
     * 判断是否登录
     * @param route 路由信息
     */
    componentDidUpdate() {
        let currentPath = this.props.location.pathname
        let route = this.state.routeMap[currentPath]
        document.title = route ? route.title : 'react'
    }

    render() {
        let loginUser = LocalStore.getItem(Constants.LOGIN_USER)
        let hasLogin = loginUser ? true : false
        return <Router>
            <Switch>
                <Route exact path="/home" render={() => <Redirect to="/home/form"/>}/>
                {
                    // routes.map(route => <Route {...route} exact component={ () => !route.auth ? <route.name /> : <Redirect to={'/login'}/> }/>)
                    routes.map(route => <Route {...route} component={
                        props => (route.auth && !hasLogin ?
                            (<Redirect {...props} to={{pathname: '/login', state: {from: props.location}}}/>)
                            : (<route.name {...props}/>))
                    }/>)
                }
                {
                    /*  <Route path="/login" component={Login}/>
                  <Route exact path="/form" component={ReactForm}/>
                  <Route exact path="/table" component={Grid}/>
                  <Route exact path="/product" component={Product}/>
                  <Route exact path="/product/list" component={ProductList}/>*/}
                <Redirect from='*' to='/home/404'/>
            </Switch>
        </Router>
    }
}

export default withRouter(ReactRoute)
