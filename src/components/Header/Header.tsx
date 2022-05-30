import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Logo } from "./Logo/Logo";
import { Link } from "react-router-dom";
import { selectAuthLogin } from "@/models/auth";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { StandardProps } from "@/interfaces/components";
import { ProfileMenu } from "./ProfileMenu";

import HeaderStyle from "./Header.module.css";

export const Header: FC<StandardProps> = ({ className }) => {
	const login = useSelector(selectAuthLogin);
	const isLogin = !!login;

	return (
		<AppBar className={className} position="static">
			<Toolbar>
				<Typography className="visibility-hidden" variant="h1">
					Dear.Fa
				</Typography>
				<Logo className={HeaderStyle.logo} src="/Images/logo.svg" alt="Logo" />
				<div className={HeaderStyle.authorization}>
					{isLogin ? (
						<ProfileMenu />
					) : (
						<>
							<Button
								to="/login"
								component={Link}
								variant="text"
								color="inherit"
							>
								Войти
							</Button>
							/
							<Button
								to="/registration"
								component={Link}
								variant="text"
								color="inherit"
							>
								Зарегистрироваться
							</Button>
						</>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
};
