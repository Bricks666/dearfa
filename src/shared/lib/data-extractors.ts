import { StandardServerResponse } from '../api';

export const standardExtractor = <T>({
	result,
}: {
	result: StandardServerResponse<T>;
}) => {
	return result.data;
};
