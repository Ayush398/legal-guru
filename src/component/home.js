import "./home.css";
import Card from "./card.js";
import Landing from "./landing.js"
import Services from './services.js';
import Testimonial from "./testimonial";
import FAQ from "./faq"
import Footer from "./footer.js"
import Subscription from "./subscription.js"
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

const home = () => {
  return (
    <>
    <Landing />
    <Services/>
    <Card/>
    <Testimonial/>
    <Subscription/>
    <FAQ/>
    <Footer/>
    
    </>
  );
};

export default home;
