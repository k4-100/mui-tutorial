import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
