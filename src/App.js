import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import  About  from './pages/About'
import  Home  from './pages/Home'
import MainLayout from "./layout/main_layout/MainLayout";

function App() {
  return (
    <>
      <Router>
        <MainLayout/>
        <div /* className={showNav ? "toggle-main main" : "main"} */>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/about" exact={true} component={About}/>
        </div>
      </Router>
    </>
  );
}

export default App;
