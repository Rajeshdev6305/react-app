import React, { Component } from 'react';
import './toggleswitch.css'; 

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOn: false
    };
  }

  toggleSwitch = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }

  render() {
    return (
      <div className="toggle-container">
        <button 
          onClick={this.toggleSwitch} 
          className={this.state.isOn ? 'on' : 'off'}>
          <span>{this.state.isOn ? 'Switch Off' : 'Switch On'}</span>
        </button>

        <p>The button is {this.state.isOn ? 'On' : 'Off'}</p>
      </div>
    );
  }
}

export default ToggleButton;
