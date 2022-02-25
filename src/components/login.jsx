import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

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

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("nationalCode", "National code")}
          {this.renderInput("password", "Password")}
          {this.renderCheckOut()}
          {this.renderButton("Sign Up")}
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
