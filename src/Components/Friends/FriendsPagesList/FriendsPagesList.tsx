import React, { FC } from "react";
import { useSelector } from "react-redux";
import { friendsSelectors } from "../../../Selectors";
import { IOnlyClassComponent } from "../../../Types/Common";

import { PagesListWithRouting } from "../../Shared";

export const FriendsPagesList: FC<IOnlyClassComponent> = ({ className }) => {
	const pageCount = useSelector(friendsSelectors.getPageCount);

	return <PagesListWithRouting className={className} pageCount={pageCount} />;
};
