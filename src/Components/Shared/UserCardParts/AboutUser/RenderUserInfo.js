import { AboutUserItem } from "./AboutUserItem/AboutUserItem";

export const RenderUserInfo = (about) => {
  return about.map((info) => {
    return <AboutUserItem info={info} key={info.id} />;
  });
};
