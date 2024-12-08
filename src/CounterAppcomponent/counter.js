import React, { Component } from "react";
import "./Counter.css" 

class Counter extends Component {
  constructor() {
    super();
    this.state = { Counter: 0 };
  }

  handleEvent = (change) => {
    this.setState((prevState) => ({
      Counter: prevState.Counter + change,
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-value">{this.state.Counter}</h1>
        <div className="button-container">
          <button
            className="counter-button increment"
            onClick={() => this.handleEvent(1)}
          >
            +1
          </button>
          <button
            className="counter-button decrement"
            onClick={() => this.handleEvent(-1)}
          >
            -1
          </button>
          <button
            className="counter-button increment"
            onClick={() => this.handleEvent(2)}
          >
            +2
          </button>
          <button
            className="counter-button decrement"
            onClick={() => this.handleEvent(-2)}
          >
            -2
          </button>
          <button
            className="counter-button increment"
            onClick={() => this.handleEvent(5)}
          >
            +5
          </button>
          <button
            className="counter-button decrement"
            onClick={() => this.handleEvent(-5)}
          >
            -5
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
