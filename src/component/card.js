import { Grid, Paper, Typography } from "@mui/material";
import "./home.css";

const landing = () => {
  return (
    <>
        <Grid item xs={3}>
          <Paper elivation={6}>
            <img
              src={require("../images/Gabbar.jpg")}
              className="home-img"
            ></img>
            <Typography variant="h6" component="h2">
              Gabbar Singh
            </Typography>
          </Paper>
        </Grid>
    </>
  );
};

export default landing;
