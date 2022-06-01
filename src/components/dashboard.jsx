import * as React from "react";
import MiniDrawer from "./drawer";
import { Box, Toolbar, Container, Grid, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { CarouselData } from "./carouselData";
import { Typography } from "@mui/material";
import Copyright from "../common/copyright";
import RecipeReviewCard from "./../common/card";
import { Rowing } from "@mui/icons-material";

function DashboardContent() {
  // const [open, setOpen] = React.useState(false);
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
              <Box
                sx={{
                  m: 1,
                  height: "100vh",
                  width: { xs: "77vw", md: "60vw" },
                }}
                style={{ border: "solid" }}
              >
                <Box
                  sx={{
                    background: "#1976d2",
                    textAlign: "center",
                    borderRadius: "0px 10px 0px 10px ",
                    width: "120px",
                  }}
                >
                  Course Name
                </Box>
                <Box
                  display="flex"
                  sx={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90vh",
                  }}
                >
                  <RecipeReviewCard
                    style={{ objectFit: "none", height: "100%" }}
                  />
                  <RecipeReviewCard
                    style={{ objectFit: "fill", height: "100%" }}
                  />
                  <RecipeReviewCard
                    style={{ objectFit: "fill", height: "100%" }}
                  />
                </Box>
              </Box>
              <Box sx={{ width: { xs: "80vw", md: "39vw" } }}>
                <Box
                  display="flex"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    m: 1,
                    height: { md: "49vh", xs: "33vh" },
                    border: "solid",
                  }}
                >
                  <Carousel sx={{ height: "100%", width: "100%" }}>
                    <RecipeReviewCard sx={{ objectFit: "fill" }} />
                    <RecipeReviewCard sx={{ objectFit: "fill" }} />
                    <RecipeReviewCard sx={{ objectFit: "fill" }} />
                  </Carousel>
                </Box>
                <Box
                  display="flex"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    m: 1,
                    height: "49vh",
                  }}
                >
                  <Carousel sx={{ height: "100%", width: "100%" }}>
                    {CarouselData.map((item) => (
                      <Box sx={{ height: "100%", width: "100%" }}>
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "fill",
                          }}
                          src={item.image}
                        />
                      </Box>
                    ))}
                  </Carousel>
                </Box>
              </Box>
            </Box>
            <Copyright sx={{ pt: 4 }} companyname="Avatalk" />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

{
  /* <Grid container spacing={2} justify="center">
<Grid container item xs={12} sm={8} spacing={2}>
  <Grid item sm={12}>
    <Typography
      variant="h6"
      style={{
        textAlign: "center",
        borderRadius: "2px 10px 10px 2px",
        width: "10vw",
        background: "red",
      }}
    >
      shdaksjd
    </Typography>
  </Grid>
  <Grid item sm={4}>
    <RecipeReviewCard style={{ height: "auto" }} />
  </Grid>
  <Grid item sm={4}>
    <RecipeReviewCard style={{ height: "auto" }} />
  </Grid>
  <Grid item sm={4}>
    <RecipeReviewCard style={{ height: "auto" }} />
  </Grid>

  {/* <Paper style={{ height: "100vh", background: "lightgrey" }} /> */
}
// </Grid>
// <Grid
//   item
//   container
//   direction="column"
//   xs={12}
//   sm={4}
//   spacing={2}
// >
//   <Grid item>
//     <Carousel>
//       <RecipeReviewCard />
//       <RecipeReviewCard />
//       <RecipeReviewCard />
//     </Carousel>
//   </Grid>
//   <Grid item>
//     <Carousel>
//       {CarouselData.map((item) => (
//         <Typography
//           style={{
//             height: "49vh",
//             background: "lightgrey",
//             overflow: "hidden",
//           }}
//         >
//           <img
//             style={{ height: "100%", width: "100%" }}
//             src={item.image}
//           />
//         </Typography>
//       ))}
//     </Carousel>
//   </Grid>
// </Grid>
// </Grid> */}
