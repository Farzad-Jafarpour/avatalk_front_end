import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Card, Button, Box, Paper } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const styles = {
  cardContainer: {
    width: "xs",
    borderRadius: "10px",
    color: "#FD4F4F",
    "&:hover": {
      color: "#000",
      backgroundColor: "#FCEEEE",
      borderRadius: "40px",
    },
  },

  btn: {
    background: "#1976d2",
    textAlign: "center",
    color: "#fff",
    borderRadius: " 10px  ",
    ml: "3px",
    p: 0,
    width: "120px",
    "&:hover": {
      color: "#adc3f7",
      backgroundColor: "#fc5d5d",
    },
  },
};

export default function UserCard() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Card sx={styles.cardContainer}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src="http://localhost:3900/files/2022-07-01T11-21-06.075Ztest%20-%20Copy.jpg"
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
              />
            }
            title="Farzad Jafarpour"
          />
          <CardContent>
            <Button onClick={handleModal} sx={styles.btn}>
              Details
            </Button>
          </CardContent>
        </Box>
      </Card>
      <Dialog open={modalOpen} onClose={handleModal}>
        <DialogTitle>Course details</DialogTitle>
        <DialogContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Asgar
            </Typography>
          </CardContent>
          <Button onClick={handleModal} size="small">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
