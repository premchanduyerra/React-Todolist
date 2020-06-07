import React from 'react';
import Header from "./components/Header";
import {Button} from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="container">
    
  
    <Header />
      <Router>
        <Route path="/" component={Home}>
        <Route path="/about" component={About}/>
        <Route path="/Contact" component={Contact}/>
        </Route>
      </Router>




    </div>
  );
}

export default App;
