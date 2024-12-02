import React, { Component } from "react";
import "./UserForm.css" 

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      submittedData: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, password } = this.state;
    this.setState({
      submittedData: { firstName, lastName, password },
      firstName: "",
      lastName: "",
      password: "",
    });
  };

  render() {
    const { firstName, lastName, password, submittedData } = this.state;

    return (
      <div className="container">
        <h1 className="title">User Form</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="inputGroup">
            <label className="label">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              className="input"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="inputGroup">
            <label className="label">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              className="input"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="inputGroup">
            <label className="label">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="input"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="result">
            <h3>Submitted Data:</h3>
            <p>
              <strong>First Name:</strong> {submittedData.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {submittedData.lastName}
            </p>
            <p>
              <strong>Password:</strong> {submittedData.password}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default UserForm;
