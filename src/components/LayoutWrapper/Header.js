import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import Logo from "../../Images/logo.png";
import styles from "./Header.module.css";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import style from "../ProfileCard/MediaCard.module.css";
const pages = ["Help", "Account"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff00",
        boxShadow: "none",
        paddingLeft: { xl: "142px", xs: "0px" },
        paddingRight: { xl: "163px", xs: "0px" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            <img src={Logo} className={styles.logo} alt="home_logo"/>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            <Box
              sx={{
                display: {
                  md: "flex",
                  xs: "none",
                },
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <SearchIcon fontSize="small" />
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  fontFamily: `'Open Sans', sans-serif`,
                  textTransform: "capitalize",
                  fontSize: "14px",
                  lineHeight: "26px",
                  fontWeight: "400",
                }}
              >
                Search
              </Button>
            </Box>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: `'Open Sans', sans-serif`,
                  textTransform: "capitalize",
                  fontSize: "14px",
                  lineHeight: "26px",
                  fontWeight: "400",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: { xs: "flex-end" },
            }}
          >
            <Box
              sx={{
                display: {
                  md: "none",
                  xs: "flex",
                },
                alignItems: "center",
              }}
            >
              <SearchIcon
                sx={{ mr: "25px" }}
                className={style.card}
                fontSize="small"
              />
              <InventoryIcon sx={{ mr: "25px" }} fontSize="small" />
            </Box>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: `'Open Sans', sans-serif` }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
