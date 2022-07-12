import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import auth from "services/authService";
import "animate.css";

const apiEndPoint = "http://localhost:3900/";

const ImgMediaCard = ({ cardName, cardImage, cardDescription, id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      <Card className="animate__animated animate__backInLeft animate__delay-1s">
        <Paper>
          <CardMedia
            sx={{ maxWidth: "255px", maxHeight: "150px" }}
            component="img"
            alt={cardName}
            image={apiEndPoint + cardImage}
          />
          <CardContent
            className="animate__animated animate__backInDown animate__delay-2s"
            sx={{ m: 0, p: "2px" }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {cardName}
            </Typography>
          </CardContent>
          <CardActions
            className="animate__animated animate__backInUp animate__delay-2s"
            sx={{ m: 0, p: "2px" }}
          >
            <Button
              onClick={handleModal}
              onMouseOver={() => {
                setIsHovered(!isHovered);
              }}
              onMouseOut={() => {
                setIsHovered(!isHovered);
              }}
              className={
                isHovered &&
                "animate__animated animate__infinite animate__swing"
              }
              size="small"
            >
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

      <Dialog
        className="animate__animated animate__backInDown"
        open={modalOpen}
        onClose={handleModal}
      >
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
