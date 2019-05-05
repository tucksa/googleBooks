import React from 'react';
import './App.css';
import Search from './components/Search/search';
import Library from './components/Library/library';
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
      <Route exact path = '/' component= {Search}/>
      <Route exact path = '/search' component= {Search}/>
      <Route exact path = '/library' compenent= {Library}/>
    </div>
    </BrowserRouter>

  );
}

export default App;
