import React from "react";
import {Route, Redirect, Switch, HashRouter as Router, withRouter} from "react-router-dom";
import routes from "./route";

class ReactRoute extends React.Component {

    routeMap = {}
    currentPath = ''
    hasLogin = false
    constructor(props) {
        super(props)
        routes.forEach(route => this.routeMap[route.key] = route)
    }

    /**
     * 判断是否登录
     * @param route 路由信息
     */
    componentDidUpdate() {
        this.currentPath = this.props.location.pathname
        let route = this.routeMap[this.currentPath]
        document.title = route ? route.title :'react'
        this.hasLogin =  route ? route.auth : true
    }

    render() {

        return <Router>
            <Switch>
                <Route exact path="/home" render={() => <Redirect to="/home/form"/>}/>
                {
                    // routes.map(route => <Route {...route} exact component={ () => !route.auth ? <route.name /> : <Redirect to={'/login'}/> }/>)
                    routes.map(route => <Route {...route} component={
                        props => (route.auth && !this.hasLogin ? (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>) : (<route.name {...props}/>))
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
