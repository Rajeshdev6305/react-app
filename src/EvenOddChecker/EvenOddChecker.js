import React, { Component } from 'react';
import './EvenOddChecker.css'; 

class EvenOddChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      result1: '',
      result2: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.checkEvenOdd);
  };

  checkEvenOdd = () => {
    const { number1, number2 } = this.state;
    this.setState({
      result1: this.checkNumberEvenOdd(number1),
      result2: this.checkNumberEvenOdd(number2),
    });
  };

  checkNumberEvenOdd = (num) => {
    if (num === '') return '';
    return num % 2 === 0 ? 'Even' : 'Odd';
  };

  render() {
    const { number1, number2, result1, result2 } = this.state;

    return (
      <div className="container">
        <h2>Even or Odd Checker</h2>
        <div className="input-group">
          <label className="label">Enter Number 1:</label>
          <input
            type="number"
            name="number1"
            value={number1}
            onChange={this.handleChange}
            className="input"
          />
          <p className={`result ${result1.toLowerCase()}`}>{result1 && `Number 1 is ${result1}`}</p>
        </div>

        <div className="input-group">
          <label className="label">Enter Number 2:</label>
          <input
            type="number"
            name="number2"
            value={number2}
            onChange={this.handleChange}
            className="input"
          />
          <p className={`result ${result2.toLowerCase()}`}>{result2 && `Number 2 is ${result2}`}</p>
        </div>
      </div>
    );
  }
}

export default EvenOddChecker;
