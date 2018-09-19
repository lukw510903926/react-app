import React from 'react'
import LocalStore from "@/util/LocalStore";
import Constants from "@/util/Constants";
import {Redirect} from "react-router-dom";

export default (WrappedComponent) => {

    return class Permission extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            let hasLogin = !!LocalStore.getItem(Constants.LOGIN_USER);
            if (!hasLogin) {
                return <Redirect {...this.props} to={{pathname: "/login", state: {from: this.props.location}}}/>;
            }
            return <WrappedComponent/>
        }
    }
}