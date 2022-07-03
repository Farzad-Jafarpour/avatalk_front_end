import React, { useState, useEffect } from "react";
import { Box, Link, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImgMediaCard from "common/card";
import GridRenderer from "./GridRenderer";
import { Add } from "@mui/icons-material";
import http from "services/httpService";

const useStyles = makeStyles((theme) => ({
  customHover: {
    "&:hover": {
      color: "#adc3f7",
      backgroundColor: "#fc5d5d",
      borderRadius: " 10px 0px 10px 0px ",
    },
  },
}));

const Courses = () => {
  const classes = useStyles();

  const [cards, setCards] = useState([]);

  useEffect(async () => {
    const cardsData = await http.get("http://localhost:3900/api/cards");
    setCards(cardsData.data);
  }, [cards]);
  if (cards.length === 0) return null;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        m: 1,
        p: 2,
        height: "90vh",
      }}
    >
      <Box display="flex">
        <Box>
          <Button
            className={classes.customHover}
            href="/addcourse"
            variant="contained"
            sx={{
              background: "#1976d2",
              textAlign: "center",
              borderRadius: " 0px 10px 0px 10px  ",
              ml: "3px",
              p: 0,
              width: "120px",
            }}
          >
            Courses
          </Button>
        </Box>
        <Box>
          <Button
            className={classes.customHover}
            href="/addcourse"
            variant="contained"
            sx={{
              background: "#1976d2",
              textAlign: "center",
              borderRadius: " 0px 10px 0px 10px  ",
              ml: "3px",
              p: 0,
              width: "120px",
            }}
          >
            <Add label="Chip 1" color="#000" />
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        sx={{
          flex: 1,
          justifyContent: "center",
          mt: 1,
          alignItems: "stretch",
        }}
      >
        <Grid container spacing={0.25}>
          {cards.map((card) =>
            GridRenderer(
              <ImgMediaCard
                key={card.name}
                id={card._id}
                cardName={card.name}
                cardImage={card.cardImage}
                cardDescription={card.description}
              />,
              4,
              4
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Courses;
