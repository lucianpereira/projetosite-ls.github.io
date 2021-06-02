import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/components/NavBar";
import Footer from "./components/components/Footer";
import HomePage from "./components/pages/HomePage";
import Contact from "./components/pages/Contact";
import Releases from "./components/pages/Releases"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/releases" exact component={Releases} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
