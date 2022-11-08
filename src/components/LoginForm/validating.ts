import Joi from 'joi';
import { LoginRequest } from '@/api/auth';

export const validateScheme = Joi.object<LoginRequest>({
	email: Joi.string().required(),
	password: Joi.string().min(6).required(),
	rememberMe: Joi.boolean(),
});
