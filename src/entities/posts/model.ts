import { cache, createQuery, Query } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { Array } from 'runtypes';
import {
	getStandardServerResponse,
	Post,
	postsApi,
	RTPost
} from '@/shared/api';
import { standardExtractor } from '@/shared/lib';

const posts = createDomain();

const handlerFx = posts.effect(postsApi.getAll);

export const query = createQuery({
	initialData: [],
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(Array(RTPost))),
	mapData: standardExtractor,
}) as Query<void, Post[], Error, Post[]>;

cache(query);
