import * as React from "react";
import Link from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Login, Logout } from "@mui/icons-material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PersonIcon from "@mui/icons-material/Person";

const SecondaryListItems = ({ user }) => {
  return (
    <React.Fragment>
      {!user && (
        <>
          <Link href="/signup">
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIndIcon />
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
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={user.nationalCode} />
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
