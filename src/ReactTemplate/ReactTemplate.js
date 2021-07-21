import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";

import "./ReactTemplate.css";

function ReactTemplate() {
  return (
    <div className="page" id="1">
      <h1 className="visibility-hidden">Моя социальная сеть</h1>
      <Header className="page__header" />
      <Navigation className="page__nav" />
      <Main className="page__main" />
    </div>
  );
}

export default ReactTemplate;
