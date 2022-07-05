import React from "react";
import { Box, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { CarouselData } from "components/carouselData";

const CarouselRenderer = () => {
  return (
    <Box
      display="flex"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        m: 1,
        height: "49vh",
      }}
    >
      <Paper
        sx={{
          background: "#F6DBDB",
          width: { sm: "150px", md: "250px" },
          height: { sm: "150px", md: "250px" },
        }}
      >
        <Carousel sx={{ height: "100%", width: "100%" }}>
          {CarouselData.map((item) => (
            <Box key={item.image} sx={{ height: "100%", width: "100%" }}>
              <img
                style={{
                  height: "90%",
                  width: "90%",
                  objectFit: "fill",
                }}
                src={item.image}
              />
            </Box>
          ))}
        </Carousel>
      </Paper>
    </Box>
  );
};

export default CarouselRenderer;
