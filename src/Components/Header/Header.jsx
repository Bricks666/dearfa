import React from "react";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";

import HeaderStyle from "./Header.module.css";

function Header(props) {
  return (
    <header className={`${props.className ?? ""} ${HeaderStyle.header}`}>
      <Logo className={HeaderStyle.logo} src="/Images/logo.svg" alt="Logo" />
      <div className={HeaderStyle.authorization}>
        <Link className={HeaderStyle.link} to="/login">
          Войти
        </Link>
        /
        <Link className={HeaderStyle.link} to="/registration">
          Зарегистрироваться
        </Link>
      </div>
    </header>
  );
}

export { Header };
