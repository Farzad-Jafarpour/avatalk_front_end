import React from "react";
import { Grid } from "@mui/material";

const GridRenderer = (Item, md, xs) => {
  return (
    <Grid item md={md} xs={xs} sx={{ p: 0.25 }}>
      <Item />
    </Grid>
  );
};

export default GridRenderer;
