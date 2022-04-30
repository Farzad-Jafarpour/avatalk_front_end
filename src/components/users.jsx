import React, { useState, useEffect } from "react";
import userService from "../services/userService";
import TableRenderer from "./../common/tableRenderer";
import Copyright from "../common/copyright";
import { Box } from "@mui/material";
import MiniDrawer from "./drawer";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    // if (!user) return;
    const users = await userService.getUsers();

    if (users) {
      setUsers(users.data);
    }
  }, []);

  if (!users.length === 0) return null;

  console.log(users);
  const headCells = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Name",
    },
    {
      id: "lastName",
      numeric: false,
      disablePadding: true,
      label: "Lastname",
    },
    {
      id: "nationalCode",
      numeric: false,
      disablePadding: true,
      label: "National code",
    },
    {
      id: "isAdmin",
      numeric: false,
      disablePadding: true,
      label: "Admin",
    },
    {
      id: "isTeacher",
      numeric: false,
      disablePadding: true,
      label: "Teacher",
    },
    {
      id: "isStudent",
      numeric: false,
      disablePadding: true,
      label: "Student",
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            mt: 12,
          }}
        >
          <TableRenderer sx={{ mt: 12 }} rows={users} headCells={headCells} />
        </Box>
      </Box>
      <Copyright sx={{ pt: 4 }} companyName="Avatalk" />
    </>
  );
};

export default Users;
