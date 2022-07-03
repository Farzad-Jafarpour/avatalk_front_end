import React from "react";
import { Box, Button, Grid, AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customHover: {
    "&:hover": {
      color: "#adc3f7",
      backgroundColor: "#fc5d5d",
      borderRadius: " 10px 0px 10px 0px ",
    },
  },
}));

const Appbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Button
            className={classes.customHover}
            href="/homepage"
            variant="outlined"
            sx={{
              color: "#faf6f5",
              textAlign: "center",
              ml: "3px",
              p: 0,
              width: "120px",
            }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
