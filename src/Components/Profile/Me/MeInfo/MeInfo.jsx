import React from "react";

import { ProfileInfo } from "../../ProfileInfo/ProfileInfo";
import { MeStatusConnect } from "./MeStatus/MeStatusConnect";

export const MeInfo = (props) => {
	console.log(props);
	return (
		<ProfileInfo
			user={props.user}
			className={props.className}
			Status={MeStatusConnect}
		/>
	);
};
