import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "black",
        height: "300px",
      }}
    >
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography color="white" align="center">
            contac us
          </Typography>
          <Typography color="white" align="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </Typography>
          <Typography color="white" align="center">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography color="white" align="center">
            Lorem, ipsum.
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color="white" align="center">
            data policy
          </Typography>
          <Typography color="white" align="center">
            cookies
          </Typography>
          <Typography color="white" align="center">
            data safety
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color="white"  align="center">
            Categories
          </Typography>
          <Typography color="white" variant="body2" align="center">
            Kids
          </Typography>
          <Typography color="white" variant="body2" align="center">
            women
          </Typography>
          <Typography color="white" variant="body2" align="center">
            men
          </Typography>
        </Box>


        <Box >
          <Typography color="white" variant="body2" align="center">
            Follow Us
          </Typography>
          <Box
          sx={{
            display: "flex",
            gap: 2,
            color:"white",
          }}
        >
          <Facebook />
          <Instagram />
          <Twitter />
        </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
