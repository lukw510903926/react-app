import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import routes from "./route";


export default class ReactRoute extends Route {


    /**
     * 路由切换时权限认证
     * @param nextProps
     * @param nextContext
     */
    componentWillReceiveProps(nextProps, nextContext) {
        //通过toParentHandle 属性向父组件传递数据
        // console.info(nextContext.router.route.location.pathname)
        this.props.toParentHandle(false);
    }

    /**
     * 路由切换时权限认证
     * @param route 路由信息
     */
    requireLogin(route) {
        console.info("判断是否需要登录: " + route.auth);
        // return <Redirect to={'/login'} />;
        // console.info(route)
        document.title = route.title
        return <route.name/>;
    }

    render() {

        return <Switch>
            <Route exact path="/home" render={() => <Redirect to="/home/form"/>}/>
            {
                routes.map((route) => {
                    return <Route exact {...route} key={route.path} component={() => this.requireLogin(route)}/>;
                })
            }
            {
                /*  <Route path="/login" component={Login}/>
              <Route exact path="/form" component={ReactForm}/>
              <Route exact path="/table" component={Grid}/>
              <Route exact path="/product" component={Product}/>
              <Route exact path="/product/list" component={ProductList}/>*/}
            <Redirect from='*' to='/home/404'/>
        </Switch>;
    }
}
