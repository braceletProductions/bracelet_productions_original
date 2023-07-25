import React from "react";
import FlexBetween from "../components/FlexBetween";
import { Box, Button, InputBase, Typography } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { Email, AddLocationAlt } from "@mui/icons-material";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_7kq62he";
const TEMPLATE_ID = "template_ccdyyqr";
const USER_ID = "Atharv Varma";

const Contactus = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      });
    e.target.reset();
  };

  return (
    <FlexBetween sx={{ background: "black", flexWrap: "wrap" }} id="contact">
      <FlexBetween
        sx={{
          width: {
            xs: "100vw",
            sm: "100px",
            md: "45vw",
            lg: "45vw",
          },
          height: "75vh",
        }}
      >
        <FlexBetween
          sx={{
            flexDirection: "column",
            background: "white",
            margin: "0 auto",
            width: {
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
            },
            height: "75%",
            padding: "6%",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "black",
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
              CONTACT US
            </Typography>
          </Box>
          <Box
            sx={{
              height: "13%",
              width: "90%",
              background: "white",
              borderRadius: "5px",
              border: "1px solid black",
            }}
            className="inputField"
          >
            <InputBase
              type="name"
              name="name"
              id="name"
              placeholder="Your name"
              autocomplete="on"
              required
              sx={{
                padding: "0px 3px",
                fontFamily: `"Poppins", "sans-serif"`,
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                  md: "18px",
                  lg: "20px",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              height: "13%",
              width: "90%",
              background: "white",
              borderRadius: "5px",
              border: "1px solid black",
            }}
            className="inputField"
          >
            <InputBase
              type="Email"
              name="email"
              id="email"
              placeholder="Your email"
              required=""
              sx={{
                padding: "0px 3px",
                fontFamily: `"Poppins", "sans-serif"`,
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                  md: "18px",
                  lg: "20px",
                },
              }}
            />
            <span className="valid_info_email"></span>
          </Box>

          <Box
            sx={{
              height: "30%",
              width: "90%",
              background: "white",
              borderRadius: "10px",
              border: "1px solid black",
            }}
            className="inputField"
          >
            <InputBase
              name="message"
              id="message"
              placeholder="Your message"
              sx={{
                padding: "5px 5px",
                fontFamily: `"Poppins", "sans-serif"`,
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                  md: "18px",
                  lg: "20px",
                },
              }}
            ></InputBase>
            <span className="valid_info_message"></span>
          </Box>

          <Box className="inputField btn">
            <Button
              onSubmit={handleOnSubmit}
              variant="contained"
              sx={{
                background: "#FFD60A",
                color: "#003566",
                fontWeight: "bold",
              }}
              type="submit"
              id="form-submit"
              className="main-gradient-button"
            >
              Send a message
            </Button>
          </Box>
        </FlexBetween>
      </FlexBetween>
      <FlexBetween
        sx={{
          flexDirection: "column",
          gap: "2rem",
          maxWidth: {
            xs: "100vw",
            sm: "100px",
            md: "45vw",
            lg: "45vw",
          },
          textAlign: "center",
          padding: "2rem 2rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#FFC300",
            // fontFamily: `"Poppins", "sans-serif"`,
            // fontFamily: `"Righteous", "cursive"`,
            fontSize: {
              xs: "22px",
              sm: "32px",
              md: "36x",
              lg: "42px",
            },
          }}
        >
          FIND US AT
        </Typography>
        <Typography
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
          82, DDA Mini Market, Behind Sahyog Building, Nehru Place, Delhi 11019
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
          <AddLocationAlt sx={{ fontSize: "64px" }}></AddLocationAlt>
        </IconButton>
        <Typography
          variant="h3"
          sx={{
            color: "#FFC300",
            // fontFamily: `"Poppins", "sans-serif"`,
            // fontFamily: `"Righteous", "cursive"`,
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
    </FlexBetween>
  );
};

export default Contactus;