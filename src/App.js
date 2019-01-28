import React, { Component } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </Switch>
      </>
    );
  }
}

export default App;
