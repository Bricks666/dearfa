import React, { FC } from "react";

import classNames from "classnames";
import { useSelector } from "react-redux";
import { Logo } from "./Logo/Logo";
import { Link } from "react-router-dom";
import { LogoutButton } from "./Button/LogoutButton";
import { authSelectors } from "../../Selectors";
import { useProfileURL, useIsLogin } from "../../Hooks";
import { IOnlyClassComponent } from "../../Types/Common";

import HeaderStyle from "./Header.module.css";

export const Header: FC<IOnlyClassComponent> = ({ className }) => {
	const isLogin = useIsLogin();
	const login = useSelector(authSelectors.getLogin);
	const profilePath = useProfileURL();

	return (
		<header className={classNames(HeaderStyle.header, className)}>
			<Logo className={HeaderStyle.logo} src="/Images/logo.svg" alt="Logo" />
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
