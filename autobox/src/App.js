import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import PricesAndServices from "./Pages/PricesAndServices";
import WindowPage from "./Pages/WindowPage";
import Contacts from "./Pages/Contacts";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/main" />
      </Route>
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/pricesAndServices" exact>
        <PricesAndServices />
      </Route>
      <Route path="/contacts" exact>
        <Contacts />
      </Route>
      <Route path="/pricesAndServices/:id">
        <WindowPage />
      </Route>
      <Route path="*">
        <p>Page Not Found</p>
      </Route>
    </Switch>
  );
}

export default App;
