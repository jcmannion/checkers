import React from "react";

class Gameboard extends React.Component {
  constructor(props) {
    // Pass the props to the parent Component class so React can manage them
    super(props)
  }

  /**
   * 
   * Renders the game canvas
   * 
   * @returns the DOM
   */
  render() {
    return (
      <div style={{'backgroundColor':'red'}}>
          <p>The game canvas</p>
          <canvas
            height="20"
            width="20"
            style={{'backgroundColor':'white'}}
            onClick={() => window.alert('hey')}/>
      </div>
    )
  }
}

export default Gameboard;