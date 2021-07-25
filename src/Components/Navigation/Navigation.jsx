import NavigationItem from "./NavigationItems/NavigationItems";

import NavigationStyle from "./Navigation.module.css";

function Navigation(props) {
  return (
    <nav className={`${props.className ?? ""} ${NavigationStyle.navigation}`}>
      <ul className={NavigationStyle.list}>
        <NavigationItem isCurrentPage>Профиль</NavigationItem>
        <NavigationItem>Сообщения</NavigationItem>
        <NavigationItem>Новости</NavigationItem>
        <NavigationItem>Музыка</NavigationItem>
        <NavigationItem isHidden></NavigationItem>
        <NavigationItem>Настройки</NavigationItem>
      </ul>
    </nav>
  );
}

export default Navigation;
