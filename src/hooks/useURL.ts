import { URL } from '@/types';

export const useURL = (fileOrURL: URL | File | FileList | null): URL => {
	if (fileOrURL === null) {
		return '';
	}

	if (typeof fileOrURL === 'string') {
		return fileOrURL;
	}
	if ('length' in fileOrURL) {
		return useURL(fileOrURL[0] ?? null);
	}

	return globalThis.URL.createObjectURL(fileOrURL);
};
