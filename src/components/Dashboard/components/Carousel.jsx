import React from "react";
import { Box } from "@mui/material";
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
      <Carousel sx={{ height: "100%", width: "100%" }}>
        {CarouselData.map((item) => (
          <Box sx={{ height: "100%", width: "100%" }}>
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
    </Box>
  );
};

export default CarouselRenderer;
