import { useUnit } from 'effector-react';
import { usersModel } from '../model';

export const useUsers = () => {
	return useUnit(usersModel.query);
};
