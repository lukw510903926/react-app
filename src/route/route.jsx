import React from "react";
import { Route } from "react-router-dom";
import Grid from "../components/Grid";
import Form from "../components/Form";

export default class ReactRoute extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Route exact path="/" component={Grid}/>
      <Route path="/form" component={Form}/>
      <Route path="/table" component={Grid}/>
    </div>;
  }
}