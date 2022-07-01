import React from "react";
import { Grid } from "@mui/material";

const GridRenderer = (Item, md, xs) => {
  return (
    <Grid item md={md} xs={xs}>
      {Item}
    </Grid>
  );
};

export default GridRenderer;
