import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ListGroup extends Component {
  render() {
    return (
      <ul class="nav flex-column">
        <li class="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/classes">
            List of the classes
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/students">
            List of the students
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default ListGroup;
