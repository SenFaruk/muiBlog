import React from "react";
import { Box, Typography } from "@mui/material";
import Uyu from "../../static/uyu.jpeg";


const Hero = () => {
  return (
    <Box>
      <Typography
        align="center"
        variant="h3"
        sx={{
          fontWeight: 1000,
        }}
      >
        fashing<b style={{ color: "red" }}>Blog</b>
      </Typography>

      <Typography
        align="center"
        variant="body2"
        sx={{
          fontWeight: 200,
        }}
      >
        we make you look the better of you!
      </Typography>

      <Box
        sx={{
          background: `url(${Uyu})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment:"fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 550,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "80%",
              sm: "80%",
              md: "80%",
              lg: "60%",
              xl: "60%",
            },

            padding: {
              xs: 1,
              sm: 5,
              md: 5,
              lg: 20,
              xl: 20,
            },
          }}
        >
          <Box
            sx={{
              background: "white",
              opacity: "0.8",
              borderRadius: "30px",
            }}
          >
            <Typography align="center" variant="h6" color="tomato" pt={4}>
              Trending Styles{" "}
            </Typography>
            <Typography align="center" variant="h6">
              life is boring without fashing
            </Typography>
            <Typography align="center" variant="h6" padding="10px 11px">
              Lorem ipsum dolor sit amet.{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
