import Logo from "../Logo/Logo";

import HeaderStyle from "./Header.module.css";

function Header(props) {
  return (
    <header className={`${props.className?? ""} ${HeaderStyle.header}`}>
      <Logo className={HeaderStyle.logo} src="./../../Images/logo.svg" alt="Logo" />
    </header>
  );
}

export default Header;
