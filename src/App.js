import './App.css';
import Scoreboard from './Scoreboard.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    // Pass the props to the parent Component class so React can manage them
    super(props)

    // Bind the changeName method, explained in this article:
    // https://ponyfoo.com/articles/binding-methods-to-class-instance-objects)
    this.updatePlayerNames = this.updatePlayerNames.bind(this);
    
    // Set the initial state with undefined names
    this.state = {
      names: {
        playerOne: undefined,
        playerTwo: undefined
      }
    }
  }

  /**
   * 
   * Updates the app state with predefined names. This is invoked when
   * the "Update Names" button is pressed.
   * 
   * @param {*} event - Not used yet, sorry, Matt is as lazy as w3schools.com :-D
   */
  updatePlayerNames(event) {
    // Sets the names in the App state so the Scoreboard can render them
    this.setState({
      names: {
        playerOne: "Matt",
        playerTwo: "John"
      }
    })
  }

  /**
   * 
   * Renders the following components:
   *   1) The Scoreboard (in Scoreboard.js) which gets player names from the App state
   *   2) The "Update Names" button which invokes the updatePlayerNames method
   * 
   * @returns the rendered components
   */
  render() {
    return (
      <div className="App">
        <Scoreboard names={this.state.names} />
        <button onClick={this.updatePlayerNames}>Update Names</button>
      </div>
    );
  }
}

export default App;
