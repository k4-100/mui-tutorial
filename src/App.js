import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Button,
  Container,
  IconButton,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

const CustomCard = () => {
  return (
    <Card sx={{ navWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/id/200/200"
        alt="image here"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">New</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

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
        color="text.secondary"
        align="center"
        gutterBottom={true}
        sx={{ mx: "auto", width: 1 / 2 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel
        minus voluptatibus. Mollitia, maxime accusamus error nihil nam possimus
        impedit?
      </Typography>
      <Container align="center" glutterBottom sx={{ width: 1 / 2, mt: 3 }}>
        <Button variant="contained" sx={{ mr: 1 }}>
          Main Call To Action
        </Button>
        <Button variant="outlined">Secondary Action</Button>
      </Container>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid container item>
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </Grid>
      </Grid>
    </>
  );
}
