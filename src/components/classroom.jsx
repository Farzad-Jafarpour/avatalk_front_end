import React, { useCallback } from "react";
import Joi from "joi-browser";
import Form from "./../common/form";
import classService from "../services/classService";

class Classroom extends Form {
  state = {
    data: { numberOfSessions: "", name: "" },
    errors: {},
  };
  schema = {
    numberOfSessions: Joi.string(),
    name: Joi.string(),
  };

  doSubmit = useCallback(async () => {
    const { data } = this.state;

    data.sessions = [];

    for (let i = 0; i < data.numberOfSessions; i++) {
      const { data: sessions } = await classService.generateSessions();
      data.sessions = [sessions, ...data.sessions];
    }

    await classService.createClass(data);
  });

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("numberOfSessions", "Number of sessions")}
          {this.renderInput("name", "Name of the class")}
          {this.renderButton("Create Class")}
        </form>
      </React.Fragment>
    );
  }
}

export default Classroom;
