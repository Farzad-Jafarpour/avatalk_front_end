import React from "react";
import { Button, AppBar, Toolbar } from "@mui/material";
import "animate.css";

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
      transform: "scale(1.2)",
      opacity: 0.8,
    },
  },
};
const Appbar = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Button
            className="animate__animated animate__bounce"
            href="/"
            variant="outlined"
            sx={styles.btn}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
