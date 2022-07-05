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
    width: "70px",
    "&:hover": {
      color: "#adc3f7",
      backgroundColor: "#fc5d5d",
    },
  },
};

const UserCard = ({ userName, student, admin, teacher }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState("");
  const [isStudent, setIsStudent] = useState("");
  const [isTeacher, setIsTeacher] = useState("");

  useEffect(() => {
    if (student) setIsStudent("Student");
    if (admin) setIsAdmin("Admin");
    if (teacher) setIsTeacher("Teacher");
  }, []);

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
          <CardMedia
            component="img"
            alt={userName}
            image="http://localhost:3900/files/2022-07-01T11-21-06.075Ztest%20-%20Copy.jpg"
          />
          <CardActions>
            <Button onClick={handleModal} sx={styles.btn}>
              Details
            </Button>
          </CardActions>
        </Box>
      </Card>
      <Dialog open={modalOpen} onClose={handleModal}>
        <DialogTitle>{`${userName}'s details`}</DialogTitle>
        <DialogContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${isAdmin}
              ${isTeacher}
              ${isStudent}`}
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

export default UserCard;
