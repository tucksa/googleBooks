import React from 'react';
import './App.css';
import Home from './components/pages/search';
import Navbar from './components/Navbar/navbar';
import Jumbotron from './components/Jumbotron/jumbotron';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Library from './components/pages/library';
import Background from './images/white-waves.png'
const myBackgroung = {
  backgroundImage: "url("+Background+")",
}
function App() {
  return (
    <Router>
    <div className="App" style= {myBackgroung}>
      <Navbar/>
      <Jumbotron/>
      <Route exact path = '/' component= {Home}/>
      <Route exact path = '/search' component= {Home}/>
      <Route path = '/library' compenent= {Library}/>
    </div>
    </Router>

  );
}

export default App;
