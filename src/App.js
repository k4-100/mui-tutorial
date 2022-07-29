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
        sx={{ mt: 9, px: 1, textAlign: "center", width: "min(450px, 100%)" }}
      >
        <Box sx={{ mb: 3 }}>
          <LockOutlined
            sx={{
              background: "purple",
              color: "white",
              borderRadius: "50%",
              p: 1,
            }}
          />
          <Typography variant="h5" sx={{ mt: 1 }}>
            Sign In
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
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
          sx={[
            {
              width: "100%",
              display: "flex",
              alignItems: "",
              "& .MuiFormControlLabel-label": {
                mt: 0.5,
              },
            },
          ]}
        />
        <Button
          variant="contained"
          sx={{ display: "block", width: 1, mt: 2, mb: 1 }}
        >
          Sign in
        </Button>
        <Box display={"flex"} sx={{ justifyContent: "space-between", my: 2 }}>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
          <Link href="#" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Box>
        <Typography color="text.secondary" sx={{ mt: 10 }}>
          Copyright ©{" "}
          <Link href="#" color="text.secondary">
            Your Website
          </Link>{" "}
          2022.
        </Typography>
      </Container>
    </>
  );
}
