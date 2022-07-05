import React, { useState, useEffect } from "react";
import { Box, Link, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImgMediaCard from "components/homePage/components/card";
import GridRenderer from "./GridRenderer";
import UserCard from "components/UserLists/components/userCard";
import userService from "services/userService";

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
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    // if (!user) return;
    const users = await userService.getUsers();

    if (users) {
      setUsers(
        users.data.filter((user) => {
          return users.data.indexOf(user) < 4;
        })
      );
    }
  }, [users]);

  if (users.length === 0) return null;

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
      <Paper
        sx={{
          backgroundColor: "#FA8888",
          width: { sm: "150px", md: "250px" },
          height: { sm: "150px", md: "250px" },
        }}
      >
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
            {users.map((user) =>
              GridRenderer(
                <UserCard
                  userName={user.name + " " + user.lastName}
                  admin={user.isAdmin}
                  teacher={user.isTeacher}
                  student={user.isStudent}
                  key={user.nationalCode}
                />,
                6,
                4
              )
            )}
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminRenderer;
