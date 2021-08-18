import { NavigationItem } from "./NavigationItem/NavigationItem";

export const RenderNavigation = (navigationItems) => {
  return navigationItems.map((item) => {
    return <NavigationItem to={item.path}>{item.content}</NavigationItem>;
  });
};
