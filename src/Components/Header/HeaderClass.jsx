import axios from "axios";
import { Component } from "react";
import { Header } from "./Header";

export class HeaderClass extends Component {
  async componentDidMount() {
    this.props.startLoadingAuth();

    const response = await axios.get(
      "https://social-network.samuraijs.com/api/1.0/auth/me",
      {
        withCredentials: true,
      }
    );

    if (response.data.resultCode === 0) {
      this.props.auth(response.data.data);
    }

    this.props.stopLoadingAuth();
  }

  render() {
    return <Header {...this.props} />;
  }
}
