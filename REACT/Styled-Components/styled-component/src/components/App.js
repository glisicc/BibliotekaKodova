import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "components/pages/Login";
import Home from "./pages/Home";

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
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
