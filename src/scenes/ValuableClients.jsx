import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LG from "../assets/LG.jpg";
import max from "../assets/max.jpg";
import NMDC from "../assets/NMDC.jpg";
import Tamarind from "../assets/Tamarind-Global.jpg";
import Perfetti from "../assets/Perfetti-Ven-Mille.png";
import Env from "../assets/Min-of-Env.jpg";
import AHP from "../assets/AHP.jpg";
import DIOS from "../assets/DIOS-LOGO-NEW.jpg";
import IPCA from "../assets/IPCA.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const ValuableClients = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box>
        <Typography
          sx={{
            color: "black",
            // fontFamily: `"Poppins", "sans-serif"`,
            // fontFamily: `"Righteous", "cursive"`,
            textAlign: "center",
            margin: "4rem 4rem",
            fontSize: {
              xs: "28px",
              sm: "32px",
              md: "36x",
              lg: "42px",
            },
          }}
        >
          VALUABLE CLIENTS
        </Typography>
      </Box>
      <Swiper
        className="clientSwiper"
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={isMobile ? "auto" : "4"}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        /* navigation={true} */
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="clientSwipe">
          <Box className="clientImg" component="img" src={LG}></Box>
        </SwiperSlide>
        <SwiperSlide className="clientSwipe">
          <Box component="img" className="clientImg" src={NMDC}></Box>
        </SwiperSlide>
        <SwiperSlide className="clientSwipe">
          <Box component="img" className="clientImg" src={Env}></Box>
        </SwiperSlide>
        <SwiperSlide className="clientSwipe">
          <Box component="img" className="clientImg" src={IPCA}></Box>
        </SwiperSlide>
        <SwiperSlide className="clientSwipe">
          <Box component="img" className="clientImg" src={max}></Box>
        </SwiperSlide>
        <SwiperSlide className="clientSwipe">
          <Box component="img" className="clientImg" src={Perfetti}></Box>
        </SwiperSlide>
        <SwiperSlide className="clientSwipe">
          <Box component="img" className="clientImg" src={Tamarind}></Box>
        </SwiperSlide>
        <SwiperSlide className="clientSwipe">
          <Box component="img" className="clientImg" src={AHP}></Box>
        </SwiperSlide>
        <SwiperSlide className="clientSwipe">
          <Box component="img" className="clientImg" src={DIOS}></Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ValuableClients;
