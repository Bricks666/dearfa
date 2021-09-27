import { Component } from "react";
import { Profile } from "./Profile";
import { addLoading } from "../Shared/AddLoading/AddLoading";
import { getProfile } from "../../DAL/api";

export class ProfileClass extends Component {
  async componentDidMount() {
    this.props.startLoadingProfile();

    const id = this.props.match.params.id;

    const user = await getProfile(id);

    if (id === this.props.match.params.id) {
      this.props.setUser(user);
      this.props.endLoadingProfile();
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
