import React from "react";
import { Button } from "components/common";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`//add global style to app
  body{
    background-color: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <h1>Hello</h1>
      <Button>TEST</Button>
    </>
  );
}

export default App;
