import React from 'react';
import './App.css';
import homeRoute from './components/pages/routes/homeRoute';
import Navbar from './components/Navbar/navbar';
import Jumbotron from './components/Jumbotron/jumbotron';
import { BrowserRouter, Route } from "react-router-dom";
import libraryRoute from './components/pages/routes/libraryRoute';
import Background from './images/white-waves.png'
const myBackgroung = {
  backgroundImage: "url("+Background+")",
}
function App() {
  return (
    <BrowserRouter>
    <div className="App" style= {myBackgroung}>
      <Navbar/>
      <Jumbotron/>
      <Route exact path = '/' component= {homeRoute}/>
      <Route exact path = '/search' component= {homeRoute}/>
      <Route path = '/library' compenent= {libraryRoute}/>
    </div>
    </BrowserRouter>

  );
}

export default App;
