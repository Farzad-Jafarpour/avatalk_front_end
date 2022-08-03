import React, { useState } from "react";
import { useParams } from "react-router-dom";
import http from "services/httpService";
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Paper, Grid, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilesDragAndDrop from "common/FilesDragAndDrop";

const EditCourse = () => {
  const [oldCardData, setOldCardData] = useState({});
  const [cardImage, setCardImage] = useState();
  const { register, handleSubmit, reset } = useForm();

  const params = useParams();

  const getOldData = async () => {
    const response = await http.get(
      "http://localhost:3900/api/cards/" + params.id
    );
    setOldCardData(response.data);
  };

  getOldData();

  const handleUploadUserImage = async (image) => {
    const formData = new FormData();
    formData.append("cardImage", image[0], image[0].name);
    console.log(image[0]);
    const response = await http.post(
      "http://localhost:3900/api/cards/upload",
      formData
    );

    setCardImage(response.data);
  };

  const handleClearance = () => {
    reset();
  };

  const onSubmit = async (data) => {
    console.log(oldCardData);
    let card = {
      cardImage: cardImage || oldCardData.cardImage,
      name: data.cardName || oldCardData.name,
      description: data.cardDescription || oldCardData.description,
    };
    console.log(params.id);
    await http.put("http://localhost:3900/api/cards/" + params.id, card);
    if (cardImage) {
      console.log("cardImage", cardImage);

      await http.delete(
        "http://localhost:3900/api/cards/" + oldCardData.cardImage
      );
      console.log("eshayin sike");
    }
    window.location = "/homepage";
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            mt: 2,
            backgroundColor: "#rgba(216, 224, 232,0.9)",
            borderRadius: "40px",
          }}
        >
          <Box display="flex" flexDirection={"row-reverse"}>
            <Button href="/" size="small">
              <CloseIcon />
            </Button>
          </Box>
          <Paper
            height="90vh"
            sx={{ p: 2, borderRadius: "30px" }}
            elevation={24}
          >
            <FilesDragAndDrop
              onUpload={(image) => handleUploadUserImage(image)}
              count={1}
              formats={["jpg", "png", "svg"]}
              containerStyles={{
                maxWidth: "xs",
                height: "200px",
                border: "1px solid #cccccc",
              }}
              openDialogOnClick
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Drop files here
              </Box>
            </FilesDragAndDrop>
            <TextField
              {...register("cardName")}
              name="cardName"
              type="text"
              label="Course Name"
              fullWidth
              sx={{ mt: 1 }}
            />
            <TextField
              {...register("cardDescription")}
              type="text"
              multiline
              label="About Course"
              maxRows="10"
              fullWidth
              sx={{ mt: 2 }}
            />
            <Grid container direction="row">
              <Grid item xs={6} sx={{ p: 1 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{
                    mt: 1,
                    borderRadius: "15px",
                    color: "rgba(0,0,0,0.87)",
                    backgroundColor: "#rgba(0,0,0,0.9)",
                  }}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ p: 1 }}>
                <Button
                  onClick={handleClearance}
                  fullWidth
                  variant="outlined"
                  sx={{
                    color: "rgba(0,0,0,0.87)",
                    mt: 1,
                    borderRadius: "15px",
                    backgroundColor: "#rgba(0,0,0,0.9)",
                  }}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </form>
    </>
  );
};

export default EditCourse;
