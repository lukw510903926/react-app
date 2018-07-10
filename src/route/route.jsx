import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Grid from "../components/Grid";
import ReactForm from "../components/Form";
import Login from "../components/Login";
import ProductList from '../components/page/Product/ProductList'
import Product from '../components/page/Product/Product'

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

  render() {
    return <Switch>
      <Route path="/login" component={Login}/>
      <Route exact path="/" render={() => <Redirect to="/form"/>}/>
      <Route path="/form" component={ReactForm}/>
      <Route path="/table" component={Grid}/>
      <Route path="/product" component={Product}/>
      <Route path="/productlist" component={ProductList}/>
    </Switch>;
  }
}
