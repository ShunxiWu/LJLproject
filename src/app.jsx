import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";

import "./style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My React Firebase Login App</h1>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;