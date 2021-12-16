import classNames from "classnames";
import React, { ComponentType, FC } from "react";
import { EmptyObject, IOnlyClassComponent } from "../../../Types/Common";
import { IContacts } from "../../../Types/Redux";

import { AboutMe, Contacts, DataList, Status } from "../../Shared";

import UserDescriptionStyle from "./UserDescription.module.css";

interface IUserDescription extends IOnlyClassComponent {
	contacts: IContacts | EmptyObject;
	aboutMe: string;
	status: string;
	Status?: ComponentType<{ status: string }>;
}
export const UserDescription: FC<IUserDescription> = ({
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
