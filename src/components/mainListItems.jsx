import * as React from "react";
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";

import { Home, NaturePeopleTwoTone } from "@mui/icons-material";

const MainListItems = () => {
  return (
    <React.Fragment>
      <Link href="/" underline="hover" color="#212529">
        <ListItemButton>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </Link>
      <Link href="/users" underline="hover" color="#212529">
        <ListItemButton>
          <ListItemIcon>
            <NaturePeopleTwoTone />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
      </Link>
      <Link href="/homepage" underline="hover" color="#212529">
        <ListItemButton>
          <ListItemIcon>
            <HomeWorkRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Client Home Page" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
};

export default MainListItems;
