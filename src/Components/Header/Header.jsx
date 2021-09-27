import React from "react";
import { Logo } from "./Logo/Logo";
import { Link } from "react-router-dom";

import HeaderStyle from "./Header.module.css";

function Header(props) {
  console.log(props);
  return (
    <header className={`${props.className ?? ""} ${HeaderStyle.header}`}>
      <Logo
        className={HeaderStyle.logo}
        src="/Images/logo.svg"
        alt="Logo"
        isLogin={props.isLogin}
      />
      {props.isLogin ? (
        <Link className={HeaderStyle.link} to="/profile">
          {props.login}
        </Link>
      ) : (
        <div className={HeaderStyle.authorization}>
          <Link className={HeaderStyle.link} to="/login">
            Войти
          </Link>
          /
          <Link className={HeaderStyle.link} to="/registration">
            Зарегистрироваться
          </Link>
        </div>
      )}
    </header>
  );
}

export { Header };
