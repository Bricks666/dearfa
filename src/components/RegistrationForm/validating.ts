import Joi from 'joi';
import { LoginRequest } from '@/api';
import { EMAIL_PATTERN } from '@/consts';

export const validateScheme = Joi.object<any>({
	email: Joi.string().pattern(EMAIL_PATTERN).required(),
	password: Joi.string().min(6).required(),
});
