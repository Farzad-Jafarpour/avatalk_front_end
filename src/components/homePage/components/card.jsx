import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import auth from "services/authService";

const apiEndPoint = "http://localhost:3900/";

const ImgMediaCard = ({ cardName, cardImage, cardDescription, id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    if (currentUser) setUser(currentUser);
    return;
  }, []);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Card>
        <Paper>
          <CardMedia
            sx={{ maxWidth: "255px", maxHeight: "150px" }}
            component="img"
            alt={cardName}
            image={apiEndPoint + cardImage}
          />
          <CardContent sx={{ m: 0, p: "2px" }}>
            <Typography gutterBottom variant="h6" component="div">
              {cardName}
            </Typography>
          </CardContent>
          <CardActions sx={{ m: 0, p: "2px" }}>
            <Button onClick={handleModal} size="small">
              Details
            </Button>
            {user && user.isAdmin && (
              <Button href={`/editcourse/${id}`} size="small">
                Edit
              </Button>
            )}
          </CardActions>
        </Paper>
      </Card>
      <Dialog open={modalOpen} onClose={handleModal}>
        <DialogTitle>{cardName} details</DialogTitle>
        <DialogContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {cardDescription}
            </Typography>
          </CardContent>
          <Button onClick={handleModal} size="small">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImgMediaCard;
