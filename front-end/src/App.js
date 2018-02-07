import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      heart: 0,
      innertext:'_',
      missClick:'_'
    }
  }

  handleClicker = () => {
    this.setState({
      heart: this.state.heart + 1
    })
  }

    handleStoreClick = () => {
      this.setState({
        innertext: 'X'
      })
  }
  
  handleMissClick = () => {
    this.setState({
      missClick: 'X'
    })
}

  render() {
    return (
      <div id="top">
      <div id="under">  
        <img src="https://image.ibb.co/mzL7Fc/clearleft.png" alt="Sweethearts" id="mainImage" onClick={this.handleClicker}/>
        <span class="caption">{this.state.heart} # OF CLICKS</span>
        </div>
        <div class="storeImage">
        <img src="https://image.ibb.co/dve35c/clear.png" alt="SweetheartStore"/>
          <div class="missYou" onClick={this.handleMissClick}>{this.state.missClick}</div>
          <div class="callMe" onClick={this.handleStoreClick}>{this.state.innertext}</div>
          <div class="kissMe" onClick={this.handleStoreClick}>{this.state.innertext}</div>
          <div class="letsGetBusy" onClick={this.handleStoreClick}>{this.state.innertext}</div>
          <div class="beMine" onClick={this.handleStoreClick}>{this.state.innertext}</div>
        </div>
      </div>
    );
  }
}

export default App;
