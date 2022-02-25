import React from "react";

const Input = ({ name, label, value, error, onChange, ...rest }) => {
  return (
    <div className="form-floating form-group mb-3">
      <input
        {...rest}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        placeholder={name}
        className="form-control"
      />
      <label htmlFor={name}>{label}</label>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
