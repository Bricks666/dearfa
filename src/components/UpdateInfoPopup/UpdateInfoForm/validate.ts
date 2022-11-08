import Joi from 'joi';
import { UpdateInfoParams } from '@/api/profile';
import { Contacts } from '@/models/profile';

export const validateScheme = Joi.object<UpdateInfoParams>({
	aboutMe: Joi.string().max(32).required(),
	contacts: Joi.object<Contacts>({
		facebook: Joi.string().optional().allow(null).empty(''),
		github: Joi.string().optional().allow(null).empty(''),
		instagram: Joi.string().optional().allow(null).empty(''),
		mainLink: Joi.string().optional().allow(null).empty(''),
		twitter: Joi.string().optional().allow(null).empty(''),
		vk: Joi.string().optional().allow(null).empty(''),
		website: Joi.string().optional().allow(null).empty(''),
		youtube: Joi.string().optional().allow(null).empty(''),
	}).required(),
	fullName: Joi.string().max(32).required(),
	lookingForAJob: Joi.bool().required(),
	lookingForAJobDescription: Joi.string().required(),
});
