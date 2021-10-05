import { renderPagesList } from "./renderPagesList";
import { Button } from "../../Shared/Buttons/Button/Button";

import PagesListStyle from "./PagesList.module.css";

export const PagesList = (props) => {
  return (
    <ul className={PagesListStyle.pagesList}>
      <Button
        className={PagesListStyle.button}
        onClick={() => props.nextPage(1)}
      >
        Первая
      </Button>
      {renderPagesList(
        props.currentPage,
        props.pageCount,
        {
          pageNumber: PagesListStyle.pageNumber,
          selected: PagesListStyle.selected,
        },
        props.nextPage
      )}
      <Button
        className={PagesListStyle.button}
        onClick={() => props.nextPage(props.pageCount)}
      >
        Последняя
      </Button>
    </ul>
  );
};
