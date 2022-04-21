import React, { useState, useEffect, Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

// function Form(props) {
//   const [formData, setFormData] = useState({});
//   const [errors, setFormErrors] = useState({});

//   validate = () => {
//     const options = { abortEarly: false };
//     const { error } = Joi.validate(formData, schema, options);
//     if (!error) return null;

//     for (let item of error.details) errors[item.path[0]] = item.message;
//     return errors;
//   };
//   validateProperty = ({ name, value }) => {
//     const obj = { [name]: value };
//     const schema = { [name]: schema[name] };
//     const { error } = Joi.validate(obj, schema);
//     return error ? error.details[0].message : null;
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = validate();
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     doSubmit();
//   };
//   handleChange = ({ currentTarget: input }) => {
//     const errors = { ...errors };
//     const errorMessage = validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const data = { ...formData };
//     data[input.name] = input.value;
//     this.setState({ data, errors });
//   };

//   renderButton = (label) => {
//     return (
//       <button disabled={validate()} type="submit" className="btn btn-primary">
//         {label}
//       </button>
//     );
//   };

//   renderInput = (name, label, type) => {
//     // const { data, errors } = this.state;
//     return (
//       <Input
//         type={type}
//         name={name}
//         value={data[name]}
//         label={label}
//         onChange={handleChange}
//         error={errors[name]}
//       />
//     );
//   };
//   renderCheckOut = () => {
//     return (
//       <div className="mb-3 form-check">
//         <input
//           type="checkbox"
//           className="form-check-input"
//           id="exampleCheck1"
//         />
//         <label className="form-check-label" htmlFor="exampleCheck1">
//           Check me out
//         </label>
//       </div>
//     );
//   };
// }

// export default Form;

class Form extends Component {
  state = { data: {}, errors: {} };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
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

    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type) {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderCheckOut() {
    return (
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
    );
  }
}

export default Form;
