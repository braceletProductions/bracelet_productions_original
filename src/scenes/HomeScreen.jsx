import { Box, Typography } from "@mui/material";
import React from "react";
import homeImage from "../assets//home3.png";

const HomeScreen = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${homeImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: {
          xs: "15rem",
          sm: "24rem",
          md: "32rem",
          lg: "48rem",
        },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "2rem",
          textAlign: "center",

          margin: "auto",
        }}
      >
        <Typography
          color="#FFD60A"
          sx={{
            fontSize: {
              xs: "2.2rem",
              sm: "3.5rem",
              md: "4.5rem",
              lg: "6.5rem",
            },
            // fontFamily: `"Poppins", "sans-serif"`,
            // fontFamily: `"Righteous", "cursive"`,
            textShadow: "4px 4px black",
          }}
        >
          Host Your Dream Event
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeScreen;
