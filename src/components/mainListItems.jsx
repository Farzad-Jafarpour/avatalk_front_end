import * as React from "react";
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  People,
  BarChart,
  Layers,
  Home,
  NaturePeopleTwoTone,
} from "@mui/icons-material";

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
      <ListItemButton>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Layers />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default MainListItems;
