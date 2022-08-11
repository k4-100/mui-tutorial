import { Notifications, ArrowBackIosNew } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Drawer,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";

const drawerWidth = 240;

const App: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Typography>
            <IconButton>
              <Notifications
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar
            sx={{
              pr: "10px !important",
            }}
          >
            <IconButton
              size="large"
              sx={{
                ml: "auto",
              }}
            >
              <ArrowBackIosNew
                sx={{ color: "text.secondary", fontSize: "15px" }}
              />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            {[
              "Dashboard",
              "Orders",
              "Customers",
              "Reports",
              "Integrations",
            ].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <Notifications
                    sx={{
                      color: "text.secondary",
                    }}
                  />
                  <ListItemText
                    primary={text}
                    sx={{
                      ml: "30px",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListSubheader
              component="div"
              id="second-list-subheader"
              sx={{
                textAlign: "center",
              }}
            >
              Nested List Items
            </ListSubheader>
            {["Current month", "Last quarter", "Year-end sale"].map(
              (text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <Notifications sx={{ color: "text.secondary" }} />
                    <ListItemText
                      primary={text}
                      sx={{
                        ml: "30px",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default App;
