import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Sport Statistics App!</h1>
      <p className="home-text">Please select a league to view statistics:</p>
      <div className="home-button-container">
        <Link to="/nba/game">
          <button className="home-button nba-button">NBA</button>
        </Link>
        <Link to="/soccer">
          <button className="home-button soccer-button">Soccer</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;