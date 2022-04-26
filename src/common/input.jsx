// import React from "react";

// const Input = ({ name, label, value, error, onChange, ...rest }) => {
//   return (
//     <div className="form-floating form-group mb-3">
//       <input
//         {...rest}
//         name={name}
//         value={value}
//         onChange={onChange}
//         id={name}
//         placeholder={name}
//         className="form-control"
//       />
//       <label htmlFor={name}>{label}</label>
//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// };

// export default Input;

import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function RenderInput({ name, label, ...rest }) {
  return (
    <Controller
      {...rest}
      name={name}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Grid item xs={12} {...rest}>
          <TextField
            {...rest}
            validate
            label={label}
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        </Grid>
      )}
    />
  );
}
