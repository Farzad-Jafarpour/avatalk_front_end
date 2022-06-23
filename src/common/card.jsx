import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import auth from "services/authService";

export default function ImgMediaCard() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    const currentUser = auth.getCurrentUser();
    if (currentUser) setUser(currentUser);
    return;
  }, []);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  console.log(user);
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        />
        <CardContent sx={{ m: 0, p: "2px" }}>
          <Typography gutterBottom variant="h6" component="div">
            Course
          </Typography>
        </CardContent>
        <CardActions sx={{ m: 0, p: "2px" }}>
          <Button onClick={handleModal} size="small">
            Learn More
          </Button>
          {user && user.isAdmin && (
            <Button href="/courseedit" size="small">
              Edit
            </Button>
          )}
        </CardActions>
      </Card>
      <Dialog open={modalOpen} onClose={!modalOpen}>
        <DialogTitle>Course</DialogTitle>
        <DialogContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
