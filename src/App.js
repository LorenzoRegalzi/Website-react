import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
    </Router>
  );
}

export default App;
