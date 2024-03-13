// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stats from './components/Stats';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/stats" component={Stats} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
