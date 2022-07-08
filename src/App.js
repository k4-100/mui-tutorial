import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          startIcon={<SaveIcon />}
          onClick={() => alert("hello")}
          // disabled
          style={{
            fontSize: 14,
          }}
          variant="contained"
          color="secondary"
          size="large"
          href="#"
          endIcon={<SaveIcon />}
        >
          Hi uss
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
