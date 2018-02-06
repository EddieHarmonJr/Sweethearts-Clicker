import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      heart: 0
    }
  }

  handleClicker = () => {
    this.setState({
      heart: this.state.heart + 1
    })
      // return (
      //   <div>
      //       <ul>
      //        <li>{this.state.heart}</li>
      //       </ul>
      //  </div>
      // )
    }
  

  render() {
    return (
      <div>
        <h1>❤️This is our Sweethearts Clicker!!!❤️</h1>
        <button onClick={this.handleClicker}>Sweetheart Goes Here</button>
        <p># OF CLICKS {this.state.heart}</p>
      </div>
    );
  }
}

export default App;
