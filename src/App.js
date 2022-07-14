import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { CheckBox } from "@mui/icons-material";
import { FormControlLabel } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import { green, orange } from "@mui/material/colors";
import "@fontsource/roboto";

import { Typography } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: green[400],
      contrastText: "white",
    },
    secondary: {
      main: orange[400],
    },
  },
});

// const ButtonStyled = () => {
//   const classes = useStyles();
//   return <Button className={classes.root}>Test Styled Button</Button>;
// };

// const MyComponent = styled("div")({
//   color: "darkslategray",
//   backgroundColor: "aliceblue",
//   padding: 8,
//   borderRadius: 4,
// });

const CheckboxExample = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <CheckBox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="testing Checkbox"
    />
  );
};

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <header className="App-header">
          {/* <MyThemeComponent>sda</MyThemeComponent> */}
          {/* <MyThemeComponent>sda</MyThemeComponent>
          <MyThemeComponent>sda</MyThemeComponent> */}

          <Typography variant="subtitle1">Hello Wordl!</Typography>
          <TextField variant="filled" color="secondary" />
          <CheckboxExample />
          <ButtonGroup>
            <Button
              startIcon={<SaveIcon />}
              onClick={() => alert("hello")}
              // disabled
            >
              Save
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={() => alert("hello")}
              // disabled
            >
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
