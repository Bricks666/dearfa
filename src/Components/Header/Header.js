import Logo from "../Logo/Logo";
import "./Header.css";

function Header(props) {
  return (
    <header className={props.className + " header"}>
      <Logo className="header__logo" src="" alt="Logo" />
    </header>
  );
}

export default Header;
