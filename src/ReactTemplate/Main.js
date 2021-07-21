import React from "react";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navigation from "./Components/Navigation/Navigation";

import "./Main.css";

function ReactTemplate() {
  return (
    <div className="page" id="1">
      <h1 className="visibility-hidden">Моя социальная сеть</h1>
      <Header className="page__header" />
      <Navigation className="page__nav" />
      <Profile className="page__main" />
    </div>
  );
}

export default ReactTemplate;
