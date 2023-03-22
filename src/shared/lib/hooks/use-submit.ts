import { FormEventHandler } from 'react';
import { VoidFunction } from '@/shared/types';

export const useSubmit = (
	handler: VoidFunction
): FormEventHandler<HTMLFormElement> => {
	return (evt) => {
		evt.preventDefault();
		handler();
	};
};
