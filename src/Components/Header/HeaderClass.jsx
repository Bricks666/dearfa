import { Component } from "react";
import { Header } from "./Header";
import { getAuth } from "../../DAL/api";

export class HeaderClass extends Component {
  async componentDidMount() {
    this.props.startLoadingAuth();

    const response = await getAuth();

    if (response.resultCode === 0) {
      this.props.auth(response.data);
    }

    this.props.endLoadingAuth();
  }

  render() {
    return <Header {...this.props} />;
  }
}
