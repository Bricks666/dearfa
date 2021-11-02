import React from "react";

export const renderUsersList = (Card, users, ...className) => {
	return users.map((user) => {
		return (
			<Card
				className={className.reduce(
					(totalClassName, className) => `${totalClassName} ${className}`,
					""
				)}
				key={user.id}
				user={user}
			/>
		);
	});
};
