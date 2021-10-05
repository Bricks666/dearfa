import React, { Component } from "react";
import { PagesList } from "../../Shared/PagesList/PagesList";

export class PagesListClass extends Component {
	render() {
		return (
			<PagesList
				className={this.props.className}
				currentPage={this.props.currentPage}
				pageCount={this.props.pageCount}
				nextPage={this.props.nextPage.bind(this.props, this.props.usersCount)}
			/>
		);
	}
}
