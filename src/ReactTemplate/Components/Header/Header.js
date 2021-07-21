import "./Header.css";

function Header(props) {
  return (
    <header className={props.className + " header"}>
      <img className="header__logo" src="" alt="Логотип" />
    </header>
  );
}

export default Header;
