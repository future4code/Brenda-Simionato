import React from "react";
import Cards from "./Cards";
import HomePage from "./HomePage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function Routers() {

    return (

        <BrowserRouter>

            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/cards"}>
                    <Cards />
                </Route>
            </Switch>

        </BrowserRouter>

    )
}