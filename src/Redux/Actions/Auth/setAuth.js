import { AUTH } from "../Constants";

export const setAuth = (data) => {
  return {
    type: AUTH,
    data: {
      userId: data.id,
      fullName: data.login,
    },
  };
};
