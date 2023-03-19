import { cache, createQuery } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { Number } from 'runtypes';
import {
	dialogsApi,
	getStandardServerResponse,
	StandardServerResponse,
	UpdateDialogParams
} from '@/shared/api';
import { standardExtractor } from '@/shared/lib';

const Ddialog = createDomain();

const handlerFx = Ddialog.effect(dialogsApi.update);

export const query = createQuery<
	UpdateDialogParams,
	StandardServerResponse<any>,
	Error,
	StandardServerResponse<any>,
	any
>({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(Number)) as any,
	mapData: standardExtractor,
}) as any;

cache(query);
