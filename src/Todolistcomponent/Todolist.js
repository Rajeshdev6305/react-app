import React, { Component } from "react";
import './Todolist.css';


class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      list: [],
      isEditing: false,
      editIndex: null,
    };
  }

  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { todo, list, isEditing, editIndex } = this.state;

    if (todo.trim() === "") {
      alert("Please enter a valid todo item.");
      return;
    }

    if (isEditing) {
      const updatedList = list.map((item, index) =>
        index === editIndex ? todo : item
      );
      this.setState({
        list: updatedList,
        todo: "",
        isEditing: false,
        editIndex: null,
      });
    } else {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.todo],
        todo: "",
      }));
    }
  };

  handleEdit = (index) => {
    this.setState({
      todo: this.state.list[index],
      isEditing: true,
      editIndex: index,
    });
  };

  handleDelete = (index) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div className="todolist-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            id="todo"
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="Enter a todo"
          />
          <input
            type="submit"
            value={this.state.isEditing ? "Update" : "Add"}
          />
        </form>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleEdit(index)}>EDIT</button>
              <button onClick={() => this.handleDelete(index)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todolist;
