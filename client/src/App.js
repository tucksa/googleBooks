import React from 'react';
import './App.css';
import Home from './components/Search/search';
import Navbar from './components/Navbar/navbar';
import Jumbotron from './components/Jumbotron/jumbotron';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from './components/Library/library';
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
      <Route exact path = '/library' compenent= {Saved}/>
    </div>
    </Router>

  );
}

export default App;
