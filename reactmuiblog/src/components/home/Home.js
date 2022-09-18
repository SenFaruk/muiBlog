import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Hero from '../hero/Hero';
import Categories from "../category/Categories";
import Recents from "../recents/Recents";


const Home = () => {
  return (
    <Box>
      <Hero/>
      <Container>
      <Categories/>
      <hr/>

     
      <Stack direction={"row"} spacing={8} mt={8}>
        <Box flex={3}>
          <Recents/>
        </Box>
        <Box flex={1} sx={{
          padding:"18px 100px 100px 100px"
        }}>
          Rightbar
        </Box>
        
      </Stack>
      </Container>
    </Box>
  );
};

export default Home;
