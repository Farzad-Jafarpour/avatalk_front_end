import React, { useState } from "react";
import axios from "axios";
import http from "services/httpService";
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Paper, Grid, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilesDragAndDrop from "common/FilesDragAndDrop";

const CourseEditor = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const { register, handleSubmit } = useForm();

  const handleUploadUserImage = async (image) => {
    console.log(image);
    const formData = new FormData();
    formData.append("file", image);
    const response = await http.post(
      "http://localhost:3900/api/cards/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response);
  };

  const onSubmit = async (data, selectedFiles) => {
    const card = {
      name: "tests",
      description: "tested",
      cardImage: "askdjaksd",
    };
    await http.post("http://localhost:3900/api/cards", card);
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
                width: "200px",
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
                  type="submit"
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

export default CourseEditor;
