import * as React from "react";
import { useForm } from "react-hook-form";
import {
  Avatar,
  Button,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
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
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="div" sx={{ mt: 3 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Grid container spacing={2} columns={12} sx={{ mt: 2 }}>
                  <Grid item xs={6}>
                    <RenderInput
                      rules={{
                        required: "First name is required",
                        minLength: 6,
                      }}
                      required
                      sm={6}
                      name="name"
                      label="First Name"
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <RenderInput
                      rules={{ required: "Last name is required" }}
                      required
                      sm={6}
                      name="lastName"
                      label="Last Name"
                      control={control}
                    />
                  </Grid>
                </Grid>
              </Box>
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
                sx={{ width: 400, maxWidth: "100%" }}
                name="password"
                required
                label="Password"
                type="password"
                control={control}
              />

              <Button
                type="submit"
                sx={{ width: 400, maxWidth: "100%", mt: 3 }}
                variant="contained"
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid sx={{ mt: 2 }} item>
                  <Link href="/login" variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} companyname="Avatalk" />
        </Container>
      </form>
    </Grid>
  );
}
