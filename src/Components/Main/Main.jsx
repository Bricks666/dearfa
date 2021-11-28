import React from "react";
import { Switch, Route } from "react-router";
import { News } from "../News";
import { NotFound } from "../NotFound";
import { Profile } from "../Profile";
import { Users } from "../Users";
import { Friends } from "../Friends";
import { Dialogs } from "../Dialogs";
import { Login } from "../Login";
import { Registration } from "../Registration/Registration";

export const Main = ({ className }) => {
	return (
		<Switch>
			<Route exact path="/profile/:id">
				<Profile className={className} />
			</Route>
			<Route exact path="/dialogs/:id?">
				<Dialogs className={className} />
			</Route>
			<Route exact path="/friends/:page">
				<Friends className={className} />
			</Route>
			<Route exact path="/news">
				<News className={className} />
			</Route>
			<Route exact path="/login">
				<Login className={className} />
			</Route>
			<Route exact path="/registration">
				<Registration className={className} />
			</Route>
			<Route exact path="/users/:page">
				<Users className={className} />
			</Route>
			<Route>
				<NotFound className={className} />
			</Route>
		</Switch>
	);
};
