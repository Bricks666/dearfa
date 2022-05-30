export const mockServerResponse = async <T>(
	response: T,
	timeout = 150
): Promise<T> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(response), timeout);
	});
};
