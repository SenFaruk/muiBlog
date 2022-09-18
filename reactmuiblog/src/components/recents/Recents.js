import React from "react";
import { Box, Grid } from "@mui/material";
import Reptile from "../../static/reptile.jpg";
import uyu from "../../static/uyu.jpeg";
import Card from "../card/Card";

const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs:1, sm:2, md:1}}>
        <Grid item>
          <Card Reptile={Reptile} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card Reptile={uyu} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card Reptile={uyu} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card Reptile={Reptile} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card Reptile={Reptile} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card Reptile={Reptile} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card Reptile={Reptile} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
