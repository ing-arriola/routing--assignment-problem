import React from "react";
import Courses from "./Courses/Courses";
import Users from "./Users/Users";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";

const Academy = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/courses" component={Courses} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  );
};

export default Academy;
