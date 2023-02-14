import React, { Component } from 'react';
import Game from "./Game";
import { Link } from "react-router-dom";


class Start extends Component {
  
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideGame: true,
    };
  }

  toggleBtn = (state) => {
    let classes = "nba-nav-btn ";
    if (state === false) return classes;
    return classes + "selected";
  };

  render() {
    const {  showHideGame } = this.state;
    return (
      <div className="NBA-App">
        <nav className="nba-nav">
       
          <h3 className="nba-logo">Basketball Score</h3>
          <div className="nba-nav-btns">
  <button className={this.toggleBtn(this.state.showHideGame)} onClick={() => this.hideComponent("showHideGame")}>
    Games
  </button>
  <button className={`nba-nav-btn ${this.state.showHideGame ? "" : "active"}`}>
  <Link to={{ pathname: "/Player/0" }}>Player Search</Link>
</button>
  <button className={`nba-nav-btn ${this.state.showHideGame ? "" : "active"}`}>
  <Link to={{ pathname: "/" }}>Player Rank</Link>
</button>

</div>
        </nav>

        {showHideGame && <Game />}
        
      </div>
    );
  }
}

export default Start;
