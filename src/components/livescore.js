// import React, { useEffect, useState } from 'react';
// //import fetch from 'isomorphic-fetch';

// //const fetch = require('node-fetch');

// function LiveScore() {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     const url = 'https://free-nba.p.rapidapi.com/games?page=0&per_page=150&Seasons=2022';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '6ad135b148mshcbb6c62eea5aab9p18d47bjsnd76fa01aeb9e',
//         'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
//       }
//     };
//     fetch(url, options)
//       .then(res => res.json())
//       .then(json => setGames(json.data))
//       .catch(err => console.error('error:' + err));
//   }, []);



//   return (
//     <div>
//       <h2 className="center"> Live Scores</h2>
//       <table className = "center">
//         <tr>
//           <th>Home Team</th>
//           <th>Score</th>
//           <th>Away Team</th>
//         </tr>
//         {games.map(game => (
//           <tr>
//             <td>{game.home_team.full_name}</td>
//             <td>{game.home_team_score}</td>
//             <div> - </div>
//             <td>{game.visitor_team_score}</td>
//             <td>{game.visitor_team.full_name}</td>
           

//           </tr>
//         ))}
//       </table>
//     </div>
//   )
//   }
//   export default LiveScore;