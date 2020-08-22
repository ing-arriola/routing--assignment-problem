import React, { Component } from "react";
import Course from "../Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
    selectedCourseId: null,
    selectedCourseTitle: null,
  };

  courseSelectedHandler = (id, title) => {
    this.setState({ selectedCourseId: id });
    this.setState({ selectedCourseTitle: title });
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <article
                className="Course"
                key={course.id}
                onClick={() =>
                  this.courseSelectedHandler(course.id, course.title)
                }
              >
                {course.title}
              </article>
            );
          })}
        </section>
        <Course
          id={this.state.selectedCourseId}
          name={this.state.selectedCourseTitle}
        />
      </div>
    );
  }
}

export default Courses;
