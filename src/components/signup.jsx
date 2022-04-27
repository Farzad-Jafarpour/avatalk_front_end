import * as React from "react";
import { useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../common/copyright";
import RenderInput from "../common/input";
import * as userService from "../services/userService";
import auth from "../services/authService";

export default function SignUp() {
  // const [error, setError] = useState({});
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await userService.register(data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...data.errors };
        errors.nationalCode = ex.response.data;
        data.errors = errors;
      }
    }
  };

  // if (error) return <Error error={error} />;

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
              Sign up
            </Typography>
            <Box component="div" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <RenderInput
                  rules={{ required: "First name is required" }}
                  sm={6}
                  name="name"
                  label="First Name"
                  control={control}
                />
                <RenderInput
                  rules={{ required: "Last name is required" }}
                  sm={6}
                  name="lastName"
                  required
                  label="Last Name"
                  control={control}
                />
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
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Log in
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
