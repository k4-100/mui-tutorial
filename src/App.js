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
  const [rowSpacing, setRowSpacing] = React.useState(1);
  const [columnSpacing, setColumnSpacing] = React.useState(1);

  // const handleRadioChange = (e) => {
  //   setSpacing(Number(e.target.value));
  // };
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={spacing}
          rowSpacing={rowSpacing}
          columnSpacing={columnSpacing}
        >
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
        <FormLabel id="spacing-radio">spacing</FormLabel>
        <RadioGroup
          aria-labelledby="spacing-radio"
          name="spacing-radio"
          value={spacing}
          row
          onChange={(e) => setSpacing(Number(e.target.value))}
        >
          <FormControlLabel value="0" control={<Radio />} label="0" />
          <FormControlLabel value="0.5" control={<Radio />} label="0.5" />
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
        </RadioGroup>

        <FormLabel id="row-spacing-radio"> row spacing</FormLabel>
        <RadioGroup
          aria-labelledby="row-spacing-radio"
          name="row-spacing-radio"
          value={rowSpacing}
          row
          onChange={(e) => setRowSpacing(Number(e.target.value))}
        >
          <FormControlLabel value="0" control={<Radio />} label="0" />
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="5" control={<Radio />} label="5" />
          <FormControlLabel value="10" control={<Radio />} label="10" />
        </RadioGroup>

        <FormLabel id="column-spacing-radio">column spacing</FormLabel>
        <RadioGroup
          aria-labelledby="column-spacing-radio"
          name="column-spacing-radio"
          value={columnSpacing}
          row
          onChange={(e) => setColumnSpacing(Number(e.target.value))}
        >
          <FormControlLabel value="0" control={<Radio />} label="0" />
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="5" control={<Radio />} label="5" />
          <FormControlLabel value="10" control={<Radio />} label="10" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default App;
