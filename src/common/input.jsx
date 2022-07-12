import { Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";

export default function RenderInput({ name, label, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      validate
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Grid item xs={12}>
          <TextField
            {...rest}
            label={label}
            variant="filled"
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        </Grid>
      )}
    />
  );
}
