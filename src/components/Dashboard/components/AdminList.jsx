import React from "react";
import { Box, Link, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImgMediaCard from "components/homePage/components/card";
import GridRenderer from "./GridRenderer";
import UserCard from "components/UserLists/components/userCard";

const useStyles = makeStyles((theme) => ({
  customHover: {
    "&:hover": {
      color: "#adc3f7",
      backgroundColor: "#fc5d5d",
      borderRadius: " 10px 0px 10px 0px ",
    },
  },
}));

const AdminRenderer = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        m: 4,
        height: { md: "49vh", xs: "33vh" },
      }}
    >
      <Paper sx={{ backgroundColor: "#FA8888" }}>
        <Box
          display="flex"
          sx={{
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            m: 1,
          }}
        >
          <Grid container spacing={0.25}>
            {GridRenderer(<UserCard key="skak" />, 6, 4)}
            {GridRenderer(<UserCard key="skak" />, 6, 4)}
            {GridRenderer(<UserCard key="skak" />, 6, 4)}
            {GridRenderer(<UserCard key="skak" />, 6, 4)}
          </Grid>
          {/* {GridRenderer(ImgMediaCard)}
          {GridRenderer(ImgMediaCard)}
          {GridRenderer(ImgMediaCard)} */}
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminRenderer;
