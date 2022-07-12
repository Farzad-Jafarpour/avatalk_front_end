import React from "react";
import { Box, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { CarouselData } from "components/carouselData";
import "animate.css";

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
        className="animate__animated animate__slideInUp animate__delay-1s"
        sx={{
          width: { xs: "250px", sm: "250px", md: "250px", lg: "400px" },
          maxHeight: { sm: "190px" },
        }}
        fullHeightHover="true"
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
