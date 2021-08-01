import React from "react";
import NavigationItem from "./NavigationItems/NavigationItems";

import NavigationStyle from "./Navigation.module.css";

function Navigation(props) {
  return (
    <nav className={`${props.className ?? ""} ${NavigationStyle.navigation}`}>
      <ul className={NavigationStyle.list}>
        <NavigationItem to="/profile">Профиль</NavigationItem>
        <NavigationItem to="/dialogs">Сообщения</NavigationItem>
        <NavigationItem to="/friends">Друзья</NavigationItem>
        <NavigationItem to="/news">Новости</NavigationItem>
        <NavigationItem to="/musics">Музыка</NavigationItem>
        <NavigationItem to="/settings">Настройки</NavigationItem>
      </ul>
    </nav>
  );
}

export default Navigation;
