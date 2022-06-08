import * as React from "react";
import { useForm } from "react-hook-form";
import { Avatar, Button, Grid, Box, Container } from "@mui/material";
import { AddBox, LockOutlined } from "@mui/icons-material";
import Copyright from "../common/copyright";
import RenderInput from "../common/input";
import * as userService from "../services/userService";

export default function AddUser() {
  // const [error, setError] = useState({});
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await userService.register(data);
      console.log(response);
      window.location = "/users";
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
            <Avatar sx={{ m: 1, bgcolor: "primary" }}>
              <AddBox />
            </Avatar>
            {/* <Typography component="h1" variant="h5">
              Add
            </Typography> */}
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
                      rules={{ required: "First name is required" }}
                      validate
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
                      validate
                      required
                      sm={6}
                      name="lastName"
                      label="Last Name"
                      control={control}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Grid container spacing={2}>
                <RenderInput
                  rules={{
                    required: "National code is required",
                  }}
                  validate
                  required
                  sx={{ width: 400, maxWidth: "100%" }}
                  name="nationalCode"
                  label="National Code"
                  control={control}
                />
                <RenderInput
                  rules={{ required: "Password is required" }}
                  validate
                  sx={{ width: 400, maxWidth: "100%" }}
                  name="password"
                  required
                  label="Password"
                  type="password"
                  control={control}
                />
              </Grid>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2} columns={16} sx={{ mt: 2 }}>
              <Grid item xs={8}>
                <Button
                  sx={{ width: 500, maxWidth: "100%" }}
                  type="submit"
                  variant="contained"
                >
                  Add the user
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Button
                  sx={{ width: 500, maxWidth: "100%" }}
                  type="submit"
                  variant="contained"
                  href="/users"
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 5 }} companyname="Avatalk" />
        </Container>
      </form>
    </Grid>
  );
}
