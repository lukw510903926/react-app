import React from "react";
import { Route } from "react-router-dom";
import Grid from "../Grid";
import Form from "../Form";

export default class ReactRoute extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return <div>
      <Route exact path="/" component={Grid}/>
      <Route path="/form" component={Form}/>
      <Route path="/table" component={Grid}/>
    </div>;
  }
}
