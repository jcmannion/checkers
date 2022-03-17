import './App.css';

import React from 'react';

import Scoreboard from './Scoreboard.js'
import Gameboard from './Gameboard.js'
import Statusbar from './Statusbar.js'
import Startup from './Startup.js'
import {Checkers, Player} from './Checkers.js'


function App() {
  const checkers = new Checkers()

  return (
    <div className="App">
      <Scoreboard checkers={checkers}/>
      <Statusbar />
      <Gameboard />
      <Startup />
      <button onClick={
        () => {
          checkers.updatePlayers(
            [
              new Player('Matt', 0),
              new Player('John', 0)
            ])
        }
      }>Update Names</button>
    </div>
  )
}

export default App;
