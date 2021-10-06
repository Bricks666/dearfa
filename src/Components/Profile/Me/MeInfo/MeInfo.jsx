import React from "react";
import { Button } from "../../../Shared/Buttons/Button/Button";
import { ModalWindow } from "../../../Shared/ModalWindow/ModalWindow";

import { ProfileInfo } from "../../ProfileInfo/ProfileInfo";
import { MeStatusConnect } from "./MeStatus/MeStatusConnect";

export const MeInfo = (props) => {
	console.log(props);
	return (
		<ProfileInfo
			user={props.user}
			className={props.className}
			Status={MeStatusConnect}
		>
			<Button>Изменить профиль</Button>
			<ModalWindow></ModalWindow>
		</ProfileInfo>
	);
};
