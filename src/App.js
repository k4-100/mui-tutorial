import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, Typography } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export default function ButtonAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <CameraAlt />
            </IconButton>
            <h2>Album Layout</h2>
          </Toolbar>
        </AppBar>
      </Box>
      <Typography
        align="center"
        variant="h2"
        gutterBottom={true}
        sx={{ mt: 5 }}
      >
        Album Layout
      </Typography>
      <Typography
        variant="h6"
        align="center"
        // lg={{ mx: 8 }}
        sx={{ mx: "auto", width: "50%", color: grey[800] }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel
        minus voluptatibus. Mollitia, maxime accusamus error nihil nam possimus
        impedit?
      </Typography>
    </>
  );
}
