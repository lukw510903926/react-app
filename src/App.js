import React, {Component} from "react";
import Home from './components/Home'
import Login from './components/Login'
import Comment from '@/components/redux/comment/Comment'
import UserInfo from '@/components/redux/userInfo/UserInfo'

import {Route, HashRouter as Router,Redirect} from "react-router-dom";

export default class App extends Component {

    constructor(props){
        super(props);
        console.log('App :',this.props)
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/comment' component={Comment}/>
                        <Route path='/user' component={UserInfo}/>
                        <Route exact path="/" render={() => <Redirect to="/home/form"/>}/>
                    </div>
                </Router>
            </div>
        )
    }
}
