import { SET_NEW_STATUS } from "../../ActionsConstants";

export const setNewStatus = (newStatus) => {
	return {
		type: SET_NEW_STATUS,
		newStatus,
	};
};
