import React, { Component } from "react";
import "./Course.css";
class Course extends Component {
  render() {
    return (
      <div className="Course">
        <h1> {this.props.name} </h1>
        <p>You selected the Course with ID:{this.props.id}</p>
      </div>
    );
  }
}

export default Course;
