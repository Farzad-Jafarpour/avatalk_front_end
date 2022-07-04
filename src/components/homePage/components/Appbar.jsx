import React from "react";
import { Box, Button, Grid, AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const styles = {
  btn: {
    color: "#fff",
    textAlign: "center",
    borderRadius: " 0px 10px 0px 10px  ",
    ml: "3px",
    p: 0,
    width: "120px",
    "&:hover": {
      color: "#adc3f7",
      backgroundColor: "#fc5d5d",
      borderRadius: " 10px 0px 10px 0px ",
    },
  },
};
const Appbar = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Button href="/" variant="outlined" sx={styles.btn}>
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
