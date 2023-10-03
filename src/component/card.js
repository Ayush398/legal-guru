import { Grid, Paper, Typography, Box } from "@mui/material";
import "./home.css";

const landing = () => {
  return (
    <>
      <Grid item xs={3}>
        <Paper elivation={6}>
          <img src={require("../images/Gabbar.jpg")} className="home-img"></img>
          <Box paddingX={2}>
            <Typography variant="h6" component="h2">
              Gabbar Singh
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default landing;
