import React from "react";
import { Grid } from "@mui/material";
import "animate.css";

const GridRenderer = (Item, md, xs) => {
  return (
    <Grid item key={Item.key} md={md} xs={xs}>
      {Item}
    </Grid>
  );
};

export default GridRenderer;
