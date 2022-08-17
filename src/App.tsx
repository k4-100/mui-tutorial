import React from "react";
import styled from "@emotion/styled";

const CustomComponent = styled.div`
  color: blue;
  background: green;
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
  font-size: 20px;
  width: 300px;
  margin: 2rem auto;
`;

const App: React.FC = () => {
  return (
    <>
      <CustomComponent>words</CustomComponent>
    </>
  );
};

export default App;
