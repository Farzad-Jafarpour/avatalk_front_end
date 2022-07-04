import React from "react";
import { Box, Grid, makeStyles } from "@mui/material";
import AdminRenderer from "../Dashboard/components/AdminList";
import CarouselRenderer from "../Dashboard/components/Carousel";
import Courses from "../Dashboard/components/Courses";
import Appbar from "components/homePage/components/Appbar";

const HomePage = () => {
  return (
    <>
      <Appbar />
      <Grid container justifyContent="center" sx={{ mt: "40px" }}>
        <Grid item xs={12} md={8}>
          <Courses />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Box
            sx={{
              mt: { xs: 10, md: 0 },
            }}
          >
            <AdminRenderer />
            <Box>
              <CarouselRenderer />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
