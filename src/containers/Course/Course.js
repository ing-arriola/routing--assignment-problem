import React, { Component } from "react";
import "./Course.css";
class Course extends Component {
  render() {
    return (
      <div className="Course" onClick={this.props.clicked}>
        <h1>_COURSE_TITLE_</h1>
        <p>You selected the Course with ID: _ID_</p>
      </div>
    );
  }
}

export default Course;
