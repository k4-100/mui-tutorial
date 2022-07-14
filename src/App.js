import React from "react";
import {
  Grid,
  Box,
  Paper,
  RadioGroup,
  FormControl,
  Radio,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [spacing, setSpacing] = React.useState(1);

  const handleRadioChange = (e) => {
    setSpacing(Number(e.target.value));
  };
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={spacing}>
          <Grid item xs={12} sm={4}>
            <Item>xs=12 sm=4</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Item>xs=6 sm={4}</Item>
          </Grid>
          <Grid item xs={4} sm={12}>
            <Item>xs=2 ms=12</Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item>xs=12 sm=4</Item>
          </Grid>
        </Grid>
      </Box>
      <hr />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={spacing}
          row
          onChange={(e) => handleRadioChange(e)}
        >
          <FormControlLabel value="0" control={<Radio />} label="0" />
          <FormControlLabel value="0.5" control={<Radio />} label="0.5" />
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default App;
