import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login/index";
import Chat from "./components/Chat/index.js";

const App = () => (
  <Router>
    <Route path="/" exact component={Login}></Route>
    <Route path="/chat" exact component={Chat}></Route>
  </Router>
);

export default App;
