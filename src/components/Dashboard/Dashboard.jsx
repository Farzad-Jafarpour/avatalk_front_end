import * as React from "react";
import { Box, Toolbar, Container, Grid } from "@mui/material";
import Copyright from "../../common/copyright";
import MiniDrawer from "../drawer";
import Courses from "./components/Courses";
import CarouselRenderer from "./components/Carousel";
import AdminRenderer from "./components/AdminList";

function DashboardContent() {
  return (
    <>
      <Box sx={{ display: "flex", height: "90vh" }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mb: 4 }}>
            <Box
              display="flex"
              sx={{
                flex: 1,
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <MiniDrawer />
              <Grid container sx={{ ml: 10 }} justifyContent="center">
                <Grid item xs={12} md={9}>
                  <Courses />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box
                    sx={{
                      mt: { xs: 10, md: 0 },
                    }}
                  >
                    <AdminRenderer />
                    <Box sx={{ mt: { xs: 10, md: 0 } }}>
                      <CarouselRenderer />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Copyright sx={{ m: 1 }} companyname="Company" />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
