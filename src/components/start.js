import React, { Component } from 'react';
import Game from "./Game";
import { Link } from "react-router-dom";


class Start extends Component {
  

  render() {
    return (
      <div className="NBA-App">
        <nav className="nba-nav">
       
          <h3 className="nba-logo">Basketball Score</h3>
          <div className="nba-nav-btns">
  
  <button className="nba-nav-btn">
  <Link to={{ pathname: "/" }}>Home</Link>
</button>
<button className="nba-nav-btn">
  <Link to={{ pathname: "/nba/Player/0" }}>Player Search</Link>
</button>
<button className="nba-nav-btn">
  <Link to={{ pathname: "/nba/rank" }}>Player Rank</Link>
</button>

</div>
        </nav>

        {<Game />}
        
      </div>
    );
  }
}

export default Start;
