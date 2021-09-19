import axios from "axios";
import { Component } from "react";
import { PagesList } from "./PagesList";

export class PagesListClass extends Component {
  async nextPage(page) {
    this.props.startLoading();
    const response = await axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${page}`
    );

    this.props.nextPage(response.data.items, page);
    this.props.stopLoading();
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
