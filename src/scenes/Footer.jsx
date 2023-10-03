import { Typography } from "@mui/material";
import React from "react";
import FlexBetween from "../components/FlexBetween";
import IconButton from "@mui/material/IconButton";
import { FacebookOutlined } from "@mui/icons-material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <FlexBetween
      sx={{
        padding: {
          xs: "1rem 2rem",
          sm: "1.5rem 3rem",
          md: "2rem 4rem",
          lg: "2rem 6rem",
        },
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "space-between",
          lg: "space-between",
        },

        background: "black",
        color: "white",
        flexWrap: "wrap",
      }}
    >
      <FlexBetween>
        <Typography
          sx={{
            fontFamily: `"Poppins", "sans-serif"`,
            textAlign: "center",
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "18px",
              lg: "13px",
            },
          }}
        >
        Bracelet Productions, Unit of Drift of Thread
         </Typography>
      </FlexBetween>
      <FlexBetween>
        <Typography
          sx={{
            fontFamily: `"Poppins", "sans-serif"`,
            textAlign: "center",
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "18px",
              lg: "13px",
            },
          }}
        >
          Copyright © 2023 Bracelet Productions | Developed By Indian Ventures
        </Typography>
      </FlexBetween>
      <FlexBetween sx={{ flexDirection: "column" }}>
        <FlexBetween>
          <IconButton sx={{ color: "white" }} href="https://www.facebook.com/BRACELETPRODUCTIONS?mibextid=ZbWKwL">
            <FacebookOutlined></FacebookOutlined>{" "}
          </IconButton>
          <IconButton sx={{ color: "white" }} href="https://www.instagram.com/braceletproductions/?igshid=MzNlNGNkZWQ4Mg%3D%3D">
            <InstagramIcon></InstagramIcon>{" "}
          </IconButton>
          <IconButton sx={{ color: "white" }} href="https://www.linkedin.com/company/bracelet-productions/" >
            <LinkedInIcon></LinkedInIcon>{" "}
          </IconButton>
        </FlexBetween>
        <FlexBetween
          sx={{
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "18px",
              lg: "20px",
            },
          }}
        >
          
        </FlexBetween>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Footer;
