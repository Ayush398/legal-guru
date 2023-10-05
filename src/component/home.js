import "./home.css";
import Card from "./card.js";
import Landing from "./landing.js";
import Testimonial from "./testimonial";
import FAQ from "./faq"
import Footer from "./footer.js"
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

const home = () => {
  return (
    <>
    <Landing />
    <Card/>
    <Testimonial/>
    <FAQ/>
    <Footer/>
    </>
  );
};

export default home;
