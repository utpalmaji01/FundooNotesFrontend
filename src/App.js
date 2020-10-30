import "./App.css";
import React, { Component } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
