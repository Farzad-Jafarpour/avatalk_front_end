import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

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

  componentDidMount() {}

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.nationalCode = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderInput("nationalCode", "National code")}
          {this.renderInput("password", "Password", "password")}
          {this.renderCheckOut()}
          {this.renderButton("Sign Up")}
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
