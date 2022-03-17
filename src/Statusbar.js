import React from "react";

class Statusbar extends React.Component {
  constructor(props) {
    // Pass the props to the parent Component class so React can manage them
    super(props)
  }

  /**
   * 
   * Renders the status bar
   * 
   * @returns the DOM
   */
  render() {
    return (
      <div style={{'backgroundColor':'blue'}}>
          <p>The status bar</p>
          <canvas/>
          {this.props.messages}
      </div>
    )
  }
}

export default Statusbar;