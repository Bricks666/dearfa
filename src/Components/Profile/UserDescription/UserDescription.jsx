import classNames from "classnames";
import React from "react";

import { AboutMe, Contacts, DataList, Status } from "../../Shared";

import UserDescriptionStyle from "./UserDescription.module.css";

export const UserDescription = ({
	className,
	contacts,
	aboutMe,
	status,
	Status: StatusItem = Status,
}) => {
	return (
		<DataList
			className={classNames(UserDescriptionStyle.userDescription, className)}
		>
			<AboutMe aboutMe={aboutMe} />
			<StatusItem status={status} />
			<Contacts contacts={contacts} />
		</DataList>
	);
};
