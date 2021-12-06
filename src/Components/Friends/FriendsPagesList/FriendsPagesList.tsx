import React from "react";
import { useSelector } from "react-redux";
import { friendsSelectors } from "../../../Selectors";

import { PagesListWithRouting } from "../../Shared";

export const FriendsPagesList = ({ className }) => {
	const pageCount = useSelector(friendsSelectors.getPageCount);

	return <PagesListWithRouting className={className} pageCount={pageCount} />;
};
