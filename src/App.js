import React from "react";
import "./App.css";

import { Container, Grid } from "@material-ui/core";

import Profile from "./components/Profile/Profile.components";
import Header from "./components/Header/Header.components";
import Portfolio from "./pages/Portfolio/Portfolio.pages";
import Resume from "./pages/Resume/Resume.pages";
import Home from "./pages/Home/Home.pages";
import Footer from "./components/Footer/Footer.components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact.pages";

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={5}>
        <Grid item lg={3} md={4}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content container_shadow">
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
