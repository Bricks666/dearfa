import React, { FC } from "react";

import { useSignout } from "../../../Hooks";
import { IOnlyClassComponent } from "../../../Types/Components";
import { Button } from "../../Shared/Button/Button";

export const LogoutButton: FC<IOnlyClassComponent> = ({
	className,
	children,
}) => {
	const { logout } = useSignout();
	return (
		<Button className={className} onClick={logout}>
			{children}
		</Button>
	);
};
