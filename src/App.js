import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import SignInPage from "./pages/signin";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
