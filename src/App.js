import { AppBar, Toolbar, Typography } from "@mui/material";
import * as React from "react";

const App = () => {
  return (
    <>
      <AppBar
        sx={{
          background: "white",
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="text.primary">
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default App;
