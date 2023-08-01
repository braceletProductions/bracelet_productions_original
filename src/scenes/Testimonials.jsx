import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./form.css";
import data from "../components/tesimonialdata";

const Testimonials = ({ name, feedback }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            color: "#FFC300",
            textAlign: "center",
            fontSize: {
              xs: "28px",
              sm: "32px",
              md: "36x",
              lg: "42px",
            },
          }}
        >
          TESTIMONIALS
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "3rem 3rem",
          background: "black",
          textAlign: "center",
          color: "white",
        }}
        id="Gallery"
      >
        <Typography
          sx={{
            fontSize: {
              xs: "28px",
              sm: "32px",
              md: "36x",
              lg: "42px",
            },
          }}
        >
          Our Success Stories
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "2rem",
            paddingLeft: "90px",
            paddingBottom: "10px",
            borderRadius: "15px",
            maxWidth: "580px",
            maxHeight: "200px",
            margin: "0 auto",
            marginTop: "3rem",
            wordSpacing:"1px",
            textAlign:"justify",
            justifyContent:"center",
            position: "relative",
            fontFamily:"Georgia, serif"
          }}
        >
          {/* Content for the white card */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)} // Add this line
          >
            {data.map((customer) => (
              <SwiperSlide key={customer.id}>
                <div className="TestimonialSwipe" style={{ color: "black" }}>
                  {customer.feedback}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* End of Swiper */}
          <Box
            sx={{
              position: "absolute",
              bottom: "-22px",
              right: "30px",
            }}
          >
            <div style={{ display: "flex" ,justifyContent:"space-between"}}>
              <div className="arrow-down"></div>
              <button style={{ backgroundColor: "#E75480", border: "none", color: "white", width: "250px",height:"35px" }}>
                {data[currentSlide].name}
              </button>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
