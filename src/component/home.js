import "./home.css";
import Card from "./card.js";
import Landing from "./landing.js";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

const home = () => {
  return (
    <>
    <Landing />
      <Container>
        <Grid container spacing={5}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Container>
    </>
  );
};

export default home;