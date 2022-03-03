import React, { Component } from "react";
import classService from "../services/classService";
// import SearchBox from "../common/searchBox";

class Classes extends Component {
  state = {
    classes: [
      {
        _id: "",
        numberOfSessions: "",
        students: [],
        sessions: [{ _id: "", users: [] }],
      },
    ],
  };

  async componentDidMount() {
    const { data } = await classService.getClasses();
    this.setState({ classes: data });
  }

  render() {
    // const { sessions } = this.state.classes[0];
    // console.log(this.state.classes[0].sessions[0]._id);
    return (
      <React.Fragment>
        <div>{sessions[0]._id}</div>
        {/* <div>{sessions[1]._id}</div>; */}
      </React.Fragment>
    );
  }
}

export default Classes;
