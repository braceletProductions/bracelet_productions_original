import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FlexBetween from "../components/FlexBetween";
import AboutUs1Pic from "../assets/AboutUs_1.jpg";
import AboutUs2Pic from "../assets/AboutUs_2.png";
const AboutUs = () => {
  return (
    <>
      <FlexBetween
        sx={{ padding: "4rem", backgroundColor: "black" }}
        id="About"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
            },
            justifyContent: "space-between",
            color: "white ",
            gap: "2rem",
            paddingRight: {
              xs: "none",
              sm: "none",
              md: "4rem",
              lg: "6rem",
            },
            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
          }}
        >
          <Typography
            sx={{
              color: "#FFC300",
              // fontFamily: `"Poppins", "sans-serif"`,
              // fontFamily: `"Righteous", "cursive"`,
              fontSize: {
                xs: "28px",
                sm: "32px",
                md: "36x",
                lg: "42px",
              },
            }}
          >
            ABOUT US
          </Typography>
          <Typography
            sx={{
              fontFamily: `"Poppins", "sans-serif"`,
              textAlign:"justify",
             
              wordSpacing:"-2px",
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "17px",
              },
            }}
          >
            As an established name in the field of Event, Art, and
            Entertainment Bracelet Productions has gained an impressive record
            of success thanks to its extensive industry experience and dynamic
            team of young professionals.Our services range from Event
            Management and Production, Photo and Videography, Video Productions,
            Fashion and Entertainment, to Integrated Marketing Communication.
            <br />
            <br /> Bracelet Productions is well equipped to take on the
            production of events, exhibits, and entertainment of any magnitude
            thanks to its expensive infrastructure and pool of young and
            talented professionals.
            <br />
            <br />
            Our clients have always been satisfied with the services rendered by
            Bracelet Productions.
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "8rem",
              backgroundColor: "#FFC300",
              color: "#003566",
              fontWeight: "bold",
              fontFamily: `"Poppins", "sans-serif"`,
            }}
          >
            Read More
          </Button>
        </Box>

        <FlexBetween
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
            },
          }}
        >
          <Box component="img" src={AboutUs1Pic} sx={{ width: "45vw" }}></Box>
        </FlexBetween>
      </FlexBetween>

      <FlexBetween sx={{ padding: "4rem", backgroundColor: "black" }}>
        <FlexBetween
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
            },
          }}
        >
          <Box component="img" src={AboutUs2Pic} sx={{ width: "45vw" }}></Box>
        </FlexBetween>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "space-between",
            color: "white ",
            gap: "2rem",
            paddingLeft: { xs: "none", sm: "none", md: "4rem", lg: "6rem" },
            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "28px",
                sm: "32px",
                md: "36x",
                lg: "42px",
              },
              color: "#FFC300",
              // fontFamily: `"Poppins", "sans-serif"`,
              // fontFamily: `"Righteous", "cursive"`,
            }}
          >
            WHY CHOOSE US?
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#6CCFF6",
              // fontFamily: `"Poppins", "sans-serif"`,
              // fontFamily: `"Righteous", "cursive"`,
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
            }}
          >
            INHOUSE INVETORY
          </Typography>
          <Typography
            sx={{
              // fontFamily: `"Poppins", "sans-serif"`,
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
              textAlign:"justify",
            }}
          >
            We can offer full inventory services for your event needs, whether
            it’s a Conference, Roadshow, Product Launch or Exhibition. All the
            things we need are here with us. Therefore, you do not have to
            hurry. You can count on us.
            <br />
            <br />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#6CCFF6",
              // fontFamily: `"Poppins", "sans-serif"`,
              // fontFamily: `"Righteous", "cursive"`,
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
              textAlign:"justify",
            }}
          >
            PROFESSIONAL SERVICES
          </Typography>
          <Typography
            sx={{
             // fontFamily: `"Poppins", "sans-serif"`,
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
              textAlign:"justify",
             
            }}
          >
            In terms of work, we are very proud to have a very professional team
            who will understand your all requirements and provide a timely
            response and idea.
          
            <br /> We all keep a constant touch with the client through out the
            event progress and process and after the event. so we can serve our
            clients better.
            <br />
            <br />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#6CCFF6",
              // fontFamily: `"Poppins", "sans-serif"`,
              // fontFamily: `"Righteous", "cursive"`,
              fontSize: {
                xs: "1.15rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
            }}
          >
            AFFORDABLE PRICING
          </Typography>
          <Typography
            sx={{
             // fontFamily: `"Poppins", "sans-serif"`,
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
              textAlign:"justify",
            }}
          >
            With us, pricing is never an issue. We work within the client’s
            budget and offer suggestions to reduce costs and increase value.
            <br />
            <br />
          </Typography>
        </Box>
      </FlexBetween>
    </>
  );
};

export default AboutUs;
