import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import GridRenderer from "./GridRenderer";
import UserCard from "components/UserLists/components/userCard";
import userService from "services/userService";

const AdminRenderer = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
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
      overflow={"hidden"}
      sx={{
        width: { xs: "250px", sm: "250px", md: "250px", lg: "400px" },
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        m: 1,
      }}
    >
      <Grid container spacing={1}>
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
            6
          )
        )}
      </Grid>
    </Box>
  );
};

export default AdminRenderer;
