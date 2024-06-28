import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import Main from "./Pages/Main";
import PricesAndServices from "./Pages/PricesAndServices";
import WindowPage from "./Pages/WindowPage.js";

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/main" />
            </Route>

            <Route path="/main">
                <Main />
            </Route>

            <Route path="/PricesAndServices">
                <PricesAndServices />
            </Route>

             <Route path="/pricesAndServices/:id">
                <WindowPage />
             </Route>

            <Route path="*">
                <p>НЕТ</p>
            </Route>
        </Switch>
    );
}

export default App;
