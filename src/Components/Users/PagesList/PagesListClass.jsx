import { Component } from "react";
import { getUsers } from "../../../DAL/api";
import { PagesList } from "./PagesList";

export class PagesListClass extends Component {
  async nextPage(page) {
    this.props.startLoadingUsers();
    const users = await getUsers(this.props.usersCount, page);

    this.props.nextPage(users.items, page);
    this.props.stopLoadingUsers();
  }

  render() {
    return (
      <PagesList
        className={this.props.className}
        currentPage={this.props.currentPage}
        pageCount={this.props.pageCount}
        nextPage={this.nextPage.bind(this)}
      />
    );
  }
}
