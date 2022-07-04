import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
        <CardMedia
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
      </Card>
      <Dialog open={modalOpen} onClose={handleModal}>
        <DialogTitle>Course details</DialogTitle>
        <DialogContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardName}
            </Typography>
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
