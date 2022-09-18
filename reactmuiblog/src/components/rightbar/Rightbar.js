import * as React from "react";

import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import reptile from "../../static/reptile.jpg";
import uyu from "../../static/uyu.jpeg";

const Rightbar = () => {
  return (
    <Box>
      <Typography align="center" color="white" bgcolor="black">
        most Popular
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{
                height: 80,
                width: 80,
              }}
              variant="square"
              src={reptile}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          ></ListItemText>
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{
                height: 80,
                width: 80,
              }}
              variant="square"
              src={uyu}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          ></ListItemText>
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{
                height: 80,
                width: 80,
              }}
              variant="square"
              src={reptile}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          ></ListItemText>
        </ListItem>
        <Divider variant="fullWidth" component={"li"}/>

      </List>
      <Typography align="center" color="white" bgcolor="black">
        About Us
      </Typography>
      <Card cardImage={uyu}/>

    
    </Box>
  );
};

export default Rightbar;
