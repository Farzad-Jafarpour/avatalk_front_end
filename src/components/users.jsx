import React, { useState, useEffect } from "react";
import userService from "../services/userService";
import Copyright from "../common/copyright";
import { Box } from "@mui/material";
import MiniDrawer from "./drawer";
import UserTable from "./userTable";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    // if (!user) return;
    const users = await userService.getUsers();

    if (users) {
      setUsers(users.data);
    }
  }, [users]);

  if (!users.length === 0) return null;

  const columns = [
    { title: "Name", field: "name" },
    { title: "Last Name", field: "lastName" },
    { title: "National Code", field: "nationalCode" },
    { title: "Admin", field: "isAdmin" },
    { title: "Teacher", field: "isTeacher" },
    { title: "Student", field: "isStudent" },
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
          {/* <TableRenderer
            sx={{ mt: 12 }}
            rows={users}
            headCells={headCells}
            handleFilter={handleFilter}
          /> */}
          <UserTable columns={columns} data={users} />
        </Box>
      </Box>
      <Copyright sx={{ pt: 4 }} companyname="Avatalk" />
    </>
  );
};

export default Users;
