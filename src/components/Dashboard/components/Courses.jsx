import React, { useState, useEffect } from "react";
import { Box, Link, Grid, Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImgMediaCard from "components/homePage/components/card";
import GridRenderer from "./GridRenderer";
import { Add } from "@mui/icons-material";
import http from "services/httpService";

const styles = {
  btn: {
    background: "#1976d2",
    textAlign: "center",
    borderRadius: " 0px 10px 0px 10px  ",
    ml: "3px",
    p: 0,
    width: "120px",
    "&:hover": {
      color: "#adc3f7",
      backgroundColor: "#fc5d5d",
      borderRadius: " 10px 0px 10px 0px ",
    },
  },
};

const Courses = () => {
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
      <Paper
        sx={{
          background: "#F6DBDB",
        }}
      >
        <Box display="flex">
          <Box>
            <Button href="/addcourse" variant="contained" sx={styles.btn}>
              Courses
            </Button>
          </Box>
          <Box>
            <Button href="/addcourse" variant="contained" sx={styles.btn}>
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
      </Paper>
    </Box>
  );
};

export default Courses;
