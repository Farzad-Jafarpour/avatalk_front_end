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
      }}
    >
      <Carousel
        sx={{
          width: { xs: "250px", sm: "250px", md: "250px", lg: "400px" },
          maxHeight: { sm: "190px" },
        }}
      >
        {CarouselData.map((item) => (
          <Box key={item.image}>
            <img src={item.image} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselRenderer;
