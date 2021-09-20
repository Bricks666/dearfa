import axios from "axios";
import { Component } from "react";
import { Profile } from "./Profile";
import { addLoading } from "../Shared/AddLoading/AddLoading";

export class ProfileClass extends Component {
  async componentDidMount() {
    this.props.startLoadingProfile();

    const id = this.props.match.params.id;

    const response = await axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${id}`
    );

    if (id === this.props.match.params.id) {
      this.props.setUser(response.data);
      this.props.stopLoadingProfile();
    }
  }

  render() {
    const WithLoading = addLoading(Profile);
    return (
      <WithLoading
        className={this.props.className}
        user={this.props.user}
        isLoading={this.props.isLoading}
      />
    );
  }
}
