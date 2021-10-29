import React from "react";
import "./app.css";
import Home from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
