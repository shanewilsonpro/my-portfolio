import React from "react";
import "./App.css";

import { Container, Grid } from "@material-ui/core";

import Profile from "./components/Profile/Profile.components";
import Header from "./components/Header/Header.components";
import Portfolio from "./pages/Portfolio/Portfolio.pages";
import Resume from "./pages/Resume/Resume.pages";
import Footer from "./components/Footer/Footer.components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} lg={3}>
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
              <Route path="/">
                <Resume />
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
