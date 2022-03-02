import React, { Component } from "react";
import classService from "../services/classService";

class Classes extends Component {
  state = {
    classes: [
      {
        _id: "",
        numberOfSessions: "",
        students: [],
        sessions: [{ _id: "", users: [], name: "" }],
      },
    ],
  };

  async componentDidMount() {
    const { data: classes } = await classService.getClasses();
    console.log("class", classes);
    this.setState({ classes });
  }

  render() {
    return <div>{this.state.classes[0].sessions[0].name}</div>;
  }
}

export default Classes;
