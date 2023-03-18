import Joi from 'joi';
import { UpdateStatusParams } from '@/shared/api/profile';

export const validateScheme = Joi.object<UpdateStatusParams>({
	status: Joi.string().required(),
});
