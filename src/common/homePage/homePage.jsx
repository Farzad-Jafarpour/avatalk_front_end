import React from "react";
import { Box, Grid } from "@mui/material";
import AdminRenderer from "../../components/Dashboard/components/AdminList";
import CarouselRenderer from "../../components/Dashboard/components/Carousel";
import Courses from "../../components/Dashboard/components/Courses";

const HomePage = () => {
  return (
    <>
      <Grid container justifyContent="center" sx={{ width: "78vw" }}>
        <Grid item xs={12} md={8}>
          <Courses />
        </Grid>
        <Grid item xs={12} md={4}>
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
