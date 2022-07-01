import React from "react";
import { Box, Grid } from "@mui/material";
import AdminRenderer from "../Dashboard/components/AdminList";
import CarouselRenderer from "../Dashboard/components/Carousel";
import Courses from "../Dashboard/components/Courses";

const HomePage = () => {
  return (
    <>
      <Grid container justifyContent="center">
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
