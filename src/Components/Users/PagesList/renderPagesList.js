export const renderPagesList = (currentPage, pageCount, style, nextPage) => {
  const pages = [];
  const start = currentPage - 5;

  for (
    let i = start > 0 ? start : 1;
    i <= (start > 0 ? Math.min(currentPage + 5, pageCount) : 10);
    i++
  ) {
    pages.push(
      <li key={i}>
        <button
          className={`${style.pageNumber} ${
            i === currentPage ? style.selected : ""
          }`}
          onClick={() => nextPage(i)}
        >
          {i}
        </button>
      </li>
    );
  }

  return pages;
};
