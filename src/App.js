import React, { Component } from 'react';
import Start from "./components/start";
import Playerid from './components/playerid';
import Top10 from './components/top10';
import Home from './components/home';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nba/game" element={<Start/>} />
          <Route path="/nba/rank" element={<Top10 />} />
          <Route path="/nba/player/:id" element={<Playerid />} />
        </Routes>
      </Router>
    );
    }
  }
export default App;
