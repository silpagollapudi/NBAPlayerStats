import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PlayerProfile from "./Components/PlayerProfile"
import WelcomeScreen from "./Components/WelcomeScreen"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
            <Switch>
              <Route path = "/" component = {WelcomeScreen} exact/>
              <Route path = "/playerprofile" component = {PlayerProfile} />
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
