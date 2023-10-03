import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Gallery_1 from "../assets/Gallery_1.jpg";
import Gallery_2 from "../assets/Gallery_2.jpeg";
import Gallery_3 from "../assets/Gallery_3.jpeg";
import Gallery_4 from "../assets/Gallery_4.jpeg";
import Gallery_5 from "../assets/Gallery_5.jpeg";
import Gallery_7 from "../assets/Gallery_7.jpeg";
import Gallery_8 from "../assets/Gallery_8.jpeg";
import Gallery_9 from "../assets/Gallery_9.jpeg";
import Gallery_10 from "../assets/Gallery_10.jpeg";
import Gallery_11 from "../assets/Gallery_11.jpeg";
import Gallery_12 from "../assets/Gallery_12.jpeg";
import Gallery_13 from "../assets/Gallery_13.jpeg";
import Gallery_14 from "../assets/Gallery_14.jpeg";
import Gallery_15 from "../assets/Gallery_15.jpeg";
import Gallery_16 from "../assets/Gallery_16.jpeg";
import Gallery_17 from "../assets/Gallery_17.jpeg";
import Gallery_18 from "../assets/Gallery_18.jpeg";
import Gallery_19 from "../assets/Gallery_19.jpeg";
import Gallery_20 from "../assets/Gallery_20.jpeg";
import Gallery_21 from "../assets/Gallery_21.jpeg";
import Gallery_22 from "../assets/Gallery_22.jpeg";
import Gallery_23 from "../assets/Gallery_23.jpeg";
import Gallery_24 from "../assets/Gallery_24.jpeg";
import Gallery_25 from "../assets/Gallery_25.jpeg";
import Gallery_26 from "../assets/Gallery_26.jpeg";
import Gallery_27 from "../assets/Gallery_27.jpeg";
import Gallery_28 from "../assets/Gallery_28.jpeg";
import Gallery_29 from "../assets/Gallery_29.jpeg";
import Gallery_30 from "../assets/Gallery_30.jpeg";
import Gallery_31 from "../assets/Gallery_31.jpeg";
import Gallery_32 from "../assets/Gallery_32.jpeg";
import Gallery_33 from "../assets/Gallery_33.jpeg";
import Gallery_34 from "../assets/Gallery_34.jpeg";
import Gallery_35 from "../assets/Gallery_35.jpeg";
import Gallery_36 from "../assets/Gallery_36.jpeg";
import Gallery_37 from "../assets/Gallery_37.jpeg";
import Gallery_38 from "../assets/Gallery_38.jpeg";
import Gallery_39 from "../assets/Gallery_39.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ padding: "3rem 3rem", background: "black" }} id="Gallery">
      <Typography
        sx={{
          color: "#FFC300",
          // fontFamily: `"Poppins", "sans-serif"`,
          // fontFamily: `"Righteous", "cursive"`,
          textAlign: "center",
          paddingBottom: "3rem",
          fontSize: {
            xs: "28px",
            sm: "32px",
            md: "36x",
            lg: "42px",
          },
        }}
      >
        Gallery
      </Typography>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={isMobile ? "1" : "3"}
        spaceBetween={30}
        modules={[Pagination, Navigation, Autoplay]}
        grabCursor={true}
        navigation={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="Gallery_Slide">
          <Box component="img" src={Gallery_1}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_2}
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_3}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_4}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_5}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_7}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_8}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_9}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_10}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_11}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_12}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_13}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_14}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_15}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_16}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_17}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_18}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_19}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_20}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_21}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_22}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_23}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_24}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_25}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_26}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_27}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_28}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_29}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_30}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_31}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_32}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_33}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Box
            component="img"
            src={Gallery_34}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide> */}
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_35}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_36}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_37}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_38}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Gallery_39}
            className="GallerySwipe"
            style={{ height: "300px", width: "400px" }}
          ></Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Gallery;
