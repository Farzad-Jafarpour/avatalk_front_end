import React from "react";
import { Box, Grid, makeStyles, Paper } from "@mui/material";
import AdminRenderer from "../Dashboard/components/AdminList";
import CarouselRenderer from "../Dashboard/components/Carousel";
import Courses from "../Dashboard/components/Courses";
import Appbar from "components/homePage/components/Appbar";

const HomePage = () => {
  return (
    <>
      <Appbar />
      <Paper sx={{ background: "#E5E1E1", p: 0 }}>
        <Grid container sx={{ mt: "40px", maxWidth: "lg" }} spacing={1}>
          <Grid item xs={12} md={8}>
            <Courses />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Grid
              container
              sx={{
                justifyContent: "center",
              }}
              spacing={0.25}
            >
              <Grid item>
                <AdminRenderer />
              </Grid>
              <Grid item>
                <CarouselRenderer />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default HomePage;
