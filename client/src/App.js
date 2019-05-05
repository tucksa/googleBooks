import React from 'react';
import './App.css';
import homeRoute from './components/pages/routes/homeRoute';
import libraryRoute from './components/pages/routes/libraryRoute';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Background from './images/white-waves.png'
const myBackgroung = {
  backgroundImage: "url("+Background+")",
}
function App() {
  return (
    <BrowserRouter>
    <div className="App" style= {myBackgroung}>
      <Navbar/>
      <Route exact path = '/' component= {homeRoute}/>
      <Route exact path = '/search' component= {homeRoute}/>
      <Route exact path = '/library' compenent= {libraryRoute}/>
    </div>
    </BrowserRouter>

  );
}

export default App;
