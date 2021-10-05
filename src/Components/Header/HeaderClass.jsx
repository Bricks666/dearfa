import { Component } from "react";
import { Header } from "./Header";

export class HeaderClass extends Component {
  componentDidMount() {
    this.props.auth();
  }

  render() {
    return <Header {...this.props} />;
  }
}
