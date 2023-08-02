import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "../assets/logo.png";
import FlexBetween from "./FlexBetween";
import { Link as RouterLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      sx={{
        position: "static",

        background: "black",
        boxShadow: "none",
        padding: { xs: "1rem", sm: "1.2rem", md: "1.5rem", lg: "0.5rem" },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/*  LEFTSIDE */}
        <RouterLink to="/">
          <Box
            component="img"
            src={logo}
            width="120px"
            height="80px"
            sx={{
              width: {
                xs: "60px",
                sm: "80px",
                md: "100px",
                lg: "120px",
              },
              height: { xs: "40px", sm: "50px", md: "65px", lg: "80px" },
            }}
          ></Box>
        </RouterLink>

        {isMobile ? (
          <Box component="nav">
            <Drawer
              open={isSidebarOpen}
              onClose={() => {
                setIsSidebarOpen(false);
              }}
              sx={{ "& .MuiDrawer-paper": { backgroundColor: "black" } }}
            >
              <List>
                <Link to="/#About" smooth>
                  <ListItem
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <ListItemText>
                          <Typography
                            width="150px"
                            sx={{
                              fontFamily: `"Poppins", "sans-serif"`,
                              color: "white",
                              textDecoration: "none", // Remove underline on hover
                              "&:hover": {
                                textDecoration: "none", // Remove underline on hover
                              },
                            }}
                          >
                            About
                          </Typography>
                        </ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="/#Services" smooth>
                  <ListItem
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <ListItemText>
                          <Typography
                            width="150px"
                            sx={{
                              fontFamily: `"Poppins", "sans-serif"`,
                              color: "white",
                            }}
                          >
                            Services
                          </Typography>
                        </ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="/#Gallery" smooth>
                  <ListItem
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <ListItemText>
                          <Typography
                            width="150px"
                            sx={{
                              fontFamily: `"Poppins", "sans-serif"`,
                              color: "white",
                            }}
                          >
                            Gallery
                          </Typography>
                        </ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="/#Project" smooth>
                  <ListItem
                    onClick={() => {
                      setIsSidebarOpen(!isSidebarOpen);
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <ListItemText>
                          <Typography
                            width="150px"
                            sx={{
                              fontFamily: `"Poppins", "sans-serif"`,
                              color: "white",
                            }}
                          >
                            Project
                          </Typography>
                        </ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </Link>
              </List>
            </Drawer>
            <IconButton
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              sx={{
                color: "white",
                display: {
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "block",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        ) : (
          <FlexBetween
            gap="1.5rem"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
            }}
          >
            <Link to="/#About" smooth>
              <Typography fontSize="16px" sx={{ color: "white" }}>
                About
              </Typography>
            </Link>
            <Link to="/#Services" smooth>
              <Typography fontSize="16px" sx={{ color: "white" }}>
                Services
              </Typography>
            </Link>
            <RouterLink to="/Gallery">
              <Typography fontSize="16px" sx={{ color: "white" }}>
                Gallery
              </Typography>
            </RouterLink>
            <Link to="/#contact" smooth>
              <Typography fontSize="16px" sx={{ color: "white" }}>
                Contact
              </Typography>
            </Link>
            <Link to="/details">
              {" "}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFD60A",
                  color: "#003566",
                  fontWeight: "bold",
                }}
              >
                Get a Quote
              </Button>
            </Link>
          </FlexBetween>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
