import React from "react";
import { Switch, Route } from "react-router";
import { News } from "../News";
import { NotFound } from "../NotFound";
import { UserProfileConnect } from "../User";
import { MeConnect } from "../Me";
import { UsersConnect } from "../Users";
import { FriendsConnect } from "../Friends";
import { DialogsConnect } from "../Dialogs";
import { LoginConnect } from "../Login";
import { RegistrationConnect } from "../Registration/RegistrationConnect";

export const Main = ({ className }) => {
	return (
		<Switch>
			<Route exact path="/profile">
				<MeConnect className={className} />
			</Route>
			<Route exact path="/dialogs/:id?">
				<DialogsConnect className={className} />
			</Route>
			<Route exact path="/friends/:page">
				<FriendsConnect className={className} />
			</Route>
			<Route exact path="/news">
				<News className={className} />
			</Route>
			<Route exact path="/login">
				<LoginConnect className={className} />
			</Route>
			<Route exact path="/registration">
				<RegistrationConnect className={className} />
			</Route>
			<Route exact path="/users/:page">
				<UsersConnect className={className} />
			</Route>
			<Route exact path="/profile/:id">
				<UserProfileConnect className={className} />
			</Route>
			<Route>
				<NotFound className={className} />
			</Route>
		</Switch>
	);
};
