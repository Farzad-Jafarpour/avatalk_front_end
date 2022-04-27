import * as React from "react";
import { useForm } from "react-hook-form";
import {
  Avatar,
  Button,
  Container,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "../common/copyright";
import RenderInput from "../common/input";
import auth from "../services/authService";

export default function Login() {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      await auth.login(data.nationalCode, data.password);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...data.errors };
        errors.nationalCode = ex.response.data;
        data.errors = errors;
      }
    }
  };

  return (
    <Grid container component="main" sx={{ height: "80vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box component="div" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <RenderInput
                  rules={{
                    required: "National code is required",
                  }}
                  fullWidth
                  name="nationalCode"
                  required
                  label="National Code"
                  control={control}
                />
                <RenderInput
                  rules={{ required: "Password is required" }}
                  fullWidth
                  name="password"
                  required
                  label="Password"
                  type="password"
                  control={control}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log in
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/signup" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} companyName="Avatalk" />
        </Container>
      </form>
    </Grid>
  );
}
