import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import TestimonidalCard from "../components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../components/tesimonialdata";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        padding: {
          xs: "0.5rem 0.5rem 8rem",
          sm: "0.5rem 0.5rem 8rem",
          md: "1.5rem 1.5rem 8rem",
          lg: "3rem 3rem 8rem 8rem",
        },
        
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#FFC300",
            // fontFamily: `"Poppins", "sans-serif"`,
            // fontFamily: `"Righteous", "cursive"`,
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
      <Box className="testimonials">
        <Swiper
          effect={"coverflow"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          modules={[Autoplay]}
          slidesPerView={isMobile ? "1" : "1"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            
          }}
          /*         modules={[EffectCoverflow, Pagination]} */
          className="mySwiper"
        >
          {
            data.map((customer,i)=>{
              return(
                <div key={customer.id}>
                   <SwiperSlide className="TestimonialSwipe">
                  <TestimonidalCard
                   
                   feedback={customer.feedback}
                   name={customer.name}
                  />
                 </SwiperSlide>
                </div>
               
              )
             
            })
          }
         
          
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
