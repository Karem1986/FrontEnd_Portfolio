import React from 'react';
import logo from "./logo.jpg"
import NavBar from "./components/Navigation"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1><img src={logo} alt="Polshop" style={{ width: 300, display: 'inline' }}
      ></img>POLshop.com: where your dreams come true!</h1>

    </div>
  );
}

export default App;
