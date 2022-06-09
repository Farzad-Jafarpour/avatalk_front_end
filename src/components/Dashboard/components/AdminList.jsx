import React from "react";
import { Box, Link } from "@mui/material";
import ImgMediaCard from "common/card";
import GridRenderer from "./GridRenderer";

const AdminRenderer = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        m: 1,
        height: { md: "49vh", xs: "33vh" },
      }}
    >
      <Box
        sx={{
          background: "#1976d2",
          textAlign: "center",
          borderRadius: " 10px 0px 10px 0px",
          width: "120px",
          mt: 1,
        }}
      >
        <Link href="/admins" variant="body2" underline="hover" color="#fff">
          Admins
        </Link>
      </Box>
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
        {GridRenderer(ImgMediaCard)}
        {GridRenderer(ImgMediaCard)}
        {GridRenderer(ImgMediaCard)}
      </Box>
    </Box>
  );
};

export default AdminRenderer;
