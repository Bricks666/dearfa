import Joi from 'joi';
import { UpdateStatusParams } from '@/api/profile';

export const validateScheme = Joi.object<UpdateStatusParams>({
	status: Joi.string().required(),
});
