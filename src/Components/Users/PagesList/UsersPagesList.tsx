import React, { FC } from "react";

import { useTypedSelector } from "../../../Hooks";
import { usersSelectors } from "../../../Selectors";
import { IOnlyClassComponent } from "../../../Types/Common";
import { PagesListWithRouting } from "../../Shared";

export const UsersPagesList: FC<IOnlyClassComponent> = ({ className }) => {
	const pageCount = useTypedSelector(usersSelectors.getPageCount);

	return <PagesListWithRouting className={className} pageCount={pageCount} />;
};
