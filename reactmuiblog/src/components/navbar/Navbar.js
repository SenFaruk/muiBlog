import React,{useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const MenuBox = styled(Box)({
  display: "flex",
  gap: 30,
});

const SearchBox = styled(Box)({
  display: "flex",
  gap: 5,
});

const MenuItems = [
  { Name: "Home", Link: "/" },
  { Name: "Products", Link: "#" },
  { Name: "Portfolio", Link: "#" },
  { Name: "Blog", Link: "#" },
  { Name: "Contact Us", Link: "#" },
];



const Navbar = () => {
  const [open, setopen] = useState(false)
  return (
    <AppBar
      sx={{
        background: "black",
        position:"static",
      }}
    >
      <StyledToolbar>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Facebook />
          <Instagram />
          <Twitter />
        </Box>
        <MenuBox
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
        >
          {MenuItems.map((item) => (
            <MenuItem
              sx={{
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              {item.Name}
            </MenuItem>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="search....." sx={{ color: "white" }} />
        </SearchBox>
        <MenuIcon
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
            },
          }}
          onClick={()=>setopen(!open)}
        />
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setopen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            width: 350,
            height: "900vh",
          }}
        >
          {MenuItems.map((item) => (
            <MenuItem
              sx={{
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              {item.Name}
            </MenuItem>
          ))}

        </Box>
       
      </Menu>
    </AppBar>
  );
};

export default Navbar;
