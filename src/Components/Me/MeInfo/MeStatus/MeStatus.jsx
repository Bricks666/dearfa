import React, { Component } from "react";

import { Status } from "../../../Shared/UserCardParts/Status/Status";
import { ModalWindow } from "../../../Shared/ModalWindow/ModalWindow";
import { NewStatusWindow } from "./NewStatusWindow/NewStatusWindow";
import { PenButton } from "../../../Shared/Buttons/PenButton/PenButton";

import MeStatusStyle from "./MeStatus.module.css";

export class MeStatus extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			newStatus: props.status,
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.inputNewStatus = this.inputNewStatus.bind(this);
		this.setNewStatus = this.setNewStatus.bind(this);
	}

	setNewStatus() {
		this.props.setNewStatus(this.state.newStatus);
		this.toggleModal(false);
	}

	toggleModal() {
		this.setState({ showModal: !this.state.showModal });
	}

	inputNewStatus(evt) {
		this.setState({ newStatus: evt.target.value });
	}

	render() {
		return (
			<>
				<Status status={this.props.status} className={MeStatusStyle.status}>
					<PenButton
						onClick={this.toggleModal}
						className={MeStatusStyle.button}
					/>
				</Status>
				<ModalWindow condition={this.state.showModal} close={this.toggleModal}>
					<NewStatusWindow
						setNewStatus={this.setNewStatus}
						newStatus={this.state.newStatus}
						input={this.inputNewStatus}
					/>
				</ModalWindow>
			</>
		);
	}
}
