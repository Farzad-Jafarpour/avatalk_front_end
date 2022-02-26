import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";
import axios from "axios";

const apiEndpoint = "http://localhost:3900/api/users";

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
    const { data } = this.state;
    const { data: user } = await axios.put(apiEndpoint, data);
    console.log(user);
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
