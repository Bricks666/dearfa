import { Component } from "react";
import { Profile } from "./Profile";
import { addLoading } from "../Shared/AddLoading/AddLoading";

const WithLoading = addLoading(Profile);

export class ProfileClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.user.userId,
    };
    console.log(props);
  }

  loadProfile() {
    this.props.loadProfile(this.props.match.params.id);
    this.setState({ id: this.props.match.params.id });
  }

  componentDidMount() {
    this.loadProfile();
  }

  componentDidUpdate() {
    if (this.state.id !== this.props.match.params.id) {
      this.loadProfile();
    }
  }
  render() {
    return (
      <WithLoading
        className={this.props.className}
        user={this.props.user}
        isLoading={this.props.isLoading}
      />
    );
  }
}
