import * as React from "react";
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  Typography,
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";

export default function App() {
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <LockOutlined fontSize="large" color="secondary" />
        <Typography>Sign In</Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField id="email" label="Email Address *" variant="outlined" />
          <TextField id="password" label="Password *" variant="outlined" />
        </Box>
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Button variant="contained" sx={{ display: "block" }}>
          Sign in
        </Button>
        <Box>
          <Link href="#">Forgot password</Link>
          <Link href="#">Don't have an account? Sign Up</Link>
        </Box>
        <Typography>
          Copyright © <Link href="#">Your Website</Link> 2022.
        </Typography>
      </Container>
    </>
  );
}
