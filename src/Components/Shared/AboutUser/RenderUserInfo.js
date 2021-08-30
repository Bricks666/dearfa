import { AboutUserItem } from "./AboutUserItem/AboutUserItem";

export const RenderUserInfo = (aboutUser) => {
  return aboutUser.map((info) => {
    return <AboutUserItem info={info} />;
  });
};
