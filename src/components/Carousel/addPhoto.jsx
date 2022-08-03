import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Paper, Grid, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilesDragAndDrop from "common/FilesDragAndDrop";
import http from "services/httpService";

const AddPhoto = () => {
  const [carouselImage, setCarouselImage] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const handleUploadCarouselImage = async (image) => {
    const formData = new FormData();
    formData.append("cardImage", image[0], image[0].name);
    console.log(image[0]);
    const response = await http.post(
      "http://localhost:3900/api/cards/upload",
      formData
    );

    setCarouselImage(response.data);
  };

  const handleDelete = async () => {
    if (carouselImage) {
      await http.delete("http://localhost:3900/api/cards/" + carouselImage);
    } else {
      console.log("Nothing to be deleted");
    }
    window.location = "/";
  };
  const onSubmit = async (data) => {
    console.log("Submitted");
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
            <Button onClick={handleDelete} size="small">
              <CloseIcon />
            </Button>
          </Box>
          <Paper
            height="90vh"
            sx={{ p: 2, borderRadius: "30px" }}
            elevation={24}
          >
            <Box>
              <FilesDragAndDrop
                onUpload={(image) => handleUploadCarouselImage(image)}
                count={1}
                formats={["jpg", "png", "svg"]}
                containerStyles={{
                  maxWidth: "xs",
                  height: "200px",
                  border: "1px solid #cccccc",
                }}
                openDialogOnClick
              >
                {(carouselImage && (
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={`http://localhost:3900/${carouselImage}`}
                  />
                )) || (
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Drop files here
                  </Box>
                )}
              </FilesDragAndDrop>
              <Button
                onClick={handleDelete}
                fullWidth
                variant="outlined"
                color="error"
                sx={{
                  mt: 1,
                  borderRadius: "15px",
                  backgroundColor: "#rgba(0,0,0,0.9)",
                }}
              >
                Delete image
              </Button>
            </Box>
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
          </Paper>
        </Container>
      </form>
    </>
  );
};

export default AddPhoto;
