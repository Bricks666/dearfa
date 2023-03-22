import { useUnit } from 'effector-react';
import { friendsModel } from '../model';

export const useFriends = () => {
	return useUnit(friendsModel.query);
};
