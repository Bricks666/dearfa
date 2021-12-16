import React, { FC } from "react";

import { useLogout } from "../../../Hooks";
import { IOnlyClassComponent } from "../../../Types/Common";
import { Button } from "../../Shared/Buttons/Button/Button";

export const LogoutButton: FC<IOnlyClassComponent> = ({ className, children }) => {
	const { logout } = useLogout();
	return (
		<Button className={className} onClick={logout}>
			{children}
		</Button>
	);
};
