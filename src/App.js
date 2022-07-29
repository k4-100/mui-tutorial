import * as React from "react";
import { LockOutlined, LockRounded } from "@mui/icons-material";
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
      <Container
        sx={{ mt: 8, px: 1, textAlign: "center", width: "min(450px, 100%)" }}
      >
        <Box>
          <LockOutlined
            sx={{
              background: "purple",
              color: "white",
              borderRadius: "50%",
              p: 1,
            }}
          />
          <Typography variant="h5" sx={{ mt: 1, mb: 2 }}>
            Sign In
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="email"
            label="Email Address *"
            variant="outlined"
            sx={{ mb: 3 }}
          />
          <TextField id="password" label="Password *" variant="outlined" />
        </Box>
        <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
          sx={{ width: "100%" }}
        />
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
