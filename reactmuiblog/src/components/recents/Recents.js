import React from "react";
import { Box, Grid } from "@mui/material";
import Reptile from "../../static/reptile.jpg";
import Card from "../card/Card";

const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item>
          <Card Reptile={Reptile} />
        </Grid>
        <Grid item xs={6}>
          <Card Reptile={Reptile} />
        </Grid>
        <Grid item xs={6}>
          <Card Reptile={Reptile} />
        </Grid>
        <Grid item xs={6}>
          <Card Reptile={Reptile} />
        </Grid>
        <Grid item xs={6}>
          <Card Reptile={Reptile} />
        </Grid>
        <Grid item xs={6}>
          <Card Reptile={Reptile} />
        </Grid>
        <Grid item xs={6}>
          <Card Reptile={Reptile} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
