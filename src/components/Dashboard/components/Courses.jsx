import React from "react";
import { Box, Link, Grid, Button } from "@mui/material";
import ImgMediaCard from "common/card";
import GridRenderer from "./GridRenderer";
import { Add } from "@mui/icons-material";

const Courses = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        m: 1,
        p: 2,
        height: "90vh",
      }}
    >
      <Box display="flex">
        <Box
          sx={{
            background: "#1976d2",
            textAlign: "center",
            borderRadius: "0px 10px 0px 10px ",
            width: "120px",
          }}
        >
          <Link
            href="/courselists"
            variant="body2"
            underline="hover"
            color="#fff"
          >
            Course lists
          </Link>
        </Box>
        <Box>
          <Button
            href="/addcourse"
            variant="contained"
            sx={{
              background: "#1976d2",
              textAlign: "center",
              borderRadius: " 10px 0px 10px 0px ",
              ml: "3px",
              width: "120px",
            }}
          >
            <Add label="Chip 1" color="#000" />
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        sx={{
          flex: 1,
          justifyContent: "center",
          mt: 1,
          alignItems: "stretch",
        }}
      >
        <Grid container>
          {GridRenderer(ImgMediaCard, 4, 4)}
          {GridRenderer(ImgMediaCard, 4, 4)}
          {GridRenderer(ImgMediaCard, 4, 4)}
          {GridRenderer(ImgMediaCard, 4, 4)}
          {GridRenderer(ImgMediaCard, 4, 4)}
          {GridRenderer(ImgMediaCard, 4, 4)}
        </Grid>
      </Box>
    </Box>
  );
};

export default Courses;
