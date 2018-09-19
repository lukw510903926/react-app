import React, {Component} from "react";
import Home from './components/Home'
import Login from './components/Login'
import ReduxIndex from '@/components/redux/ReduxIndex'

import {Route, HashRouter as Router,Redirect} from "react-router-dom";

export default class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/redux/index' component={ReduxIndex}/>
                        <Route exact path="/" render={() => <Redirect to="/home/form"/>}/>
                    </div>
                </Router>
            </div>
        )
    }
}
