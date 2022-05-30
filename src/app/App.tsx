import React, { FC, useCallback, useEffect } from "react";
import classNames from "classnames";
import { Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Navigation } from "@/components/Header/Navigation/Navigation";
import { FavoritFriends } from "@/components/FavoritFriends";
import { Header } from "@/components/Header";
import { routes } from "@/routes";
import { authThunk, selectAuthLogin } from "@/models/auth";
import { useTypedDispatch, useTypedSelector } from "@/hooks";

import AppStyle from "./App.module.css";

export const App: FC = () => {
	const isLogin = !!useTypedSelector(selectAuthLogin);
	const dispatch = useTypedDispatch();
	const auth = useCallback(() => {
		dispatch(authThunk());
	}, [dispatch]);

	useEffect(() => {
		auth();
	}, [auth]);

	/**TODO: Добавить загрузку */

	return (
		<Box
			className={classNames(AppStyle.page, {
				[AppStyle.notLoginPage]: isLogin === false,
			})}
		>
			<Header className={AppStyle.header} />
			<Navigation className={AppStyle.nav} />
			<FavoritFriends className={AppStyle.lastFriends} />
			<Routes>
				{routes.map(({ Component, path }) => (
					<Route
						path={path}
						element={<Component className={AppStyle.main} key={path} />}
						key={path}
					/>
				))}
			</Routes>
		</Box>
	);
};
