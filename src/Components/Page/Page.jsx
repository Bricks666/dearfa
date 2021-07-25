import React from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";
import Dialogs from "../Dialogs/Dialogs";
import FavoritFriends from "../FavoritFriends/FavoritFriends";

import PageStyle from "./Page.module.css";

function Page() {
  return (
    <div className={PageStyle.page} id="1">
      <h1 className="visibility-hidden">Dear.Fa</h1>
      <Header className={PageStyle.header} />
      <Navigation className={PageStyle.nav} />
      <Profile className={PageStyle.main} />
      <FavoritFriends className={PageStyle.lastFriends} />
      {/* <Dialogs  className={PageStyle.main}/> */}
    </div>
  );
}

export default Page;
