import React from "react";
import "./App.css";
import Assignments from "./components/Assignments";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/assignments" component={Assignments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
