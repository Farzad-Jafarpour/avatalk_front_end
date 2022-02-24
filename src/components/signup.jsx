import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../common/input";

class SignUp extends Component {
  state = {
    user: {
      name: "",
      lastName: "",
      nationalCode: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    name: Joi.string().min(5).max(25).required(),
    lastName: Joi.string().min(5).max(25).required(),
    nationalCode: Joi.string().min(10).max(10).required(),
    password: Joi.string().min(5).max(255).required(),
  };
  validate = () => {
    const result = Joi.validate(this.state.user, this.schema);
    console.log(result);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            value={user.name}
            label="Name"
            onChange={this.handleChange}
          />
          <Input
            name="lastName"
            value={user.lastName}
            label="Last Name"
            onChange={this.handleChange}
          />
          <Input
            name="nationalCode"
            value={user.nationalCode}
            label="National Code"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={user.password}
            label="Password"
            onChange={this.handleChange}
          />

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
