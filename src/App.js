import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './component/card'
import FancyCard from './component/fancycard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Card header="1 of 13" text="What family is the cat part of?" option1="feline" option2="mammal" option3="canine"/>
      <FancyCard header="1 of 13" text="What family is the cat part of?" option1="feline" option2="mammal" option3="canine"/>
      
    </div>
  );
}

export default App;
