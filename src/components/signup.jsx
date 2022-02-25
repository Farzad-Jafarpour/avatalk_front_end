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
    name: Joi.string().min(5).max(25).required().label("Name"),
    lastName: Joi.string().min(5).max(25).required().label("Lastname"),
    nationalCode: Joi.string()
      .min(10)
      .max(10)
      .required()
      .label("National code"),
    password: Joi.string().min(5).max(255).required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.user, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user, errors });
  };
  render() {
    const { user, errors } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            value={user.name}
            label="Name"
            onChange={this.handleChange}
            error={errors.name}
          />
          <Input
            name="lastName"
            value={user.lastName}
            label="Last Name"
            onChange={this.handleChange}
            error={errors.lastName}
          />
          <Input
            name="nationalCode"
            value={user.nationalCode}
            label="National Code"
            onChange={this.handleChange}
            error={errors.nationalCode}
          />
          <Input
            name="password"
            value={user.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
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
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
