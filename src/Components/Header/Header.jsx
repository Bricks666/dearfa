import React from "react";

import { Logo } from "./Logo/Logo";
import { Link } from "react-router-dom";
import { LogoutButton } from "./Button/LogoutButton";

import HeaderStyle from "./Header.module.css";

function Header(props) {
	return (
		<header className={`${props.className ?? ""} ${HeaderStyle.header}`}>
			<Logo
				className={HeaderStyle.logo}
				src="/Images/logo.svg"
				alt="Logo"
				isLogin={props.isLogin}
			/>
			{props.isLogin ? (
				<div className={HeaderStyle.authorization}>
					<Link className={HeaderStyle.link} to="/profile">
						{props.login}
					</Link>{" "}
					<LogoutButton className={HeaderStyle.logout}>Выйти</LogoutButton>
				</div>
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
