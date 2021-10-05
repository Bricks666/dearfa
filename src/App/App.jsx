import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { HeaderContainer } from "../Components/Header/HeaderContainer";
import { NavigationContainer } from "../Components/Navigation/NavigationContainer";
import { MainWithLoading } from "../Components/Main/MainWithLoading";
import { FavoritFriendsContainer } from "../Components/FavoritFriends/FavoritFriendsContainer";

import AppStyle from "./App.module.css";

const App = (props) => {
  return (
    <Router>
      <div
        className={`${AppStyle.page} ${
          props.isLogin ? "" : AppStyle.notLoginPage
        }`}
      >
        <h1 className="visibility-hidden">Dear.Fa</h1>
        <HeaderContainer className={AppStyle.header} />
        {props.isLogin === false ? (
          <Redirect to="/login" />
        ) : (
          <Redirect exact from="/" to="/profile" />
        )}

        <Switch>
          <Route path={["/login", "/registration"]} />
          <Route path="">
            <NavigationContainer className={AppStyle.nav} />
            <FavoritFriendsContainer className={AppStyle.lastFriends} />
          </Route>
        </Switch>
        <MainWithLoading className={AppStyle.main} state={props.state} />
      </div>
    </Router>
  );
};

export { App };
