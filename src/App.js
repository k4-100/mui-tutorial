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

export default function App() {
  return (
    <>
      <AppBar
        sx={{
          position: "static",
        }}
      >
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
      <Typography>Pricing</Typography>
      <Typography>
        Quickly build an effective pricing table for your potential customers
        with this layout. It's built with default MUI components with little
        customization.
      </Typography>

      <Grid
        container
        sx={{
          background: "red",
          mt: 5,
        }}
      >
        <Grid item>
          <Card>
            <CardContent>adsada</CardContent>
            <CardActions>
              <Button>words</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card item>
            <CardContent>adsada</CardContent>
            <CardActions>
              <Button>words</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card item>
            <CardContent>adsada</CardContent>
            <CardActions>
              <Button>words</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container>
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
      </Grid>
      <Typography>Copyright © Your Website 2022.</Typography>
    </>
  );
}
