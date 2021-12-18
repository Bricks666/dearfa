import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useIsLogin, useProfileURL } from "../../Hooks";

export const RequireLogin: FC = () => {
	const navigate = useNavigate();
	const isLogin = useIsLogin();
	const location = useLocation();

	const profileURL = useProfileURL();

	const lastPath = location.state?.from?.pathname || profileURL;

	if (isLogin) {
		navigate(lastPath, { replace: true });
	} else {
		navigate("/login");
	}

	return null;
};
