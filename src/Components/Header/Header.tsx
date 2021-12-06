import React from "react";

import classNames from "classnames";
import { useSelector } from "react-redux";
import { Logo } from "./Logo/Logo";
import { Link } from "react-router-dom";
import { LogoutButton } from "./Button/LogoutButton";
import { authSelectors } from "../../Selectors";
import { useAuthURL, useIsLogin } from "../../Hooks";

import HeaderStyle from "./Header.module.css";

export const Header = ({ className }) => {
	const isLogin = useIsLogin();
	const login = useSelector(authSelectors.getLogin);
	const profilePath = useAuthURL();

	return (
		<header className={classNames(HeaderStyle.header, className)}>
			<Logo
				className={HeaderStyle.logo}
				src="/Images/logo.svg"
				alt="Logo"
				isLogin={isLogin}
			/>
			{isLogin ? (
				<div className={HeaderStyle.authorization}>
					<Link className={HeaderStyle.link} to={profilePath}>
						{login}
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
};
