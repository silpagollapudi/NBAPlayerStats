import React from 'react'
import './WelcomeScreen.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class WelcomeScreen extends React.Component {
  constructor() {
    super()
    this.state={
      showComponent: false,
    }
  }

  render() {
    return(
      <div className= "welcome">
      <h1> NBA Player Search </h1>
      <center>
      <Link to="/playerprofile">
        <button type="button">
          Enter Here
        </button>
      </Link>
      </center>

      </div>
    )
  }
}

export default WelcomeScreen;
