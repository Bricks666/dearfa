import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Navigation } from "../Components/Navigation/Navigation";
import { Main } from "../Components/Main/Main";
import { FavoritFriendsContainer } from "../Components/FavoritFriends/FavoritFriendsContainer";

import AppStyle from "./App.module.css";

function App(props) {
  return (
    <Router>
      <div className={AppStyle.page}>
        <h1 className="visibility-hidden">Dear.Fa</h1>
        <Header className={AppStyle.header} />
        <Navigation
          className={AppStyle.nav}
          navigationItems={props.state.navigation}
        />
        <Main
          className={AppStyle.main}
          state={props.state}
          dispatch={props.dispatch}
        />
        <Switch>
          <Route path={["/login", "/registration"]} />
          <Route path="">
            <FavoritFriendsContainer className={AppStyle.lastFriends} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export { App };
