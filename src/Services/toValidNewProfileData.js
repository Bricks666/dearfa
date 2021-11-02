export const toValidNewProfileData = (notValidData) => {
	return {
		userId: notValidData.userId,
		contacts: notValidData.contacts,
		aboutMe: notValidData.status,
		fullName: notValidData.fullName,
		photo: {
			isNewPhoto: notValidData.newPhoto !== null,
			newPhoto: notValidData.newPhoto,
		},
		lookingForAJob: true,
		lookingForAJobDescription:
			"Почему тут нельзя оставить пустую строку или я что то не пойму",
	};
};
