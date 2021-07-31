import React from "react";
import NavigationItem from "./NavigationItems/NavigationItems";

import NavigationStyle from "./Navigation.module.css";

function Navigation(props) {
  return (
    <nav className={`${props.className ?? ""} ${NavigationStyle.navigation}`}>
      <ul className={NavigationStyle.list}>
        <NavigationItem to="/profile">Профиль</NavigationItem>
        <NavigationItem to="/dialogs">Сообщения</NavigationItem>
        <NavigationItem to="/News">Новости</NavigationItem>
        <NavigationItem to="/Musics">Музыка</NavigationItem>
        <NavigationItem to="/Settings">Настройки</NavigationItem>
      </ul>
    </nav>
  );
}

export default Navigation;
