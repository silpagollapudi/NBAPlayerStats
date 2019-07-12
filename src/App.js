import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PlayerProfile from "./Components/PlayerProfile"
import WelcomeScreen from "./Components/WelcomeScreen"

function App() {
  return (
    <div className = "nba-app">
      <WelcomeScreen />
    </div>

  );
}

export default App;
