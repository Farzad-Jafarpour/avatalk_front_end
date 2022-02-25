import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../common/input";
import Form from "./../common/form";

class SignUp extends Form {
  state = {
    data: {
      name: "",
      lastName: "",
      nationalCode: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    name: Joi.string().min(5).max(25).required().label("Name"),
    lastName: Joi.string().min(5).max(25).required().label("Lastname"),
    nationalCode: Joi.string()
      .min(10)
      .max(10)
      .required()
      .label("National code"),
    password: Joi.string().min(5).max(255).required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderInput("nationalCode", "National code")}
          {this.renderInput("password", "Password")}
          {this.renderCheckOut()}
          {this.renderButton("Sign Up")}
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
