import * as React from "react";
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
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
            <OtherHousesIcon />
          </ListItemIcon>
          <ListItemText primary="Client Home Page" />
        </ListItemButton>
      </Link>
      <Link href="/addcourse" underline="hover" color="#212529">
        <ListItemButton>
          <ListItemIcon>
            <AddToQueueIcon />
          </ListItemIcon>
          <ListItemText primary="Client Home Page" />
        </ListItemButton>
      </Link>
      <Link href="/addphoto" underline="hover" color="#212529">
        <ListItemButton>
          <ListItemIcon>
            <AddAPhotoIcon />
          </ListItemIcon>
          <ListItemText primary="Add photo to Carousel" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
};

export default MainListItems;
