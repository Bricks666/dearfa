import React from "react";

import { useSelector } from "react-redux";
import { usersSelectors } from "../../../Selectors";
import { PagesListWithRouting } from "../../Shared";

export const UsersPagesList = ({ className }) => {
	const pageCount = useSelector(usersSelectors.getPageCount);
	return <PagesListWithRouting className={className} pageCount={pageCount} />;
};
