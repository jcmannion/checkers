import React from "react";

class Scoreboard extends React.Component {
  constructor(props) {
    // Pass the props to the parent Component class so React can manage them
    super(props)
  }

  /**
   * 
   * Renders player one and player two names based on the props received from App
   * 
   * @returns 
   */
  render() {
    return (
      <div>
        <h1>Player One:</h1>
        <div>
          {this.props.names.playerOne}
        </div>
        <h1>Player Two:</h1>
        <div>
          {this.props.names.playerTwo}
        </div>
      </div>
    )
  }
}

export default Scoreboard;