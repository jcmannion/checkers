import React from "react"
import {observer} from 'mobx-react-lite';

const Scoreboard = observer(({checkers}) => {
  console.log(`${JSON.stringify(checkers)}`)
  return (
    <div>
      <div>Player one: {checkers.playerOne.name}</div>
      <div>Player two: {checkers.playerTwo.name}</div>
    </div>
  )
});

export default Scoreboard