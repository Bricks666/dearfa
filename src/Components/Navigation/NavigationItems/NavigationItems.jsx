import NavigationItemsStyle from "./NavigationItems.module.css";

function NavigationItems(props) {
  return (
    <li
      className={`${NavigationItemsStyle.item} ${
        props.isHidden ? NavigationItemsStyle.item_hidden : ""
      }`}
    >
      <a
        className={`${NavigationItemsStyle.link} ${
          props.isCurrentPage ? NavigationItemsStyle.link_currentPage : ""
        }`}
        href="#1"
      >
        {props.children}
      </a>
    </li>
  );
}

export default NavigationItems;
