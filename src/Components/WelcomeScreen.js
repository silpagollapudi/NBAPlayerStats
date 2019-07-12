import React from 'react'
import './WelcomeScreen.css';

class WelcomeScreen extends React.Component {
  constructor() {
    super()
    this.state={
      showComponent: false,
    }
    this.handleEnterClick = this.handleEnterClick.bind(this)
  }

  handleEnterClick() {
    this.setState({
      showComponent: true,
    });
  }
  render() {
    return(
      <div className= "welcome">
      <h1> NBA Player Search </h1>
      <center>
      <button
        onClick= {this.handleEnterClick}>
        Enter Here
      </button>
      </center>

      </div>
    )
  }
}

export default WelcomeScreen;
