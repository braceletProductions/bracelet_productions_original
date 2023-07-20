import { Typography } from "@mui/material";
import React from "react";
import FlexBetween from "../components/FlexBetween";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { Email } from "@mui/icons-material";
import ContactUsbg from "../assets/ContactUs.jpg";

const ContactUs = () => {
  return (
    <FlexBetween
      sx={{
        flexDirection: "column",
        backgroundImage: `url(${ContactUsbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: {
          xs: "2rem",
          sm: "3rem",
          md: "4rem",
          lg: "6rem",
        },
        gap: "3rem",
        zIndex: "3",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#FFC300",
          fontFamily: `"Poppins", "sans-serif"`,
          fontFamily: `"Righteous", "cursive"`,
          fontSize: {
            xs: "24px",
            sm: "28px",
            md: "36x",
            lg: "42px",
          },
        }}
      >
        LET'S HAVE A DISCUSSION
      </Typography>
      <Typography
        sx={{
          color: "#6CCFF6",
          fontFamily: `"Poppins", "sans-serif"`,
          fontFamily: `"Righteous", "cursive"`,
          fontSize: {
            xs: "1.15rem",
            sm: "1.3rem",
            md: "1.4rem",
            lg: "1.5rem",
          },
        }}
      >
        Contact Us By Clicking Here :
      </Typography>
      <IconButton
        sx={{
          color: "black",
          height: "80px",
          width: "80px",
          borderRadius: "50%",
          background: "#FFC300",
        }}
      >
        <Email sx={{ fontSize: "64px" }}></Email>
      </IconButton>
      <Typography
        variant="h3"
        sx={{
          color: "#FFC300",
          fontFamily: `"Poppins", "sans-serif"`,
          fontFamily: `"Righteous", "cursive"`,
          fontSize: {
            xs: "22px",
            sm: "32px",
            md: "36x",
            lg: "42px",
          },
        }}
      >
        OR CALL US: +91-7011031017
      </Typography>
    </FlexBetween>
  );
};

export default ContactUs;
