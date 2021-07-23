import NavigationStyle from "./Navigation.module.css";

function NavigationItem(props) {
  return (
    <li
      className={`${NavigationStyle.item} ${
        props.isHidden === "true" ? NavigationStyle.item_hidden : ""
      }`}
    >
      <a
        className={`${NavigationStyle.link} ${
          props.isCurrentPage === "true" ? NavigationStyle.link_currentPage : ""
        }`}
        href="#1"
      >
        {props.linkText}
      </a>
    </li>
  );
}
function Navigation(props) {
  return (
    <nav className={`${props.className} ${NavigationStyle.navigation}`}>
      <ul className={NavigationStyle.list}>
        <NavigationItem linkText="Профиль" isCurrentPage="true" />
        <NavigationItem linkText="Сообщения" />
        <NavigationItem linkText="Новости" />
        <NavigationItem linkText="Музыка" />
        <NavigationItem isHidden="true" />
        <NavigationItem linkText="Настройки" />
      </ul>
    </nav>
  );
}

export default Navigation;
