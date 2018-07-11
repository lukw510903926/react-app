import React, {Component} from "react";
import Home from './components/Home'
import Login from './components/Login'
import {Route, HashRouter as Router,Redirect} from "react-router-dom";

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path='/login' component={Login}/>
                        <Route path='/home' component={Home}/>
                        <Route exact path="/" render={() => <Redirect to="/home/form"/>}/>
                    </div>
                </Router>
            </div>
        )
    }
}
