import React from "react";
import {Route} from "react-router-dom";
import Grid from "../components/Grid";
import ReactForm from "../components/Form";

export default class ReactRoute extends Route {

    /**
     * 路由切换时权限认证
     * @param nextProps
     * @param nextContext
     */
    componentWillReceiveProps(nextProps, nextContext) {
        // console.info(nextContext.router.route.location.pathname)
        super.componentWillReceiveProps(nextProps, nextContext);
        // console.info('componentWillReceiveProps -----------------------')
    }

    routes = {
        path: '/',
        component: ReactForm,
        childRoutes: [
            { path: 'form', component: ReactForm },
            { path: 'table', component: Grid },
        ]
    }

    render() {
        return <div>
            <Route exact path="/" component={Grid}/>
            <Route path="/form" component={ReactForm}/>
            <Route path="/table" component={Grid}/>
        </div>;
    }
}
