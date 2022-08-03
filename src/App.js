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
  CssBaseline,
  CardHeader,
  Divider,
  Link,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CustomCard = () => {
  return (
    <Grid item xs={1}>
      <Card background="secondary" sx={{ width: "240px", mx: "auto", mb: 1 }}>
        <CardHeader
          title="Free"
          titleTypographyProps={{
            color: "primary",
          }}
          sx={{
            background: grey[800],
            textAlign: "center",
            fontWeight: "bold",
          }}
        />
        <CardContent
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              $0
            </Typography>

            <Typography
              variant="body1"
              sx={{
                alignSelf: "flex-end",
              }}
            >
              {" "}
              /mo{" "}
            </Typography>
          </Box>
          <Box>
            <Typography>10 users included</Typography>
            <Typography>2 GB of storage </Typography>
            <Typography>Help center access</Typography>
            <Typography>Email support</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            sx={{
              mx: "auto",
              width: 1,
            }}
          >
            Sign up for free
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const CustomList = () => {
  return (
    <Grid
      // xs={1}
      container
      item
      columns={{ xs: 1 }}
      sx={{
        mb: 2,
        flex: 1,
      }}
    >
      <Grid item xs={1}>
        <Typography>Company</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography>Team</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography>History</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography>Contact Us</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography>Locations</Typography>
      </Grid>
    </Grid>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
              <Button>Features</Button>
              <Button>Enterprise</Button>
              <Button>Support</Button>
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
          width: 1 / 2,
          mt: 1,
          mx: "auto",
          mb: 5,
        }}
      >
        Quickly build an effective pricing table for your potential customers
        with this layout. It's built with default MUI components with little
        customization.
      </Typography>

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        columns={{
          xs: 1,
          md: 3,
        }}
        sx={{
          width: "min(800px, 100%)",
          mx: "auto",
          mb: 3,
        }}
      >
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Grid>
      <Divider
        variant="middle"
        sx={{
          mb: 4,
        }}
      />
      <Grid
        container
        sx={{
          mx: 3,
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          flexGrow: 1,
          "& > *": {
            textAlign: "center",
          },
        }}
      >
        <CustomList />
        <CustomList />
        <CustomList />
        <CustomList />
      </Grid>
      <Typography
        align="center"
        variant="body2"
        sx={{
          my: 3,
        }}
      >
        Copyright ©
        <Link
          href="#"
          variant="body2"
          // underline="none"
          color="text.primary"
          sx={{ mx: 1 }}
        >
          Your Website
        </Link>
        2022.
      </Typography>
    </ThemeProvider>
  );
}
