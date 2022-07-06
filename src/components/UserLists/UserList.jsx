import React from "react";
import { Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImgMediaCard from "components/homePage/components/card";
import GridRenderer from "./GridRenderer";
import UserCard from "./components/userCard";

const useStyles = makeStyles((theme) => ({}));

const styles = {
  customHover: {
    "&:hover": {
      color: "#000",
      backgroundColor: "#fc5d5d",
      borderRadius: " 10px 0px 10px 0px ",
    },
  },
};

const AdminRenderer = () => {
  //   const classes = useStyles();

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
        className={styles.customHover}
        sx={{
          background: "#1976d2",
          textAlign: "center",
          borderRadius: " 0px 10px 0px 10px ",
          width: "120px",
          mt: 1,
        }}
      >
        <Link href="/admins" variant="body2" underline="none" color="#fff">
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
        <UserCard />
      </Box>
    </Box>
  );
};

export default AdminRenderer;
