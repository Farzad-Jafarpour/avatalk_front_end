import { useForm, Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";

export default function RenderInput({
  name,
  label,
  fullWidth,
  validate,
  ...rest
}) {
  return (
    <Controller
      {...rest}
      name={name}
      validate
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Grid item xs={12} {...rest}>
          <TextField
            {...rest}
            label={label}
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            fullWidth
            helperText={error ? error.message : null}
          />
        </Grid>
      )}
    />
  );
}
