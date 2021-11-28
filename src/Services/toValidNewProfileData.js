export const toValidNewProfileData = (notValidData) => {
	return {
		userId: notValidData.userId,
		contacts: notValidData.contacts,
		aboutMe: notValidData.aboutMe,
		fullName: notValidData.fullName,
		lookingForAJob: true,
		lookingForAJobDescription:
			"Почему тут нельзя оставить пустую строку или я что то не пойму",
	};
};
