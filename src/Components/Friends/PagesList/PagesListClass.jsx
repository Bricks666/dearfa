import React, { Component } from "react";
import { PagesList } from "../../Shared";

export class PagesListClass extends Component {
	render() {
		return (
			<PagesList
				currentPage={this.props.currentPage}
				pageCount={this.props.pageCount}
				nextPage={this.props.nextPage.bind(this.props, this.props.friendsCount)}
			/>
		);
	}
}
