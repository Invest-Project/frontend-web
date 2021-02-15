import React from "react";
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";
import LandingPage from "./container/home/LandingPage";
import StockProfile from "./container/stock/StockProfile";
import NavBar from "./presentation/NavBar";

const RootRoute = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path={`/stock/:code`}>
        {({ match: { params: { code }}}) => (
          <StockProfile code={code} />
        )}
      </Route>
      {/* <PrivateRoute isLoggedIn={isLoggedIn} path="/private">
        <ProtectedPages />
      </PrivateRoute> */}
    </Switch>
  </Router>
);

export default RootRoute;
