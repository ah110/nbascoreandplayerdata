import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Sport Statistics App!</h1>
      <p>Please select a league to view statistics:</p>
      <div>
        <Link to="/nba/game">
          <button>NBA</button>
        </Link>
        <Link to="/soccer">
          <button>Soccer</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;