import * as React from "react";
import { styled } from "@mui/system";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

const App = () => {
  return (
    <>
      <MyComponent>text here</MyComponent>
    </>
  );
};

export default App;
