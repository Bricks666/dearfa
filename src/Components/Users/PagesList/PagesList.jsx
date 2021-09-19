import { renderPagesList } from "./renderPagesList";

import PagesListStyle from "./PagesList.module.css";

export const PagesList = (props) => {
  return (
    <ul className={PagesListStyle.pagesList}>
      {renderPagesList(
        props.currentPage,
        props.pageCount,
        {
          pageNumber: PagesListStyle.pageNumber,
          selected: PagesListStyle.selected,
        },
        props.nextPage
      )}
    </ul>
  );
};
