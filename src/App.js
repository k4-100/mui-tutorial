import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { CheckBox } from "@mui/icons-material";
import { FormControlLabel } from "@mui/material";

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
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
        <ButtonGroup variant="contained" size="large">
          <Button
            startIcon={<SaveIcon />}
            onClick={() => alert("hello")}
            // disabled
            style={{
              fontSize: 14,
            }}
            color="primary"
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => alert("hello")}
            // disabled
            style={{
              fontSize: 14,
            }}
            color="secondary"
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
