import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { NavigationConnect } from "../Components/Navigation";
import { MainConnect } from "../Components/Main";
import { FavoritFriendsConnect } from "../Components/FavoritFriends";
import { withLoading } from "../Components/Shared";
import { HeaderConnect } from "../Components/Header";

import AppStyle from "./App.module.css";

const AppWithoutLoading = React.memo(({ isLogin }) => {
	return (
		<Router>
			<div
				className={`${AppStyle.page} ${
					isLogin === false && AppStyle.notLoginPage
				}`}
			>
				<h1 className="visibility-hidden">Dear.Fa</h1>
				<HeaderConnect className={AppStyle.header} />

				<Switch>
					(<Redirect exact from="/" to="/profile" />)
				</Switch>
				<Switch>
					{isLogin ? (
						<Redirect exact from="/login" to="/profile" />
					) : (
						<Redirect to="/login" />
					)}
				</Switch>

				<Switch>
					<Route path={["/login", "/registration"]} />
					<Route>
						<NavigationConnect className={AppStyle.nav} />
						<FavoritFriendsConnect className={AppStyle.lastFriends} />
					</Route>
				</Switch>

				<MainConnect className={AppStyle.main} />
			</div>
		</Router>
	);
});
const AppWithLoading = withLoading(AppWithoutLoading);

export const App = (props) => {
	useEffect(() => {
		props.auth();
	}, []);

	return (
		<AppWithLoading
			{...props}
			className={`${props.className ?? ""} ${AppStyle.loading}`}
		/>
	);
};
