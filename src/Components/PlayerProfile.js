import React from 'react';
import logo from '../logo.svg'
import playerData from "../data/playerData.json"
import playerInfoData from "../data/playerInfoData.json"
import './PlayerProfile.css';
import teamData from "../data/teamData.json"
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Typing from 'react-typing-animation'

class PlayerProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      teamInfo: teamData,
      dataLoaded: false,
      playerInfo: playerInfoData,
      searchedName: "",
      searchedPlayerInfo: [],
      defaultImgLink: "",
      show: false

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStats = this.handleStats.bind(this)
  }



  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit(event) {
    for (var i = 0; i < this.state.playerInfo.length; i++){
      var fullName = (this.state.playerInfo[i].firstName + " " + this.state.playerInfo[i].lastName).toLowerCase()
      var searchedNameLC = this.state.searchedName.toLowerCase()
      if (searchedNameLC === fullName) {
          this.setState({
            [event.target.name]: this.state.playerInfo[i]
          })
      }
    }
    this.updateShow(this.state)
  }

  updateShow() {
    this.state.show = true
    console.log(this.state.show)
  }

  handleStats(props) {


    let teamId = this.state.searchedPlayerInfo.teamId
    for (var i = 0; i < this.state.teamInfo.length; i++){
      if (this.state.teamInfo[i].teamId == teamId) {
          var team = this.state.teamInfo[i].teamName
      }
    }
    let playerName = this.state.searchedName
    let activeStatus = this.state.searchedPlayerInfo.isActive ? "Yes" : "No"
    var firstName = this.state.searchedPlayerInfo.firstName
    var lastName = this.state.searchedPlayerInfo.lastName+ "/"
    var baseLink = "https://nba-players.herokuapp.com/players/"
    var fullImgLink = baseLink + lastName + firstName
    var defaultImgLink = "https://viterbicareers.usc.edu/wp-content/uploads/2018/06/NBA-logo.jpg"
    if (this.state.searchedPlayerInfo.nbaDebutYear === '2018' ) {
      var link = defaultImgLink
    } else if (this.state.searchedPlayerInfo.nbaDebutYear === '2019'){
      var link = defaultImgLink
    } else {
      var link = fullImgLink
    }

    return (
      <div className="nba-app">

          <div className="stats">
            <img src={link}/>
            <p> Height: {this.state.searchedPlayerInfo.heightFeet}&apos; {this.state.searchedPlayerInfo.heightInches}&apos;&apos; </p>
            <p> Weight: {this.state.searchedPlayerInfo.weightPounds}lbs </p>
            <p> Position: {this.state.searchedPlayerInfo.pos} </p>
            <p> Jersey Number: #{this.state.searchedPlayerInfo.jersey} </p>
            <p> Active: {activeStatus} </p>
            <p> Team: {team} </p>
            <p> Debut Year: {this.state.searchedPlayerInfo.nbaDebutYear} </p>
          </div>
      </div>
    );
  }

  render() {
    if (this.state.show === true) {
      return (
        <div className="nba-app">
        <div className = "back">
        <Link to="/">
          <button type="button">
            Back to Home
          </button>
        </Link>
        </div>
        <center>
            <input
              type= "text"
              name="searchedName"
              value={this.state.searchedName}
              onChange={this.handleChange}
              placeholder="Search Name"
              />
            <button
              onClick= {this.handleSubmit}
              name= "searchedPlayerInfo"
              show= "show"
              update= {true}
              value= {this.state.searchedName}>
              Submit
            </button>

            <h1> {this.state.searchedPlayerInfo.firstName} {this.state.searchedPlayerInfo.lastName} </h1>
          </center>
        {this.handleStats()}
        </div>
      );
    } else {
      return (
        <div>
        <div className = "back">
        <Link to="/">
          <button type="button">
            Back to Home
          </button>
        </Link>
        </div>
        <center>
            <input
              type= "text"
              name="searchedName"
              value={this.state.searchedName}
              onChange={this.handleChange}
              placeholder="Search Name"
              />
            <button
              onClick= {this.handleSubmit}
              name= "searchedPlayerInfo"
              value= {this.state.searchedName}>
              Submit
            </button>
          </center>
          <div className = "default">
          <center>
          <img src={require('../images/jordan.gif')}/>
          <Typing speed={50}>
					<h3> Enter Name for stats on a specified player </h3>
					</Typing>
          </center>
          </div>
        </div>
      )
    }
  }

}

export default PlayerProfile;
