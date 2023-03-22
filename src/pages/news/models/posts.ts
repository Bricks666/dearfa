import { sample } from 'effector';
import { postsModel } from '@/entities/posts';
import { paramsAndQueryLoaded } from './page';

sample({
	clock: [paramsAndQueryLoaded],
	target: postsModel.query.start,
});
