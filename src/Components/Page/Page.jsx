import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import FavoritFriends from "../FavoritFriends/FavoritFriends";

import PageStyle from "./Page.module.css";
import { Main } from "../Main/Main";

function Page(props) {
  return (
    <Router>
      <div className={PageStyle.page} id="1">
        <h1 className="visibility-hidden">Dear.Fa</h1>
        <Header className={PageStyle.header} />
        <Navigation className={PageStyle.nav} />
        <Main className={PageStyle.main} />
        <FavoritFriends className={PageStyle.lastFriends} />
      </div>
    </Router>
  );
}

export default Page;
