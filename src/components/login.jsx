import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { login } from "./../services/authService";

class Login extends Form {
  state = {
    data: {
      nationalCode: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    nationalCode: Joi.string()
      .min(10)
      .max(10)
      .required()
      .label("National code"),
    password: Joi.string().min(5).max(255).required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.nationalCode, data.password);
      localStorage.setItem("token", jwt);
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
          {this.renderInput("nationalCode", "National code")}
          {this.renderInput("password", "Password", "password")}
          {this.renderCheckOut()}
          {this.renderButton("Log in")}
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
