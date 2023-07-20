import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TestimonialPic from "../assets/Testimonial.png";
import { Box } from "@mui/material";

export default function ImgMediaCard({name,feedback}) {
  return (
    <Card
      className="card"
      sx={{
        maxWidth: 345,
        background: "#333",
      }}
    >
      <Box className="layer"></Box>
      <Box
        className="card-content"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography
            className="card-text"
            variant="body2"
            sx={{
              textAlign: "center",
              color: "white",
              fontFamily: `"Poppins", "sans-serif"`,
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
          <p style={{backgroundColor:"rgb(255, 0, 128)"}}>{name}</p> <br></br> <div style={{textAlign:"justify"}}><h6 style={{textAlign:"center"}}>{feedback}</h6></div>
           
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
  );
}
