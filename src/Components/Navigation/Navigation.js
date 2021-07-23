import "./Navigation.css";

function NavigationItem(props) {
  return (
    <li
      className={
        "navigation__item " +
        (props.isHidden === "true" ? "navigation__item_hidden" : "")
      }
    >
      <a
        className={
          "navigation__link " +
          (props.isCurrentPage === "true"
            ? "navigation__link_current-page"
            : "")
        }
        href="#1"
      >
        {props.linkText}
      </a>
    </li>
  );
}
function Navigation(props) {
  return (
    <nav className={props.className + " navigation"}>
      <ul className="navigation__list">
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
