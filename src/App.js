import { AppBar, Button, Toolbar, Box } from "@mui/material";
import * as React from "react";

export default function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <h3>Company name</h3>
          <Box>
            <Button variant="text" color="error">
              Features
            </Button>
            <Button color="error">Enterprise</Button>
            <Button color="error">Support</Button>
            <Button variant="outlined" color="error">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
