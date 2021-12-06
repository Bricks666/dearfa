import classNames from "classnames";
import React from "react";

export const renderUsersList = (Card, users, ...className) => {
	return users.map((user) => {
		return <Card className={classNames(className)} key={user.id} user={user} />;
	});
};
