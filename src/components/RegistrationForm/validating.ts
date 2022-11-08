import Joi from 'joi';

export const validateScheme = Joi.object<any>({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});
