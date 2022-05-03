import * as React from "react";
import { useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Edit from "@material-ui/icons/Edit";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../common/copyright";
import RenderInput from "../common/input";
import * as userService from "../services/userService";
import auth from "../services/authService";

export default function EditUser() {
  // const [error, setError] = useState({});
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await userService.register(data);
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
              <Edit />
            </Avatar>
            {/* <Typography component="h1" variant="h5">
              Add
            </Typography> */}
            <Box component="div" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <RenderInput
                  rules={{ required: "First name is required" }}
                  sm={6}
                  name="name"
                  label="First Name"
                  value="ahsadasbar"
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
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2} columns={16} sx={{ mt: 2, ml: 5 }}>
              <Grid item xs={8}>
                <Button sx={{ ml: 0 }} type="submit" variant="contained">
                  Edit the user
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Button
                  sx={{ ml: 3 }}
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
