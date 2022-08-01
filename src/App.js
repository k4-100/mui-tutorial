import {
  AppBar,
  Button,
  Toolbar,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import * as React from "react";

const CustomCard = () => {
  return (
    <Grid item>
      <Card>
        <CardContent>adsada</CardContent>
        <CardActions>
          <Button>words</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const CustomList = () => {
  return (
    <Grid item container>
      <Grid item>
        <Typography>Company</Typography>
      </Grid>
      <Grid item>
        <Typography>Company</Typography>
      </Grid>
      <Grid item>
        <Typography>Company</Typography>
      </Grid>
    </Grid>
  );
};

export default function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            position: "static",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Company name
            </Typography>
            <Box>
              <Button sx={{ color: "white" }}>Features</Button>
              <Button sx={{ color: "white" }}>Enterprise</Button>
              <Button sx={{ color: "white" }}>Support</Button>
              <Button variant="outlined" color="secondary">
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mt: 10,
        }}
      >
        Pricing
      </Typography>
      <Typography
        color="text.secondary"
        variant="h5"
        align="center"
        sx={{
          width: 2 / 3,
          mt: 1,
          mx: "auto",
        }}
      >
        Quickly build an effective pricing table for your potential customers
        with this layout. It's built with default MUI components with little
        customization.
      </Typography>

      <Grid container>
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Grid>
      <Grid container>
        <CustomList />
        <CustomList />
        <CustomList />
        <CustomList />
      </Grid>
      <Typography>Copyright © Your Website 2022.</Typography>
    </>
  );
}
