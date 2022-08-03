import {
  AppBar,
  Paper,
  Toolbar,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  TextField,
  Grid,
  Button,
  Link,
} from "@mui/material";
import * as React from "react";

const App = () => {
  return (
    <>
      <AppBar
        position="static"
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
      <Paper
        elevation={3}
        sx={{
          mt: 5,
          py: 3,
          px: 3,
          mx: "auto",
          width: "min(100%, 500px)",
        }}
      >
        <Typography variant="h4" align="center">
          Checkout
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: 3,
          }}
        >
          <Typography>1 Shiping address</Typography>
          <Typography
            sx={{
              mx: "auto",
            }}
          >
            1 Shiping address
          </Typography>
          <Typography>1 Shiping address</Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            mt: 3,
            fontWeight: "bold",
          }}
        >
          Shipping Address
        </Typography>
        <FormGroup>
          <Grid
            container
            sx={{
              "& > *": {
                my: 2,
              },
            }}
          >
            <Grid
              item
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="standard-basic"
                label="First name *"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Last name *"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Address line 1 *"
                variant="standard"
                sx={{
                  width: 1,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Address line 2"
                variant="standard"
                sx={{
                  width: 1,
                }}
              />
            </Grid>
            <Grid
              item
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="standard-basic"
                label="City *"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="State/Province/Region"
                variant="standard"
              />
            </Grid>
            <Grid
              item
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="standard-basic"
                label="Zip / Postal code*"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Country*"
                variant="standard"
              />
            </Grid>
          </Grid>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Use this address for payment details"
            />
          </FormGroup>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              ml: "auto",
            }}
          >
            Next
          </Button>
        </FormGroup>
      </Paper>

      <Typography
        align="center"
        sx={{
          mt: 5,
        }}
      >
        Copyright © <Link color="text.secondary"> Your website</Link> 2022
      </Typography>
    </>
  );
};
export default App;
