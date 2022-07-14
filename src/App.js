import React from "react";
import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Item>xs=12 sm=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Item>xs=6 sm={4}</Item>
          </Grid>
          <Grid item xs={2} sm={12}>
            <Item>xs=2 ms=12</Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item>xs=12 sm=4</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
