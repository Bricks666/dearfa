import React from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";

import "./Page.css";

function Page() {
  return (
    <div className="page" id="1">
      <h1 className="visibility-hidden">Моя социальная сеть</h1>
      <Header className="page__header" />
      <Navigation className="page__nav" />
      <Profile className="page__main" />
    </div>
  );
}

export default Page;
