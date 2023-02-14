import React, { Component } from 'react';
import Start from "./components/start";
import Playerid from './components/playerid';
import Top10 from './components/top10';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <Router>
        <Routes>
        <Route path="/game" element={<Start/>} />
          <Route path="/" element={<Top10 />} />
          <Route path="/player/:id" element={<Playerid />} />
        </Routes>
      </Router>
    );
    }
  }
export default App;
