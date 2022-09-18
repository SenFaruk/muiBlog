import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import uyu from "../../static/uyu.jpeg";
import Rightbar from "../rightbar/Rightbar";

const Details = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${uyu})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          variant="h2"
          color="black"
          sx={{
            fontWeight: 900,
            padding: 10,
          }}
        >
          Clicked poste title
        </Typography>
      </Box>
      <Container>
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box
            flex={3}
            sx={{
              padding: "18px 100px 100px 100px",
            }}
          >
            <Typography
              m={4}
              color="gray"
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dolor molestiae id quisquam ex labore, nobis eveniet sint omnis
              pariatur error aliquid enim a, quaerat neque repellat veniam vitae
              voluptatem?
            </Typography>

            <CardMedia
            component="img"
            height="300px"
            image={uyu}
            
            />
            <Typography variant="h4" align="center" mt={2}>
              wait for it wait
            </Typography>
            <Typography
              m={4}
              color="gray"
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dolor molestiae id quisquam ex labore, nobis eveniet sint omnis
              pariatur error aliquid enim a, quaerat neque repellat veniam vitae
              voluptatem?
            </Typography>
          </Box>
          <Box flex={1}>
            <Rightbar/>


          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Details;
