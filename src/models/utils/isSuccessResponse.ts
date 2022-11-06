import { ResponseWithItems, StandardServerResponse } from '@/types';

export const isSuccessResponse = <T>(
	response: StandardServerResponse<T> | ResponseWithItems<T>
): boolean => {
	if ('items' in response) {
		return response.error === null;
	}
	return response.resultCode === 0;
};
