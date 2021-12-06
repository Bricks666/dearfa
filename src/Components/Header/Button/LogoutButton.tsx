import React from "react";

import { useLogout } from "../../../Hooks";
import { Button } from "../../Shared/Buttons/Button/Button";

export const LogoutButton = ({ className, children }) => {
	const { logout } = useLogout();
	return (
		<Button className={className} onClick={logout}>
			{children}
		</Button>
	);
};
