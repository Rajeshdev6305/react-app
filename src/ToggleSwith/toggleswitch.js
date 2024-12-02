import React, { Component } from 'react';

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
      <div>
        <button onClick={this.toggleSwitch}>
          {this.state.isOn ? 'Switch Off' : 'Switch On'}
        </button>

        <p>The button is {this.state.isOn ? 'On' : 'Off'}</p>
      </div>
    );
  }
}

export default ToggleButton;
