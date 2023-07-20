import React from 'react'
import HomeScreen from "../scenes/HomeScreen";
import AboutUs from "../scenes/AboutUs";
import Services from "../scenes/Services";
import Testimonials from "../scenes/Testimonials";
import Gallery from "../scenes/Gallery";
import ValuableClients from "../scenes/ValuableClients";
import ContactUs from "../scenes/ContactUs"
const HomeWrapper = () => {
    return (
        <>
            <HomeScreen></HomeScreen>
            <AboutUs></AboutUs>
            <Services></Services>
            <Testimonials></Testimonials>
            <Gallery></Gallery>
            <ValuableClients></ValuableClients>
            <ContactUs></ContactUs>
        </>
    )
}

export default HomeWrapper