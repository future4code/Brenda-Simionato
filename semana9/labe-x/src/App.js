import React from "react"
import styled from "styled-components"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ListTripsPage from "./pages/ListTripsPage"
import AdminHomePage from "./pages/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage"
import CreateTripPage from "./pages/CreateTripPage"
import LoginPage from "./pages/LoginPage"
import TripDetailsPage from "./pages/TripDetailsPage"



const Container = styled.div`
display: block;
text-align: center;
color: slategray;
`


export default function App() {



  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={"/"}>
         <Container><h1>LabeX</h1></Container> 
          <HomePage></HomePage>
        </Route>

        <Route exact path={"/public"}>
          <ListTripsPage></ListTripsPage>

        </Route>

        <Route exact path={"/login"}>
          <LoginPage></LoginPage>
        </Route>

        <Route exact path={"/private"}>
          <AdminHomePage></AdminHomePage>

        </Route>

        <Route exact path={"/formPage"}>
          <ApplicationFormPage></ApplicationFormPage>
        </Route>


        <Route exact path={"/createTrip"}>
          <CreateTripPage></CreateTripPage>
        </Route>

        <Route exact path={"/details/"}>
          <TripDetailsPage></TripDetailsPage>
        </Route>
        

      </Switch>
    </BrowserRouter>
  )
}