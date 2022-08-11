import { Notifications } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
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
    </>
  );
};

export default App;
