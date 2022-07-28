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
  Link,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

const CustomCard = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/id/250/500"
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

const Footer = () => {
  return (
    <footer>
      <Container sx={{ width: 1 / 2, my: 7 }}>
        <Typography variant="h6" align="center" sx={{ mb: 1 }}>
          Footer
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Something here to give the footer a purpose
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Copyright ©
          <Link
            href="#"
            color="text.secondary"
            underline="always"
            sx={{ mx: 0.5 }}
          >
            Your Website
          </Link>
          2022
        </Typography>
      </Container>
    </footer>
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
      <Container>
        <Typography
          variant="h5"
          color="text.secondary"
          align="center"
          // gutterBottom={true}
          sx={{ mx: "auto", width: 1 / 2 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel
          minus voluptatibus. Mollitia, maxime accusamus error nihil nam
          possimus impedit?
        </Typography>
      </Container>
      <Container align="center" glutterBottom sx={{ width: 1 / 2, mt: 3 }}>
        <Button variant="contained" sx={{ mx: 1, mt: 1 }}>
          Main Call To Action
        </Button>
        <Button variant="outlined" sx={{ mx: 1, mt: 1 }}>
          Secondary Action
        </Button>
      </Container>
      <Container>
        <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3 }} mt={4}>
          <Grid item xs={1}>
            <CustomCard />
          </Grid>
          <Grid item xs={1}>
            <CustomCard />
          </Grid>
          <Grid item xs={1}>
            <CustomCard />
          </Grid>
          <Grid item xs={1}>
            <CustomCard />
          </Grid>
          <Grid item xs={1}>
            <CustomCard />
          </Grid>
          <Grid item xs={1}>
            <CustomCard />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
