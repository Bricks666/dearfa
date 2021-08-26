import { AboutUserItem } from "./AboutUserItem/AboutUserItem";

export const RenderUserInfo = (aboutUser) => {
  return aboutUser.map((item, index) => {
    return (
      <AboutUserItem
        term={item.term}
        description={item.description}
        href={item.href}
      />
    );
  });
};
