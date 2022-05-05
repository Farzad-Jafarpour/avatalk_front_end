import * as React from "react";
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Login, Logout, AssignmentInd, Person } from "@mui/icons-material";

const SecondaryListItems = ({ user }) => {
  return (
    <React.Fragment>
      {!user && (
        <>
          <Link href="/signup">
            <ListItemButton>
              <ListItemIcon>
                <AssignmentInd />
              </ListItemIcon>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </Link>
          <Link href="/login" variant="body2">
            <ListItemButton>
              <ListItemIcon>
                <Login />
              </ListItemIcon>
              <ListItemText primary="Log in" />
            </ListItemButton>
          </Link>
        </>
      )}

      {user && (
        <>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary={`${user.name} ${user.lastName}`} />
          </ListItemButton>
          <Link href="/logout">
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </Link>
        </>
      )}
    </React.Fragment>
  );
};

export default SecondaryListItems;
