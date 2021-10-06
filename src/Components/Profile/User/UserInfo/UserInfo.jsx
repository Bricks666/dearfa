import React from "react";

import { ProfileInfo } from "../../ProfileInfo/ProfileInfo";
import { Status } from "../../../Shared/UserCardParts/Status/Status";

export const UserInfo = (props) => {
	return (
		<ProfileInfo
			user={props.user}
			className={props.className}
			Status={Status}
		/>
	);
};
